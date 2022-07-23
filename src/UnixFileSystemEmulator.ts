import { Graph } from "graphlib" // https://github.com/dagrejs/graphlib/wiki
import { TerminalFileSystemType, TerminalFileSystemUser } from "./interfaces"

const Ext4 = {
	name: "ext4",
	prohibitedFileNameCharecters: ["\0", "\\0", ".", ".."],
} as TerminalFileSystemType

class UnixFileSystemEmulator {
	/**
	 * A compound, directed graph instance representing the filesystem tree.
	 */
	private graph = new Graph({ compound: true, directed: true })
	/**
	 * The root directory of the file system
	 */
	private readonly rootDir = "/"
	/**
	 * The home directory
	 */
	private readonly homeDir = this.rootDir + "home/"

	/**
	 * The root user
	 */
	private readonly rootUsr: TerminalFileSystemUser = {
		name: "root",
		password: "password",
		homeDir: this.homeDir + "root/",
	}
	/**
	 * An array to keep track of existing users
	 */
	private readonly users = [] as TerminalFileSystemUser[]
	private currentUser: TerminalFileSystemUser
	/**
	 * The current working directory
	 */
	private currentDir: string
	/**
	 * The file system type
	 */
	private fileSystemType: TerminalFileSystemType

	constructor(user?: TerminalFileSystemUser | undefined) {
		this.newDir(this.rootDir)
		this.newDir(this.homeDir)

		this.currentDir = this.adduser(this.rootUsr) as string
		this.currentUser = this.rootUsr
		if (user !== undefined && user.name !== this.rootUsr.name) {
			this.currentDir = this.adduser(user) as string
			this.currentUser = user
		}

		this.fileSystemType = Ext4
	}

	/**
	 * @returns {string} The absolute path to the current directory.  
	 * If the current directory is inside the current users home folder, the start of the directory is replaced with "~".
	 */
	public GetCurrentDirectory = () => {
		return this.currentDir.startsWith(this.currentUser.homeDir) ? this.currentDir.replace(this.currentUser.homeDir, "~") : this.currentDir
	}

	/**
	 * Emulates the mkdir command.
	 * @param {string} dirNames a space delimited string containing the directories to create
	 * @returns {Error[]} An array of errors that occured during the creation of the directories
	 */
	public mkdir = (dirNames: string): Error[] => {
		var errors = [] as Error[]
		var dirs = dirNames.split(/\s+/).filter(s => {
			return s !== ""
		})
		for (var i = 0; i < dirs.length; i++) {
			var dirName = dirs[i]

			dirName = this.replaceRepetetiveForwardslashes(dirName)
			dirName = this.resolveRelativeDirString(dirName)
			dirName = dirName.replace("%20", " ")

			// check if the path to the new directory exists
			var dirSplit = dirName.split("/").filter(s => {
				return s !== ""
			})
			dirSplit.splice(-1)
			var parent = dirSplit.join("/")
			if (!parent.startsWith("/")) parent = "/" + parent
			if (!parent.endsWith("/")) parent = parent + "/"

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

	/**
	 * Adds a new user to the filesystem if it doesnt already exist
	 * @param {TerminalFileSystemUser} user the user to add to the file system
	 * @returns {string|RangeError} range error if the user already exists, else the full path to the user directory
	 */
	public adduser = (user: TerminalFileSystemUser): string | RangeError => {
		if (this.users.some((u) => {
			return u.name === user.name
		})) {
			return new RangeError(`adduser: The user '${user.name}' already exists.`)
		} else {
			user.homeDir = this.newUserDir(user)
			this.users.push(user)
			return user.homeDir
		}
	}

	/**
	 * Emulates the pwd command.
	 * @returns The full absolute path to the current working directory
	 */
	public pwd = () => {
		return this.currentDir
	}

	/**
	 * Emulates the cd command.
	 * @param dir The directory to switch to
	 * @returns {string|RangeError} If the directory exists, returns the new working directory, RangeError otherwise
	 */
	public cd = (dir: string): string | RangeError => {
		dir = this.resolveRelativeDirString(dir)
		if (!this.dirExists(dir)) {
			return new RangeError(`-bash: cd: ${dir}: No such file or directory`)
		}
		this.currentDir = dir
		return this.currentDir
	}

	/**
	 * Checks if the dir string exists as a node in the filesystem graph
	 * @param {string} dir The directory path to check if it exsits
	 * @returns {boolean} ```true``` if the dir string exists as a node in the filesystem graph, ```false``` otherwise
	 */
	private dirExists = (dir: string): boolean => {
		return this.graph.hasNode(dir)
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
	 * Resolves directory strings with relative paths and returns the absolute path.
	 * If ```dir``` starts with ./, it will be replaced with ```this.currentDir```.
	 * If ```dir``` doesnt end with /, ```"/"``` will be appended to the resolved directory string.
	 * @param {string} dir the directory path to resolve
	 * @returns {string} the resolved relative directory string
	 */
	private resolveRelativeDirString = (dir: string): string => {
		if (!dir.startsWith("/") && !dir.startsWith("./")) {
			dir = "./" + dir
		}

		if (dir.startsWith("./")) {
			dir = this.currentDir + dir.slice(2)
		}
		if (dir.startsWith("../")) {
			dir = this.currentDir.slice(0, this.currentDir.lastIndexOf("/"))
			dir = dir.slice(0, dir.lastIndexOf("/"))
			dir = dir.slice(0, dir.lastIndexOf("/")) + "/"
		}

		var output = ""
		for (var i = 0; i < dir.length; i++) {
			output = output + dir[i]
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

		if (!output.endsWith("/")) {
			output = output + "/"
		}

		return output
	}

	/**
	 * Adds a new user directory as child of the parent directory, which defaults to the home directory.
	 * @param {TerminalFileSystemUser} user the user to create the home directory for
	 * @returns {string} the path to the users home directory
	 */
	private newUserDir = (user: TerminalFileSystemUser): string => {
		if (user.homeDir === undefined) {
			user.homeDir = this.homeDir + user.name + "/"
		} else {
			if (!user.homeDir.endsWith("/")) {
				user.homeDir = user.homeDir + "/"
			}
		}
		return this.newDir(user.homeDir + user.name, user.homeDir)
	}

	/**
	 * Creates a new directory. Resolves the absolute path before creation.
	 * @param {string} dir the directory to create
	 * @param {string} parent the parent of the new directory (default is ```this.rootDir```)
	 * @returns {string} ```dir``` that was created
	 */
	private newDir = (dir: string, parent: string = this.rootDir): string => {
		dir = this.replaceRepetetiveForwardslashes(dir)
		dir = this.resolveRelativeDirString(dir)
		this.graph.setNode(dir, dir)
		if (dir !== this.rootDir) {
			this.graph.setParent(dir, parent)
		}
		return dir
	}
}

export default UnixFileSystemEmulator
export { Ext4 }
