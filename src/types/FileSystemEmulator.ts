import FileSystemGroup from "./FileSystemGroup"
import FileSystemType from "./FileSystemType"
import FileSystemUser from "./FileSystemUser"

/**
 * Emulates file systems behaviour
 */
export default interface FileSystemEmulator {
	/**
	 * @param rootDir The root directory "/"
	 * @constant
	 */
	readonly rootDir: "/"
	/**
	 * @param homeDir The home directory "/home/"
	 * @constant
	 */
	readonly homeDir: "/home/"
	/**
	 * @param rootUsr The root user, which is the default user of the file system
	 * @default
	 * {
	 *		name: "root",
	 *		password: "password",
	 *		homeDir: "/home/root/"
	 * }
	 */
	readonly rootUsr: FileSystemUser
	/**
	 * @param users The users within this file system instance
	 */
	readonly users: FileSystemUser[]
	/**
	 * @param groups The groups within this file system instance
	 */
	readonly groups: FileSystemGroup[]
	/**
	 * @param fileSystemType The type of file system to use
	 */
	readonly fileSystemType: FileSystemType
	/**
	 * Gets the current directory, with respect to the users home directory (eg: "~")
	 * @returns The absolute path to the current directory. If the current directory
	 * is inside the current users home folder, the start of the directory is
	 * replaced with "~".
	 */
	getCurrentDirectory: () => string
	/**
	 * Checks if the path string exists as a node in the filesystem graph
	 * @param {string} path The path to check if it exsits
	 * @returns {boolean} ```true``` if the path string exists as a node in the filesystem graph, ```false``` otherwise
	 */
	pathExists: (path: string) => boolean
	/**
	 * Checks if the given path is a directory (eg: ends with /)
	 * @param {string} path The path to check
	 * @returns {boolean} True if path ends with /, false otherwise
	 */
	isDirectory: (path: string) => boolean
	/**
	 * Checks if a given file has content
	 * @param {string} file The file to check if it has content
	 * @returns {boolean|TypeError} TypeError if the given file doesnt exist or if ```file``` is a directory, otherwise a boolean value indicating if the file is emtpy.
	 */
	fileHasContent: (file: string) => boolean | TypeError
	/**
	 * Gets a given files content
	 * @param {string} file The file to get the contents of
	 * @returns {string|TypeError} TypeError if the given file doesnt exist, otherwise a string containing the files content.
	 */
	getFileContent: (file: string) => string | TypeError
	/**
	 * Writes the specified content to the given file. Creates the file if it doesnt exist.
	 * @param {string} file The file to write the content to.
	 * @param {string} content The content to write to the file.
	 * @returns {void|TypeError} TypeError if the given file was actualy a directory, void if writing the content was succesfull.
	 */
	 setFileContent: (file: string, content: string) => void | TypeError
	/**
	 * Emulates the touch command.
	 * https://ss64.com/bash/touch.html
	 * @param file the file to touch
	 */
	touch: (file: string) => void
	/**
	 * Emulates the mkdir command.
	 * https://ss64.com/bash/mkdir.html
	 * @param dirNames A space delimited string of directories to create
	 * @returns {Error[]} An array of errors that occured during the creation of the directories
	 */
	mkdir: (dirNames: string) => Error[]
	/**
	 * Emulates the useradd command.
	 * https://ss64.com/bash/useradd.html
	 * @param user The user to add to the filesystem
	 * @returns {string|RangeError} Range error if the user already exists, else the full path to the users home directory
	 */
	useradd: (user: FileSystemUser) => string | RangeError
	/**
	 * Emulates the pwd command.
	 * https://ss64.com/bash/pwd.html
	 * @returns The full absolute path to the current working directory
	 */
	pwd: () => string
	/**
	 * Emulates the cd command.
	 * https://ss64.com/bash/cd.html
	 * @returns {string|RangeError} If the directory exists, returns the new working directory, RangeError otherwise
	 */
	cd: (dir: string) => string | RangeError
}
