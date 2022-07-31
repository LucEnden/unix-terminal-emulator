import TerminalCommand from "./TerminalCommand"

/**
 * To be internaly used by the terminal emulator. Used during creation and clearing of the event sequence.
 */
export default interface TerminalEvent {
	fn: (callback: () => void) => void
	fnAfter: (callback: () => void) => void
	/**
	 * Time in ms to wait afters the event
	 */
	delayAfter: number
}
