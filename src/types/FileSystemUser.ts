/**
 * A user to be used within the filesystem of the terminal instance.
 */
export default interface FileSystemUser {
	/**
	 * The name of the user
	 */
	name: string
	/**
	 * The password of the user
	 */
	password: string
	/**
	 * The home directory of the user.
	 */
	homeDir: string | undefined
}
