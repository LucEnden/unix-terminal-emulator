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
 * The enviroment variables to set at the start of the line.  
 * 
 * Examples:
 * - { hostname: "website", user: "root" } => root@website
 * 
 * @property {string} hostname the hostname to set at the start of every new line
 * @property {string} username the username to set at the start of every new line
 */
export interface TerminalEnviroment {
    /** The hostname to set at the start of every new line */
    hostname: string
    /** The username to set at the start of every new line */
    username: string
}

/**
 * A HTML wrapper element
 * @property {string} id                    - The HTML ID to give to the element. Must be unique.
 * @property {string|undefined} cssClass    - The CSS class to give to the element.
 */
export interface WrapperElement {
    /** The HTML ID to give to the element. Must be unique. */
    id: string
    /** The CSS class to give to the element. */
    cssClass?: string
}

/**
 * Customization options for the terminal.
 * @property {object|undefined} wrapperElement  - The root element the terminal writes its text to. 
 * @property {object|undefined} enviroment      - The enviroment where the terminal runs in.
 */
export interface TerminalOptions {
    /** @default undefined */
    wrapperElement?: WrapperElement
    /** @default undefined */
    enviroment?: TerminalEnviroment;
}