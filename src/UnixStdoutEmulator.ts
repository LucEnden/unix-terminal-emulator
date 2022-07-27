import CursorElement from "./UnixCursorElement"
import { decode } from "html-entities"
import { nanoid } from 'nanoid'
import StdoutEmulator from "./types/StdoutEmulator"
import StdoutEmulatorOptions from "./types/StdoutEmulatorOptions"

class UnixStdoutEmulator implements StdoutEmulator {
	readonly options: StdoutEmulatorOptions = {
		stdoutCss: "termminal___emulator___stdout",
		cursorChar: "|",
		cursorCss: "terminal___cursor___static"
	}
	private stdout: HTMLElement
	private cursor: CursorElement

	constructor(parent: HTMLElement, options?: StdoutEmulatorOptions) {
		if (options) {
			this.options = {
				...this.options,
				...options,
			}
		}

		this.stdout = document.createElement("span")
		this.stdout.id = nanoid()
		if (this.options.stdoutCss.length > 0) this.stdout.classList.add(this.options.stdoutCss)
		parent.appendChild(this.stdout)
		this.cursor = new CursorElement(this.options)
	}

	public write = (text: string, speed: "neutral" | number = "neutral", callback: () => void) => {
		// text = text.replace(/&#10;/)
		text = decode(text)
		this.writeToStdout(text, speed, callback)
	}
	public clear = () => {
		this.removeCursor()
		this.stdout.innerHTML = ""
		this.appendCursor()
	}

	public removeCursor = () => {
		this.cursor.remove()
	}

	public appendCursor = () => {
		this.cursor.append(this.stdout)
	}

	/**
	 * Gets a random integer in the range from min to max, inclusif
	 * @param {Number} min Minimum number to generate
	 * @param {Number} max Maximum number to generate
	 * @returns random integer in the range from min to max, inclusif
	 */
	private getRandomIntegerInRange = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	/**
	 * Writes the specified text to the terminal wrapper.
	 * @param text text to write to stdout
	 * @param speed speed at which each character is written to stdout
	 * @param callback gets excecuted when writing to stdout has finished
	 * @param i used for recursion purposes
	 */
	private writeToStdout = (text: string, speed: "neutral" | number, callback: () => void, i: number = 0) => {
		if (speed === 0) {
			this.removeCursor()
			this.stdout.innerHTML += text
			callback()
		} else {
			if (i < text.length) {
				this.removeCursor()
				this.stdout.innerHTML += text[i]
				this.appendCursor()
				i++
				if (speed === "neutral") {
					setTimeout(() => this.writeToStdout(text, speed, callback, i), this.getRandomIntegerInRange(80, 120))
				} else {
					setTimeout(() => this.writeToStdout(text, speed, callback, i), speed)
				}
			} else {
				this.removeCursor()
				callback()
			}
		}
	}
}

export default UnixStdoutEmulator
