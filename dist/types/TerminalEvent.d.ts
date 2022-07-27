import TerminalCommand from "./TerminalCommand";
/**
 * To be internaly used by the terminal emulator. Used during creation and clearing of the event sequence.
 */
export default interface TerminalEvent {
    /**
     * The command associated with this event
     */
    command?: TerminalCommand;
    /**
     * Function to run after the event was finished
     */
    logicAfter?: () => void;
    /**
     * Time in ms to wait afters the event
     */
    delayAfter?: number;
}
