import { Graph } from "graphlib" // https://github.com/dagrejs/graphlib/wiki
import FileSystemEmulator from "../types/FileSystemEmulator"
import FileSystemGroup from "../types/FileSystemGroup"
import FileSystemType from "../types/FileSystemType"
import FileSystemUser from "../types/FileSystemUser"

const Ext4 = {
	name: "ext4",
	prohibitedFileNameCharecters: ["\0", "\\0", ".", ".."],
} as FileSystemType

/**
 * Emulates a Unix filesystem via methods for managing files and folders, as wel as managing users for permision perposes.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator}
 */
class UnixFileSystemEmulator implements FileSystemEmulator {
	private graph = new Graph({ compound: true, directed: true })
	private currentUser: FileSystemUser
	private currentGroup: FileSystemGroup
	private currentDir: string

	constructor(user?: FileSystemUser | undefined) {
		// set root user and group fields
		this.newDir(this.rootDir)
		this.currentUser = this.rootUsr
		var rootGrp: FileSystemGroup = {
			name: this.rootUsr.name,
			users: [this.rootUsr],
		}
		this.currentGroup = rootGrp
		this.groups.push(rootGrp)
		this.newDir(this.homeDir, this.rootDir)

		this.currentDir = this.useradd(this.rootUsr) as string
		if (user !== undefined && user.name !== this.rootUsr.name) {
			this.currentDir = this.useradd(user) as string
			this.currentUser = user
			var userGrp: FileSystemGroup = {
				name: this.currentUser.name,
				users: [this.rootUsr, this.currentUser],
			}
			this.groups.push(userGrp)
			this.currentGroup = userGrp
		}

		this.fileSystemType = Ext4
	}

	readonly rootDir = "/"
	readonly homeDir = "/home/"
	readonly rootUsr: FileSystemUser = {
		name: "root",
		password: "password",
		homeDir: "/home/root/",
	}
	readonly users = [] as FileSystemUser[]
	readonly groups = [] as FileSystemGroup[]
	readonly fileSystemType: FileSystemType

	public isDirectory = (path: string): boolean => {
		return path.endsWith("/")
	}
	public pathExists = (path: string): boolean => {
		path = this.replaceRepetetiveForwardslashes(path)
		path = this.resolveRelativePathString(path)
		return this.graph.hasNode(path)
	}
	public getCurrentDirectory = (): string => {
		return this.currentDir.startsWith(this.currentUser.homeDir!) ? this.currentDir.replace(this.currentUser.homeDir!, "~") : this.currentDir
	}
	public fileHasContent = (file: string): boolean | TypeError => {
		file = this.replaceRepetetiveForwardslashes(file)
		file = this.resolveRelativePathString(file)
		if (this.isDirectory(file)) {
			return new TypeError(`-bash: ${file}: Is a directory`)
		}
		if (!this.graph.hasNode(file)) {
			return new TypeError(`-bash: ${file}: No such file or directory`)
		}

		var contentChild = this.graph.children(file).find(f => f === file + "-content")
		return contentChild !== undefined && contentChild !== ""
	}
	public getFileContent = (file: string): string | TypeError => {
		file = this.replaceRepetetiveForwardslashes(file)
		file = this.resolveRelativePathString(file)
		if (!this.graph.hasNode(file)) {
			return new TypeError(`-bash: ${file}: No such file or directory`)
		}
		var contentChild = this.graph.children(file).find(f => f === file + "-content")
		return contentChild ? this.graph.node(contentChild) : ""
	}
	public setFileContent = (file: string, content: string): void | TypeError => {
		file = this.replaceRepetetiveForwardslashes(file)
		file = this.resolveRelativePathString(file)
		if (this.isDirectory(file)) {
			return new TypeError(`-bash: ${file}: Is a directory`)
		}

		var parent = this.resolveParentDir(file)
		if (!this.graph.hasNode(file)) {
			this.newFile(file, parent)
		}

		var fileContent = file + "-content"
		this.graph.setNode(fileContent, content)
		this.graph.setParent(fileContent, file)
		this.setModified(file, parent)
	}
	public touch = (file: string) => {
		var fullPath = this.resolveRelativePathString(file)
		var parent = this.resolveParentDir(file)
		if (!this.graph.hasNode(fullPath)) {
			if (!file.includes("/")) {
				this.newFile(fullPath, this.currentDir)
			} else {
				this.newFile(fullPath, parent)
			}
		} else {
			this.setModified(fullPath, parent)
		}
	}
	public mkdir = (dirNames: string): Error[] => {
		var errors = [] as Error[]
		var dirs = dirNames.split(/\s+/).filter(s => {
			return s !== ""
		})
		for (var i = 0; i < dirs.length; i++) {
			var dirName = dirs[i]

			dirName = this.replaceRepetetiveForwardslashes(dirName)
			dirName = this.resolveRelativePathString(dirName)
			dirName = dirName.replace("%20", " ")

			// check if the path to the new directory exists
			var dirSplit = dirName.split("/").filter(s => {
				return s !== ""
			})
			dirSplit.splice(-1)
			var parent = dirSplit.join("/")
			parent = this.prependSlashToStartOfPath(parent)
			parent = this.appendSlashToEndOfPath(parent)

			if (this.graph.hasNode(dirName)) {
				errors.push(new RangeError(`mkdir: cannot create directory ‘${dirName}’: File exists`))
			} else if (!this.graph.hasNode(parent)) {
				errors.push(new RangeError(`mkdir: cannot create directory ‘${dirName}’: No such file or directory`))
			} else {
				this.newDir(dirName, parent)
				this.newDir(".", dirName)
				this.newDir("..", dirName)
			}
		}
		return errors
	}
	public useradd = (user: FileSystemUser): string | RangeError => {
		if (
			this.users.some(u => {
				return u.name === user.name
			})
		) {
			return new RangeError(`useradd: The user '${user.name}' already exists.`)
		} else {
			this.users.push(user)
			var group: FileSystemGroup = {
				name: user.name,
				users: [this.rootUsr, user],
			}
			this.newGroup(group)
			var homeDir = this.newUserDir(user)
			user.homeDir = homeDir
			return user.homeDir
		}
	}
	public pwd = () => {
		return this.currentDir
	}
	public cd = (dir: string): string | RangeError => {
		dir = this.resolveRelativePathString(dir)
		if (!this.pathExists(dir)) {
			return new RangeError(`-bash: cd: ${dir}: No such file or directory`)
		}
		this.currentDir = dir
		return this.currentDir
	}

	/**
	 * Replaces any instance of repetetive forward slashes with a single forward slash:
	 * ////a///b////// => /a/b/
	 * @param {string} dir the directory string to validate
	 * @returns {string} the directory string containing no repetetive forward slashes
	 */
	private replaceRepetetiveForwardslashes = (dir: string): string => {
		return dir.replace(/\/+/g, "/")
	}

	/**
	 * Resolves path strings with relative paths and returns the absolute path.
	 * If ```path``` starts with ./, it will be replaced with ```this.currentDir```.
	 * If ```path``` does not starts with ./ or /, ```this.currentDir``` will be prepended to it.
	 * @param {string} path the directory path to resolve
	 * @returns {string} the resolved relative directory string
	 */
	private resolveRelativePathString = (path: string): string => {
		if (!path.startsWith("/") && !path.startsWith("./")) {
			path = this.currentDir + path
		}

		if (path.startsWith("./")) {
			path = this.currentDir + path.slice(2)
		}
		if (path.startsWith("../")) {
			path = this.currentDir.slice(0, this.currentDir.lastIndexOf("/"))
			path = path.slice(0, path.lastIndexOf("/"))
			path = path.slice(0, path.lastIndexOf("/")) + "/"
		}

		var output = ""
		for (var i = 0; i < path.length; i++) {
			output = output + path[i]
			if (output.match(/(?<=\/)(\.\.\/)+$/)) {
				// /a/b/../ => /a/
				output = output.slice(0, output.lastIndexOf("/"))
				output = output.slice(0, output.lastIndexOf("/"))
				output = output.slice(0, output.lastIndexOf("/")) + "/"
			} else if (output.match(/(?<=\/)(\.\/)+$/)) {
				// /a/b/./ => /a/b/
				output = output.slice(0, output.lastIndexOf("/"))
				output = output.slice(0, output.lastIndexOf("/")) + "/"
			}
		}

		return output
	}

	/**
	 * Resolves the parent directory of ```path```
	 * @param {string} path the path to get the parent directory of
	 * @returns {string} parent directory of ```path```
	 */
	private resolveParentDir = (path: string): string => {
		if (!path.includes("/")) return path
		path = this.replaceRepetetiveForwardslashes(path)
		// /home/user/
		if (path.endsWith("/")) path = path.slice(0, path.lastIndexOf("/"))
		// /home/user
		path = path.slice(0, path.lastIndexOf("/") + 1)
		// /home/
		return path
	}

	/**
	 * Adds a new user directory as child of the parent directory, which defaults to the home directory.
	 * @param {FileSystemUser} user the user to create the home directory for
	 * @returns {string} the path to the users home directory
	 */
	private newUserDir = (user: FileSystemUser): string => {
		if (user.homeDir === undefined) {
			user.homeDir = this.homeDir + user.name + "/"
		} else {
			user.homeDir = this.appendSlashToEndOfPath(user.homeDir)
		}
		return this.newDir(user.homeDir, this.resolveParentDir(user.homeDir))
	}

	private newGroup = (group: FileSystemGroup): void => {
		if (this.groups.some(g => g.name === group.name)) {
			for (var i = 0; i < this.groups.length; i++) {
				if (this.groups[i].name === group.name) {
					this.groups[i].users = [...this.groups[i].users, ...group.users]
				}
			}
		} else {
			this.groups.push(group)
		}
	}

	/**
	 * If path does not end with ```"/"```, appends ```"/"``` to path and returns it
	 * @param {string} path path to append ```"/"``` to
	 * @returns {string} path with ```"/"``` at the end
	 */
	private appendSlashToEndOfPath = (path: string): string => {
		if (!path.endsWith("/")) path = path + "/"
		return path
	}

	/**
	 * If path does not start with ```"/"```, prepend ```"/"``` to path and returns it
	 * @param {string} path path to prepend ```"/"``` to
	 * @returns {string} path with ```"/"``` at the start
	 */
	private prependSlashToStartOfPath = (path: string): string => {
		if (!path.startsWith("/")) path = "/" + path
		return path
	}

	/**
	 * Creates a new directory. Resolves the absolute path before creation.
	 * @param {string} dir the directory to create
	 * @param {string} parent the parent of the new directory (default is ```this.currentDir```)
	 * @returns {string} ```dir``` that was created
	 */
	private newDir = (dir: string, parent: string = this.currentDir): string => {
		if (dir !== this.rootDir) {
			dir = this.replaceRepetetiveForwardslashes(dir)
			dir = this.resolveRelativePathString(dir)
			dir = this.appendSlashToEndOfPath(dir)
			this.graph.setNode(dir, dir)
			this.graph.setParent(dir, parent)
			this.setModified(dir, parent)
			this.setOwner(dir)
			this.setGroup(dir)
			this.setPermisions(dir, 7, 5, 5)
		}
		return dir
	}

	/**
	 * Creates a new file. Resolves the absolute path before creation.
	 * @param {string} file the file to create
	 * @param {string} parent the parent of the new file (default is ```this.currentDir```)
	 * @returns {string} ```file``` that was created
	 */
	private newFile = (file: string, parent: string = this.currentDir): string => {
		file = this.replaceRepetetiveForwardslashes(file)
		file = this.resolveRelativePathString(file)
		this.graph.setNode(file, file)
		this.graph.setParent(file, parent)
		this.setModified(file, parent)
		this.setOwner(file)
		this.setGroup(file)
		this.setPermisions(file, 6, 4, 4)
		return file
	}

	// private setFileContent = (path: string, parent: string, content: string) => {
	// 	path = this.replaceRepetetiveForwardslashes(path)
	// 	path = this.resolveRelativePathString(path)

	// 	var pathContent = path + "-content"
	// 	this.graph.setNode(pathContent, content)
	// 	this.graph.setParent(pathContent, parent)
	// 	this.setModified(path, parent)
	// }

	/**
	 * Sets the modified date for the current path node and all its parrents
	 * @param {string} path 	The path to set the modified date for, will always be the current date in a UTC format
	 * @param {string} parent 	The parent of the current path
	 */
	private setModified = (path: string, parent: string) => {
		path = this.replaceRepetetiveForwardslashes(path)
		path = this.resolveRelativePathString(path)
		parent = this.replaceRepetetiveForwardslashes(parent)
		parent = this.resolveRelativePathString(parent)

		var pathModified = path + "-modified"
		this.graph.setNode(pathModified, new Date().toUTCString())
		if (path !== "/") {
			this.setModified(parent, this.resolveParentDir(parent))
		}
	}

	/**
	 * Sets ```this.currentUser``` as the owner of the given path
	 * @param path The path to set the owner of
	 */
	private setOwner = (path: string) => {
		path = this.replaceRepetetiveForwardslashes(path)
		path = this.resolveRelativePathString(path)
		var pathOwner = path + "-owner"
		this.graph.setNode(pathOwner, this.currentUser)
		this.graph.setParent(pathOwner, path)
	}

	/**
	 * Sets ```this.currentGroup``` as the group for the given path
	 * @param path The path to set the group of
	 */
	private setGroup = (path: string) => {
		path = this.replaceRepetetiveForwardslashes(path)
		path = this.resolveRelativePathString(path)
		var pathGroup = path + "-group"
		this.graph.setNode(pathGroup, this.currentGroup.name)
		this.graph.setParent(pathGroup, path)
	}

	/**
	 * Sets the permissions for the given path
	 * @param path Path to set the permissions for
	 * @param owner The numeric represantation of the permisions for the owner this path belongs to
	 * @param group The numeric represantation of the permisions for the group this path belongs to
	 * @param other The numeric represantation of the permisions for the world
	 */
	private setPermisions = (path: string, owner: 1 | 2 | 3 | 4 | 5 | 6 | 7, group: 1 | 2 | 3 | 4 | 5 | 6 | 7, other: 1 | 2 | 3 | 4 | 5 | 6 | 7) => {
		path = this.replaceRepetetiveForwardslashes(path)
		path = this.resolveRelativePathString(path)
		var pathPermisions = path + "-permissions"
		this.graph.setNode(pathPermisions, owner + "" + group + "" + other)
		this.graph.setParent(pathPermisions, path)
	}
}

export default UnixFileSystemEmulator
export { Ext4 }
