import StdoutEmulator from "./types/StdoutEmulator";
import StdoutEmulatorOptions from "./types/StdoutEmulatorOptions";
declare class UnixStdoutEmulator implements StdoutEmulator {
    readonly options: StdoutEmulatorOptions;
    private stdout;
    private cursor;
    constructor(parent: HTMLElement, options?: StdoutEmulatorOptions);
    write: (text: string, speed: number | "neutral" | undefined, callback: () => void) => void;
    clear: () => void;
    removeCursor: () => void;
    appendCursor: () => void;
    /**
     * Gets a random integer in the range from min to max, inclusif
     * @param {Number} min Minimum number to generate
     * @param {Number} max Maximum number to generate
     * @returns random integer in the range from min to max, inclusif
     */
    private getRandomIntegerInRange;
    /**
     * Writes the specified text to the terminal wrapper.
     * @param text text to write to stdout
     * @param speed speed at which each character is written to stdout
     * @param callback gets excecuted when writing to stdout has finished
     * @param i used for recursion purposes
     */
    private writeToStdout;
}
export default UnixStdoutEmulator;
