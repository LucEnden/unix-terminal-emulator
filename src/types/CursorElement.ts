import CursorElementOptions from "./CursorElementOptions"

export default interface CursorElement {
	/**
	 * @param options Default options for this cursor element instance
	 */
	readonly options: CursorElementOptions
	/**
	 * Removes the cursor from the wrapper document
	 */
    remove: () => void
	/**
	 * Appends the cursor element to the wrapper element
	 */
    append: (parent: HTMLElement) => void
}