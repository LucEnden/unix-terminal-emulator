import { StdoutChildElement, StdoutCursorElement } from "./interfaces";
declare class StdoutEmulator {
    private cursor;
    private stdout;
    constructor(stdout: StdoutChildElement, cursor: StdoutCursorElement);
    Write: (text: string, speed: "neutral" | number, callback: () => void) => void;
    RemoveCursor: () => void;
    AppendCursor: () => void;
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
export default StdoutEmulator;
