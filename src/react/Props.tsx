import TerminalEmulator from "../types/TerminalEmulator"

/**
 * The properties for this UnixTerminalEmulator component.
 */
export default interface Props {
	/**
	 * @param instance The pre initialized instanced to be used by this component
	 */
	instance: TerminalEmulator
	/**
	 * @param run When specified, it runs the instance's event sequence.
	 */
	run: (callback: void) => void
}