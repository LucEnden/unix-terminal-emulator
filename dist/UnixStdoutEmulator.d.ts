import StdoutEmulator from "./types/StdoutEmulator";
import StdoutEmulatorOptions from "./types/StdoutEmulatorOptions";
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
