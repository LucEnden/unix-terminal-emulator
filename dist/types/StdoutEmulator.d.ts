import StdoutElementOptions from "./StdoutEmulatorOptions";
/**
 * Emulates the behaviour of stdout by allowing text writing to an HTML element
 */
export default interface StdoutEmulator {
    /**
     * @param options options to customize the stdout element
     */
    readonly options: StdoutElementOptions;
    /**
     * Writes text to the stdout element
     * @param text the text to write
     * @param speed the speed at wich to write each character in miliseconds, where ```"neutral"``` makes the speed of each charecter random between 80 and 120 miliseconds
     * @param callback gets called when writing the text is done
     */
    write: (text: string, speed: "neutral" | number, callback: () => void) => void;
    /**
     * Clears the text in the stdout element
     */
    clear: () => void;
    /**
     * Removes the cursor element from the stdout element
     */
    removeCursor: () => void;
    /**
     * Appends the cursor element to the stdout element
     */
    appendCursor: () => void;
}
