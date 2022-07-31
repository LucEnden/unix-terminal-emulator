import { Graph } from "graphlib" // https://github.com/dagrejs/graphlib/wiki
import FileSystemEmulator from "./types/FileSystemEmulator"
import FileSystemType from "./types/FileSystemType"
import FileSystemUser from "./types/FileSystemUser"

const Ext4 = {
	name: "ext4",
	prohibitedFileNameCharecters: ["\0", "\\0", ".", ".."],
} as FileSystemType

class UnixFileSystemEmulator implements FileSystemEmulator {
	private graph = new Graph({ compound: true, directed: true })
	private currentUser: FileSystemUser
	private currentDir: string

	constructor(user?: FileSystemUser | undefined) {
		this.newDir(this.rootDir)
		this.newDir(this.homeDir)

		this.currentDir = this.useradd(this.rootUsr) as string
		this.currentUser = this.rootUsr
		if (user !== undefined && user.name !== this.rootUsr.name) {
			this.currentDir = this.useradd(user) as string
			this.currentUser = user
		}

		this.fileSystemType = Ext4
	}
	
	readonly rootDir = "/"
	readonly homeDir = "/home/"
	readonly rootUsr: FileSystemUser = {
		name: "root",
		password: "password",
		homeDir: "/home/root/"
	}
	readonly users = [] as FileSystemUser[]
	readonly fileSystemType: FileSystemType

	public getCurrentDirectory = () => {
		return this.currentDir.startsWith(this.currentUser.homeDir!) ? this.currentDir.replace(this.currentUser.homeDir!, "~") : this.currentDir
	}
	public touch = (file: string) => {
		if (!file.includes("/")) {
			this.newFile(file, this.currentDir)
		} else {
			var fullPath = this.resolveRelativePathString(file)
			var parent = this.resolveParentDir(file)
			this.newFile(fullPath, parent)
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

			if (!this.graph.hasNode(parent)) {
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
			var homeDir = this.newUserDir(user)
			user.homeDir = homeDir
			this.users.push(user)
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
	 * Checks if the path string exists as a node in the filesystem graph
	 * @param {string} path The path to check if it exsits
	 * @returns {boolean} ```true``` if the path string exists as a node in the filesystem graph, ```false``` otherwise
	 */
	private pathExists = (path: string): boolean => {
		return this.graph.hasNode(path)
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
	 * @param {string} path the directory path to resolve
	 * @returns {string} the resolved relative directory string
	 */
	private resolveRelativePathString = (path: string): string => {
		if (!path.startsWith("/") && !path.startsWith("./")) {
			path = "./" + path
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
		path = path.slice(0, path.lastIndexOf("/"))
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
		return file
	}
}

export default UnixFileSystemEmulator
export { Ext4 }
