import TerminalEmulator from "../types/TerminalEmulator";
import TerminalEmulatorOptions from "../types/TerminalEmulatorOptions";
/**
 * The properties for this UnixTerminalEmulator component.
 */
export default interface Props {
    /**
     * @param options The options to pass down to the terminal instance used by this component
     */
    options?: TerminalEmulatorOptions;
    /**
     * @param onInit When specified, it uses the passed instance of TerminalEmulator and runs its event sequence.
     */
    onInit?: (instance: TerminalEmulator) => void;
}
