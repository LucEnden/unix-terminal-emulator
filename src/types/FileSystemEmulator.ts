import FileSystemType from "./FileSystemType"
import FileSystemUser from "./FileSystemUser"

/**
 * Emulates file systems behaviour
 */
export default interface FileSystemEmulator {
	/**
	 * @param rootDir the root directory "/"
	 * @constant
	 */
	readonly rootDir: "/"
	/**
	 * @param homeDir the home directory "/home/"
	 * @constant
	 */
	readonly homeDir: "/home/"
	/**
	 * @param rootUsr the root user, which is the default user of the file system
	 * @default
	 * {
	 *		name: "root",
	 *		password: "password",
	 *		homeDir: "/home/root/"
	 * }
	 */
	readonly rootUsr: FileSystemUser
	/**
	 * @param users the users within this file system instance
	 */
	readonly users: FileSystemUser[]
	/**
	 * @param fileSystemType the type of file system this file system emulator uses
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
	 * @param file the file to touch
	 */
	touch: (file: string) => void
	/**
	 * Emulates the mkdir command.
	 * @param dirNames a space delimited string of directories to create
	 * @returns {Error[]} an array of errors that occured during the creation of the directories
	 */
	mkdir: (dirNames: string) => Error[]
	/**
	 * Emulates the adduser command.
	 * @param user the user to add to the filesystem
	 * @returns {string|RangeError} range error if the user already exists, else the full path to the users home directory
	 */
	adduser: (user: FileSystemUser) => string | RangeError
	/**
	 * Emulates the pwd command.
	 * @returns the full absolute path to the current working directory
	 */
	pwd: () => string
	/**
	 * Emulates the cd command.
	 * @returns {string|RangeError} if the directory exists, returns the new working directory, RangeError otherwise
	 */
	cd: (dir: string) => string | RangeError
}
