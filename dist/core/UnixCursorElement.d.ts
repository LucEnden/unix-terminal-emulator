import "../styles.css";
import CursorElement from "../types/CursorElement";
import CursorElementOptions from "../types/CursorElementOptions";
/**
 * Emulates a stdout cursor (eg: a blinking character, which defaults to |).
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/UnixCursorElement.UnixCursorElement}
 */
declare class UnixCursorElement implements CursorElement {
    private element;
    constructor(options?: CursorElementOptions);
    readonly options: CursorElementOptions;
    /**
     * Removes the cursor from the wrapper document
     */
    remove: () => void;
    /**
     * Appends the cursor element to the wrapper element
     */
    append: (parent: HTMLElement) => void;
}
export default UnixCursorElement;
