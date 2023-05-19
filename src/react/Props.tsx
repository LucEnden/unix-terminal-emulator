import TerminalEmulator from "../types/TerminalEmulator"
import TerminalEmulatorOptions from "../types/TerminalEmulatorOptions"

/**
 * The properties for this UnixTerminalEmulator component.
 */
export default interface Props {
	/**
	 * @param instance The pre initialized instanced to be used by this component
	 */
	instance: TerminalEmulator
	// /**
	//  * @param options The options used by the instance
	//  */
	// options: TerminalEmulatorOptions
	/**
	 * @param run When specified, it runs the instance's event sequence.
	 */
	run: (callback: void) => void
	// /**
	//  * @param callback Callback to pass to the run method
	//  */
	// callback: () => void
}