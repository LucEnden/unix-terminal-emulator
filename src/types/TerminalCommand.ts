/**
 * A customizable command.
 */
export default interface TerminalCommand {
	/**
	 * The full command text to write
	 */
	text: string
	/**
	 * The pause length between each charater being written in miliseconds.
	 * "neutral" = random integer between 80 and 120 miliseconds.
	 * 0 = instant
	 */
	writeSpeed: "neutral" | number
	/**
	 * The output of the command
	 */
	output?: string | (() => string)
	/**
	 * The time to pause before writing the output in miliseconds
	 */
	pauseBeforeOutput?: number
}
