import CursorElement from "./UnixCursorElement"
import { nanoid } from 'nanoid'
import StdoutEmulator from "../types/StdoutEmulator"
import StdoutEmulatorOptions from "../types/StdoutEmulatorOptions"

// TODO: implement a read() method which returns the stdout elements innerHTML, but in a UTF-8 formatted matter (eg: <br> to \n, etc...)
// TODO: implement a write() method which updates cursor automatically and uses TextWriter in order to standardize stdout writing (currently handled by classes that implement both TextWriter and StdoutEmulator)

/**
 * Emulates stdout by allowing for writing and erasing of text to an HTML element. Also has methods for controlling a cursor like element.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixStdoutEmulator.UnixStdoutEmulator}
 */
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
		stdoutCss: "terminal___emulator___stdout",
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
