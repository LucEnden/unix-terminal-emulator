import FileSystemUser from "./FileSystemUser"

/**
 * Customization options for the enviroment to be used within the terminal emulator
 */
export default interface EnviromentOptions {
	/**
	 * @param hostname the hostname for this terminal emulator
	 */
	hostname: string
	/**
	 * @param user the user for this terminal emulator. When specified, this user will be added to the filesystem using default options.
	 */
	user: FileSystemUser
	/**
	 * Returns the enviroment line to be use at the start of a new empty terminal input line
	 * @returns a formated string: ```username@hostname:```
	 */
	print: () => string
}
