import StdoutElementOptions from "./StdoutEmulatorOptions";
/**
 * Emulates the behaviour of stdout by writing text to an HTML element
 */
export default interface StdoutEmulator {
    /**
     * @param options Options to customize the stdout element
     */
    readonly options: StdoutElementOptions;
    /**
     * @param element The stdout HTML element
     */
    readonly element: HTMLElement;
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
