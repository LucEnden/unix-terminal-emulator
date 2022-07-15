/**
 * To be internaly used by the terminal emulator for running a sequence of set commands.
 */
export interface TerminalEvent {
	/**
	 * The delay before starting to the next event in miliseconds
	 */
	delayAfter: number
	/**
	 * The command associated with this event
	 */
	command?: TerminalCommand
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
	text: string
	/**
	 * The pause length between each charater being written in miliseconds.
	 * "neutral" = random integer between 80 and 120 miliseconds.
	 * 0 = instant
	 * @type {"neutral"|number}
	 */
	writeSpeed: "neutral" | number
	/**
	 * The output of the command
	 *  @type {string|undefined}
	 */
	output?: string
	/**
	 * The time to pause before writing the output in miliseconds
	 *  @type {number|undefined}
	 */
	pauseBeforeOutput?: number
}

/**
 * Customization options for the terminal.
 */
export interface TerminalOptions {
	/** @default "terminal___emulator___wrapper" */
	wrapperId?: string
	/** @default "terminal___emulator___wrapper" */
	wrapperClassName?: string
	/** @default "|" */
	cursor?: string
	/** @default "terminal___emulator___cursor" */
	cursorId?: string
	/** @default "terminal___emulator___cursor" */
	cursorClassName?: string
	/** @default "fluid" */
	cursorAnimation?: "fluid" | "static"
	/** @default undefined */
	enviroment?: {
		/** The hostname to set at the start of every new line */
		hostname: string
		/** The username to set at the start of every new line */
		username: string
	}
}
