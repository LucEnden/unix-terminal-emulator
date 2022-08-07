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
     * The css class to give to the cursor element. There are 2 css classes shipped with this package which animate the cursor:
     * ```"terminal___cursor___static"```: makes it blink instantly
     * ```"terminal___cursor___fluid"```: makes it oscilate gradually
     * @default "terminal___cursor___static"
     */
    cursorCss: string;
}
