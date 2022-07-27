/**
 * Options for customizing the cursor element
 */
export default interface CursorElementOptions {
    /**
     * The charecter(s) to use as the cursor
     * @default "|"
     */
    cursorChar: string;
    /**
     * The css class to give to the cursor element
     * @default "terminal___cursor___static"
     */
    cursorCss: string;
}
