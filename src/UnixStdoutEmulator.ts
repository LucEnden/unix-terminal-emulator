import CursorElement from "./UnixCursorElement"
import { nanoid } from 'nanoid'
import StdoutEmulator from "./types/StdoutEmulator"
import StdoutEmulatorOptions from "./types/StdoutEmulatorOptions"

class UnixStdoutEmulator implements StdoutEmulator {
	private cursor: CursorElement

	constructor(parent: HTMLElement, options?: StdoutEmulatorOptions) {
		if (options) {
			this.options = {
				...this.options,
				...options,
			}
		}

		this.element = document.createElement("span")
		this.element.id = nanoid()
		if (this.options.stdoutCss.length > 0) this.element.classList.add(this.options.stdoutCss)
		parent.appendChild(this.element)
		this.cursor = new CursorElement(this.options)
	}

	readonly options: StdoutEmulatorOptions = {
		stdoutCss: "termminal___emulator___stdout",
		cursorChar: "|",
		cursorCss: "terminal___cursor___static"
	}
	
	readonly element: HTMLElement
	
	public clear = () => {
		this.removeCursor()
		this.element.innerHTML = ""
		this.appendCursor()
	}

	public removeCursor = () => {
		this.cursor.remove()
	}

	public appendCursor = () => {
		this.cursor.append(this.element)
	}
}

export default UnixStdoutEmulator
