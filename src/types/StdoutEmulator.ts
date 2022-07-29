import CursorElementOptions from "./CursorElementOptions"
import StdoutElementOptions from "./StdoutEmulatorOptions"

/**
 * Emulates the behaviour of stdout by writing text to an HTML element
 */
export default interface StdoutEmulator {
	/**
	 * @param options Options to customize the stdout element 
	 */
	readonly options: StdoutElementOptions
	/**
	 * Writes text to the stdout element
	 * @param text The text to write
	 * @param speed The speed at wich to write each character in miliseconds, where ```"neutral"``` makes the speed of each charecter random between 80 and 120 miliseconds
	 * @param callback Gets called when writing the text is done
	 */
	write: (text: string, speed: "neutral" | number, callback: () => void) => void
	/**
	 * Clears the text in the stdout element
	 */
	clear: () => void
	/**
	 * Removes the cursor element from the stdout element
	 */
	removeCursor: () => void
	/**
	 * Appends the cursor element to the stdout element
	 */
	appendCursor: () => void
}
