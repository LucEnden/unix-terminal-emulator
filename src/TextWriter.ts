import { decode } from "html-entities"

class TextWriter {
	/**
	 * Erases N characters from the end of an HTML element.
	 * @param e the element to erase the characters from
	 * @param n the amount of charecters to erase
	 * @param s the speed at which to erase the charecters
	 * @param beforeChar if not undefined, gets called before erasing any character
	 * @param afterChar if not undefined, gets called after erasing any character
	 * @param callback if not undefined, gets called when done erasing
	 * @param i for recursive perposes, should not be set manualy
	 * @returns 
	 */
	public eraseFromElement = (e: HTMLElement, n: number, s: "neutral" | number = "neutral", beforeChar?: () => void, afterChar?: () => void, callback?: () => void, i: number = 0) => {
		if (n > e.innerHTML.length || n <= 0) {
			return
		} else {
			if (i != n) {
				if (beforeChar !== undefined) beforeChar()
				e.innerHTML = e.innerHTML.slice(0, e.innerHTML.length - 1)
				if (afterChar !== undefined) afterChar()
				i++
				if (s === "neutral") {
					setTimeout(() => this.eraseFromElement(e, n, s, beforeChar, afterChar, callback, i), this.getRandomIntegerInRange(80, 120))
				} else {
					setTimeout(() => this.eraseFromElement(e, n, s, beforeChar, afterChar, callback, i), s)
				}
			} else {
				if (callback !== undefined) callback()
			}
		}
	}

	/**
	 * Writes text to the end of an HTML element. Supports plain text, smileys and HTML entities.
	 * @param e element to write to
	 * @param t the text to write
	 * @param s the speed at which to write each character in miliseconds, where "neutral" is a random integer between 80 and 120 and 0 is instantly
	 * @param beforeChar if not undefined, gets called before writing any character
	 * @param afterChar if not undefined, gets called after writing any character
	 * @param callback if not undefined, gets called when done writing
	 * @param i for recursive perposes, should not be set manualy
	 */
	public writeToElement = (e: HTMLElement, t: string, s: "neutral" | number = "neutral", beforeChar?: () => void, afterChar?: () => void, callback?: () => void, i: number = 0) => {
		t = decode(t)
		if (s === 0) {
			if (beforeChar !== undefined) beforeChar()
			e.innerHTML += t
			if (afterChar !== undefined) afterChar()
			if (callback !== undefined) callback()
		} else {
			if (i < t.length) {
				if (beforeChar !== undefined) beforeChar()
				e.innerHTML += t[i]
				if (afterChar !== undefined) afterChar()
				i++
				if (s === "neutral") {
					setTimeout(() => this.writeToElement(e, t, s, beforeChar, afterChar, callback, i), this.getRandomIntegerInRange(80, 120))
				} else {
					setTimeout(() => this.writeToElement(e, t, s, beforeChar, afterChar, callback, i), s)
				}
			} else {
				if (callback !== undefined) callback()
			}
		}
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
}

export default TextWriter
