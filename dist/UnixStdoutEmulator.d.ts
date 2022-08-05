import StdoutEmulator from "./types/StdoutEmulator";
import StdoutEmulatorOptions from "./types/StdoutEmulatorOptions";
/**
 * Emulates stdout by allowing for writing and erasing of text to an HTML element. Also has methods for controlling a cursor like element.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/UnixStdoutEmulator.UnixStdoutEmulator}
 */
declare class UnixStdoutEmulator implements StdoutEmulator {
    private cursor;
    constructor(parent: HTMLElement, options?: StdoutEmulatorOptions);
    readonly options: StdoutEmulatorOptions;
    readonly element: HTMLElement;
    clear: () => void;
    removeCursor: () => void;
    appendCursor: () => void;
}
export default UnixStdoutEmulator;
