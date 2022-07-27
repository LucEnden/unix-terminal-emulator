/**
 * The file system type to use in a terminal instance
 */
 export default interface FileSystemType {
	/**
	 * The name of the file system.
	 */
	name: string
	/**
	 * Prohibited file name charecters for this file system
	 */
	prohibitedFileNameCharecters: string[]
}