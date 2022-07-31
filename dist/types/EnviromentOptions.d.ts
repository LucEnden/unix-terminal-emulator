import FileSystemUser from "./FileSystemUser";
/**
 * Customization options for the enviroment to be used within the terminal emulator
 */
export default interface EnviromentOptions {
    /**
     * @param hostname The hostname for this terminal emulator
     */
    hostname: string;
    /**
     * @param user The user for this terminal emulator. When specified, this user will be added to the filesystem
     */
    user: FileSystemUser;
    /**
     * Returns the enviroment line to be use at the start of a new empty terminal input line
     * @returns A formated string: ```username@hostname:```
     */
    print: () => string;
}
