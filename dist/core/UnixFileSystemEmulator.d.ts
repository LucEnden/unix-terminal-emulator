import FileSystemEmulator from "../types/FileSystemEmulator";
import FileSystemGroup from "../types/FileSystemGroup";
import FileSystemType from "../types/FileSystemType";
import FileSystemUser from "../types/FileSystemUser";
declare const Ext4: FileSystemType;
/**
 * Emulates a Unix filesystem via methods for managing files and folders, as wel as managing users for permision perposes.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/UnixFileSystemEmulator.UnixFileSystemEmulator}
 */
declare class UnixFileSystemEmulator implements FileSystemEmulator {
    private graph;
    private currentUser;
    private currentGroup;
    private currentDir;
    constructor(user?: FileSystemUser | undefined);
    readonly rootDir = "/";
    readonly homeDir = "/home/";
    readonly rootUsr: FileSystemUser;
    readonly users: FileSystemUser[];
    readonly groups: FileSystemGroup[];
    readonly fileSystemType: FileSystemType;
    isDirectory: (path: string) => boolean;
    pathExists: (path: string) => boolean;
    getCurrentDirectory: () => string;
    fileHasContent: (file: string) => boolean | TypeError;
    getFileContent: (file: string) => string | TypeError;
    setFileContent: (file: string, content: string) => void | TypeError;
    touch: (file: string) => void;
    mkdir: (dirNames: string) => Error[];
    useradd: (user: FileSystemUser) => string | RangeError;
    pwd: () => string;
    cd: (dir: string) => string | RangeError;
    /**
     * Replaces any instance of repetetive forward slashes with a single forward slash:
     * ////a///b////// => /a/b/
     * @param {string} dir the directory string to validate
     * @returns {string} the directory string containing no repetetive forward slashes
     */
    private replaceRepetetiveForwardslashes;
    /**
     * Resolves path strings with relative paths and returns the absolute path.
     * If ```path``` starts with ./, it will be replaced with ```this.currentDir```.
     * If ```path``` does not starts with ./ or /, ```this.currentDir``` will be prepended to it.
     * @param {string} path the directory path to resolve
     * @returns {string} the resolved relative directory string
     */
    private resolveRelativePathString;
    /**
     * Resolves the parent directory of ```path```
     * @param {string} path the path to get the parent directory of
     * @returns {string} parent directory of ```path```
     */
    private resolveParentDir;
    /**
     * Adds a new user directory as child of the parent directory, which defaults to the home directory.
     * @param {FileSystemUser} user the user to create the home directory for
     * @returns {string} the path to the users home directory
     */
    private newUserDir;
    private newGroup;
    /**
     * If path does not end with ```"/"```, appends ```"/"``` to path and returns it
     * @param {string} path path to append ```"/"``` to
     * @returns {string} path with ```"/"``` at the end
     */
    private appendSlashToEndOfPath;
    /**
     * If path does not start with ```"/"```, prepend ```"/"``` to path and returns it
     * @param {string} path path to prepend ```"/"``` to
     * @returns {string} path with ```"/"``` at the start
     */
    private prependSlashToStartOfPath;
    /**
     * Creates a new directory. Resolves the absolute path before creation.
     * @param {string} dir the directory to create
     * @param {string} parent the parent of the new directory (default is ```this.currentDir```)
     * @returns {string} ```dir``` that was created
     */
    private newDir;
    /**
     * Creates a new file. Resolves the absolute path before creation.
     * @param {string} file the file to create
     * @param {string} parent the parent of the new file (default is ```this.currentDir```)
     * @returns {string} ```file``` that was created
     */
    private newFile;
    /**
     * Sets the modified date for the current path node and all its parrents
     * @param {string} path 	The path to set the modified date for, will always be the current date in a UTC format
     * @param {string} parent 	The parent of the current path
     */
    private setModified;
    /**
     * Sets ```this.currentUser``` as the owner of the given path
     * @param path The path to set the owner of
     */
    private setOwner;
    /**
     * Sets ```this.currentGroup``` as the group for the given path
     * @param path The path to set the group of
     */
    private setGroup;
    /**
     * Sets the permissions for the given path
     * @param path Path to set the permissions for
     * @param owner The numeric represantation of the permisions for the owner this path belongs to
     * @param group The numeric represantation of the permisions for the group this path belongs to
     * @param other The numeric represantation of the permisions for the world
     */
    private setPermisions;
}
export default UnixFileSystemEmulator;
export { Ext4 };
