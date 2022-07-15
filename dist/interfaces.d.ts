/**
 * To be internaly used by the terminal emulator for running a sequence of set commands.
 */
export interface TerminalEvent {
    /**
     * The delay before starting to the next event in miliseconds
     */
    delayAfter: number;
    /**
     * The command associated with this event
     */
    command?: TerminalCommand;
}
/**
 * A customizable command.
 * @property {string} text                          	- The full command text to write
 * @property {"neutral"|number|undefined} writeSpeed	- The speed at which to write the command
 * @property {string|undefined} output             		- The output of the command
 * @property {number|undefined} output             		- The time to pause before writing the output in miliseconds
 */
export interface TerminalCommand {
    /**
     * The full command text to write
     *  @type {string}
     */
    text: string;
    /**
     * The pause length between each charater being written in miliseconds.
     * "neutral" = random integer between 80 and 120 miliseconds.
     * 0 = instant
     * @type {"neutral"|number}
     */
    writeSpeed: "neutral" | number;
    /**
     * The output of the command
     *  @type {string|undefined}
     */
    output?: string;
    /**
     * The time to pause before writing the output in miliseconds
     *  @type {number|undefined}
     */
    pauseBeforeOutput?: number;
}
/**
 * Customization options for the terminal.
 */
export interface TerminalOptions {
    /**
     * The HTML id of the element to which the text should be written.
     * Must be unique. If the element does not exist one will be created
     * and appended to the body at the end.
     * @default "terminal___emulator___wrapper"
     */
    wrapperId?: string;
    /**
     * The CSS class to give to the wrapper element.
     * @default "terminal___emulator___wrapper"
     */
    wrapperClassName?: string;
    /**
     * The character(s) to use as the cursor inside the terminal.
     * @default "|"
     */
    cursor?: string;
    /**
     * The HTML id of the element which functions as the terminal cursor.
     * Must be unique. The element will always be created on initialization.
     * @default "terminal___emulator___cursor"
     */
    cursorId?: string;
    /**
     * The CSS class to give to the cursor element.
     *
     * Note: if the animation property is set within the CSS class, it will overwrite the cursor blinking animation.
     * @default "terminal___emulator___cursor"
     */
    cursorClassName?: string;
    /**
     * The type of animation to give to the cursor.
     *
     * Fluid = 		the opacity oscillates between 0 and 100.
     * Static = 	the cursor blinks (like it does in a real unix terminal).
     * Undefined =	no animation is applied.
     * @default "static"
     */
    cursorAnimation?: "fluid" | "static";
    /**
     * When defined, everytime a new input line gets added to the terminal,
     * it will prepend a unix like enviroment text to the start of the new line.
     *
     * @example
     * enviroment: undefined => "$ "
     * enviroment: { hostname: "localhost", username: "root" } => "root@localhost:$ "
     * @default undefined
     */
    enviroment?: {
        /** The hostname to set at the start of every new line */
        hostname: string;
        /** The username to set at the start of every new line */
        username: string;
    };
}
