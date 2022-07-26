import "./styles.css"

class CursorElement {
    char: string
    id: string
    css: string
    element?: HTMLElement | undefined

    constructor(char: string, id: string, css?: string) {
        this.char = char
        this.id = id
        this.css = css === undefined ? "" : css

		this.element = document.createElement("span")
		this.element.id = id
		this.element.innerText = char
		if (this.css.length > 0) this.element.classList.add(this.css)
    }

	/**
	 * Removes the cursor from the wrapper document
	 */
	public Remove = () => {
		this.element!.remove()
	}

	/**
	 * Appends the cursor element to the wrapper element
	 */
	public Append = (parent: HTMLElement) => {
		parent.appendChild(this.element!)
	}
}

export default CursorElement