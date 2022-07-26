import { TerminalFileSystemType, TerminalFileSystemUser } from "./interfaces";
declare const Ext4: TerminalFileSystemType;
declare class UnixFileSystemEmulator {
    /**
     * A compound, directed graph instance representing the filesystem tree.
     */
    private graph;
    /**
     * The root directory of the file system
     */
    private readonly rootDir;
    /**
     * The home directory
     */
    private readonly homeDir;
    /**
     * The root user
     */
    private readonly rootUsr;
    /**
     * An array to keep track of existing users
     */
    private readonly users;
    private currentUser;
    /**
     * The current working directory
     */
    private currentDir;
    /**
     * The file system type
     */
    private fileSystemType;
    constructor(user?: TerminalFileSystemUser | undefined);
    /**
     * @returns {string} The absolute path to the current directory.
     * If the current directory is inside the current users home folder, the start of the directory is replaced with "~".
     */
    GetCurrentDirectory: () => string;
    /**
     * Emulates the touch command.
     * @param file file to update timestamps for
     */
    touch: (file: string) => void;
    /**
     * Emulates the mkdir command.
     * @param {string} dirNames a space delimited string containing the directories to create
     * @returns {Error[]} An array of errors that occured during the creation of the directories
     */
    mkdir: (dirNames: string) => Error[];
    /**
     * Adds a new user to the filesystem if it doesnt already exist
     * @param {TerminalFileSystemUser} user the user to add to the file system
     * @returns {string|RangeError} range error if the user already exists, else the full path to the user directory
     */
    adduser: (user: TerminalFileSystemUser) => string | RangeError;
    /**
     * Emulates the pwd command.
     * @returns The full absolute path to the current working directory
     */
    pwd: () => string;
    /**
     * Emulates the cd command.
     * @param dir The directory to switch to
     * @returns {string|RangeError} If the directory exists, returns the new working directory, RangeError otherwise
     */
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
     * @param {TerminalFileSystemUser} user the user to create the home directory for
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
