/**
 * A customizable command.
 * @property {string} text              - The full command text to write
 * @property {string|undefined} output  - The output of the command
 */
 export interface Command {
    /**
     * The full command text to write
     *  @type {string}
     */
    text: string;
    /**
     * The output of the command
     *  @type {string|undefined}
     */
    output?: string;
}

/**
 * Customization options for the terminal.
 * @property {object|undefined} wrapperElement  - The root element the terminal writes its text to. 
 * @property {object|undefined} enviroment      - The enviroment where the terminal runs in.
 * @property {boolean|undefined} exitOnFinish   - Whether to exit the terminal when all commands have been run or not
 */
 export interface TerminalOptions {
    /**
     * The root element of the terminal. Beware when setting this options, the terminal manipulates child nodes of this element
     * @property {Element|undefined} element    - The root element of the terminal.
     * @property {string} id                    - The HTML ID to give to the element. Must be unique.
     * @property {string|undefined} cssClass    - The CSS class to give to the element.
     */
    wrapperElement?: {
        /**
         * The root element of the terminal.
         * @default document.createElement("div");
         */
        element: Element
        /**
         * The HTML ID to give to the element. Must be unique.
         */
        id: string
        /**
         * The CSS class to give to the element.
         */
        cssClass?: string
    }
    /**
     * When this option is set, everytime a new emtpy line is written to the root element, 
     * it will put the enviroment at the start of the line.  
     * 
     * Examples:
     * - undefined => /$ 
     * - { hostname: "website", user: "root" } => root@website:~$ 
     * 
     * @property {string} hostname the hostname to write at the start of every new line  
     * @property {string} username the username to write at the start of every new line
     * @default undefined
     */
    enviroment?: {
        /**
         * The hostname to write to the start of a new line
         */
        /**
         * The username to write to the start of a new line
         */
        hostname: string
        username: string
    };
    /**
     * Whether to exit the terminal when all commands have been run or not.
     * @default false
     */
    exitOnFinish?: boolean;
}

// /**
//  * Emulates terminal like behaviour in the DOM.
//  */
// export interface Terminal {
//     /**
//      * The root element this instance uses to manipulate
//      */
//     wrapperElement: Element
//     AddCommand: (command: Command) => Terminal
//     AddCommands: (commands: Command[]) => Terminal
//     /**
//      * Emulates the echo command
//      * @param text the text to echo
//      */
//     Echo: (text: string) => Terminal
//     /**
//      * Emulates the touch command
//      * @param fileName the name of the file to create
//      */
//     Touch: (fileName: string) => Terminal
//     /**
//      * Emulates the mkdir command
//      * @param the name of the directory to create
//      */
//     Mkdir: (dirName: string) => Terminal
//     /**
//      * Emulates the history command
//      */
//     History: () => Terminal
//     /**
//      * Emulates the clear command
//      */
//     Clear: () => Terminal
//     /**
//      * Emulates vim
//      */
//     Vim: (fileName: string, fileContentToType: string[]) => Terminal
//     /**
//      * Runs the commands added to the sequeance in order
//      */
//     Run: () => void
// }