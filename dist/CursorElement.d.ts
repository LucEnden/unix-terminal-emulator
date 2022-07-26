import "./styles.css";
declare class CursorElement {
    char: string;
    id: string;
    css: string;
    element?: HTMLElement | undefined;
    constructor(char: string, id: string, css?: string);
    /**
     * Removes the cursor from the wrapper document
     */
    Remove: () => void;
    /**
     * Appends the cursor element to the wrapper element
     */
    Append: (parent: HTMLElement) => void;
}
export default CursorElement;
