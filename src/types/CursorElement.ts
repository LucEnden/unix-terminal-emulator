import CursorElementOptions from "./CursorElementOptions"

/**
 * Emulates a cursor (like a blinking straight line) inside the browser
 */
export default interface CursorElement {
	/**
	 * @property Default options for this cursor element instance
	 */
	readonly options: CursorElementOptions
	/**
	 * Removes the cursor from the document
	 */
    remove: () => void
	/**
	 * Appends the cursor element to ```parent```
	 * @param parent The parent to append the cursor element to
	 */
    append: (parent: HTMLElement) => void
}