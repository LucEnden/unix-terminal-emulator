import CursorElement from "./CursorElement"
import { StdoutChildElement, StdoutCursorElement } from "./interfaces"
import { encode, decode } from "html-entities"

class StdoutEmulator {
	private cursor: CursorElement
	private stdout: StdoutChildElement

	constructor(stdout: StdoutChildElement, cursor: StdoutCursorElement) {
		this.stdout = stdout

		if (this.stdout.element === undefined) {
			this.stdout.element = document.createElement("span")
			document.body.appendChild(this.stdout.element)
		}
		this.stdout.element.id = this.stdout.id
		if (this.stdout.css !== undefined) this.stdout.element.classList.add(this.stdout.css)

		this.cursor = new CursorElement(cursor.char, cursor.id, cursor.css)
	}

	public Write = (text: string, speed: "neutral" | number = "neutral", callback: () => void) => {
		text = decode(text)
		this.writeToStdout(text, speed, callback)
	}

	public RemoveCursor = () => {
		this.cursor.Remove()
	}

	public AppendCursor = () => {
		this.cursor.Append(this.stdout.element!)
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
			this.RemoveCursor()
			this.stdout.element!.innerHTML += text
			callback()
		} else {
			if (i < text.length) {
				this.RemoveCursor()
				this.stdout.element!.innerHTML += text[i]
				this.AppendCursor()
				i++
				if (speed === "neutral") {
					setTimeout(() => this.writeToStdout(text, speed, callback, i), this.getRandomIntegerInRange(80, 120))
				} else {
					setTimeout(() => this.writeToStdout(text, speed, callback, i), speed)
				}
			} else {
				this.RemoveCursor()
				callback()
			}
		}
	}
}

export default StdoutEmulator
