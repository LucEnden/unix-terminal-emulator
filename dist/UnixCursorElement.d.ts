import "./styles.css";
import CursorElement from "./types/CursorElement";
import CursorElementOptions from "./types/CursorElementOptions";
declare class UnixCursorElement implements CursorElement {
    readonly options: CursorElementOptions;
    private element;
    constructor(options?: CursorElementOptions);
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
