import { nanoid } from 'nanoid'
import "../styles.css"
import CursorElement from "../types/CursorElement"
import CursorElementOptions from "../types/CursorElementOptions"

/**
 * Emulates a stdout cursor (eg: a blinking character, which defaults to |).
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixCursorElement.UnixCursorElement}
 */
class UnixCursorElement implements CursorElement {
	private element: HTMLElement

    constructor(options?: CursorElementOptions) {
		if (options) {
			this.options = {
				...this.options,
				...options,
			}
		}

		this.element = document.createElement("span")
		this.element.id = nanoid()
		this.element.innerHTML = this.options.cursorChar
		if (this.options.cursorCss.length > 0) {
			this.element.classList.add(this.options.cursorCss)
		}
    }
	
	readonly options: CursorElementOptions = {
		cursorChar: "|",
		cursorCss: "terminal___emulator___static"
	}

	/**
	 * Removes the cursor from the wrapper document
	 */
	public remove = () => {
		this.element.remove()
	}

	/**
	 * Appends the cursor element to the wrapper element
	 */
	public append = (parent: HTMLElement) => {
		parent.appendChild(this.element)
	}
}

export default UnixCursorElement