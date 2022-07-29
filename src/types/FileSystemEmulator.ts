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
	 * Emulates the adduser command.  
	 * https://ss64.com/bash/useradd.html
	 * @param user The user to add to the filesystem
	 * @returns {string|RangeError} Range error if the user already exists, else the full path to the users home directory
	 */
	adduser: (user: FileSystemUser) => string | RangeError
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
