import FileSystemEmulator from "./types/FileSystemEmulator";
import FileSystemType from "./types/FileSystemType";
import FileSystemUser from "./types/FileSystemUser";
declare const Ext4: FileSystemType;
declare class UnixFileSystemEmulator implements FileSystemEmulator {
    private graph;
    readonly rootDir = "/";
    readonly homeDir = "/home/";
    readonly rootUsr: FileSystemUser;
    readonly users: FileSystemUser[];
    readonly fileSystemType: FileSystemType;
    private currentUser;
    private currentDir;
    constructor(user?: FileSystemUser | undefined);
    getCurrentDirectory: () => string;
    touch: (file: string) => void;
    mkdir: (dirNames: string) => Error[];
    adduser: (user: FileSystemUser) => string | RangeError;
    pwd: () => string;
    cd: (dir: string) => string | RangeError;
    /**
     * Checks if the path string exists as a node in the filesystem graph
     * @param {string} path The path to check if it exsits
     * @returns {boolean} ```true``` if the path string exists as a node in the filesystem graph, ```false``` otherwise
     */
    private pathExists;
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
     * @param {string} parent the parent of the new directory (default is ```this.rootDir```)
     * @returns {string} ```dir``` that was created
     */
    private newDir;
    private newFile;
}
export default UnixFileSystemEmulator;
export { Ext4 };
