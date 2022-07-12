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
	command?: Command;
}

/**
 * A customizable command.
 * @property {string} text                          - The full command text to write
 * @property {string|undefined} output              - The output of the command
 * @property {string|number|undefined} writeSpeed   - The speed at which to write the command
 */
export interface Command {
	/**
	 * The full command text to write
	 *  @type {string}
	 */
	text: string;
	/**
	 * The pause length between each charater being written in miliseconds.
	 * "neutral" = random integer between 80 and 120 miliseconds.
	 * 0 = instant
	 * @type {string|number}
	 */
	writeSpeed: "neutral" | number;
	/**
	 * The output of the command
	 *  @type {string|undefined}
	 */
	output?: string;
	/**
	 * The time to pause before writing the output in miliseconds
	 */
	pauseBeforeOutput?: number;
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
	hostname: string;
	/** The username to set at the start of every new line */
	username: string;
}

/**
 * A HTML wrapper element
 * @property {string} id                    - The HTML ID to give to the element. Must be unique.
 * @property {string|undefined} cssClass    - The CSS class to give to the element.
 */
export interface TerminalWrapperOptions {
	/**
	 * The HTML ID to give to the element. Must be unique.
	 * @default "terminal___emulator___wrapper"
	 */
	id: string;
	/**
	 * The CSS class to give to the element.
	 * @default "terminal___emulator___wrapper"
	 */
	cssClass: string;
}

export interface TerminalCursorOptions {
	id: string;
	char: string;
	animate: "fluid" | "static" | "none";
}

/**
 * Customization options for the terminal.
 * @property {TerminalWrapperOptions|undefined} wrapperElement  - The root element the terminal writes its text to.
 * @property {TerminalCursorOptions|undefined} wrapperElement   - The cursor element shown within the terminal.
 * @property {TerminalEnviroment|undefined} enviroment          - The enviroment where the terminal runs in.
 */
export interface TerminalOptions {
	/** @default undefined */
	wrapper?: TerminalWrapperOptions;
	/** @default undefined */
	cursor?: TerminalCursorOptions;
	/** @default undefined */
	enviroment?: TerminalEnviroment;
}
