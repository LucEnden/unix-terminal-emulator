/**
 * Implements methods for writing and erasing text of HTML elements.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/core.TextWriter.TextWriter}
 */
declare class TextWriter {
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
    eraseFromElement: (e: HTMLElement, n: number, s?: "neutral" | number, beforeChar?: () => void, afterChar?: () => void, callback?: () => void, i?: number) => void;
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
    writeToElement: (e: HTMLElement, t: string, s?: "neutral" | number, beforeChar?: () => void, afterChar?: () => void, callback?: () => void, i?: number) => void;
    /**
     * Gets a random integer in the range from min to max, inclusif
     * @param {Number} min Minimum number to generate
     * @param {Number} max Maximum number to generate
     * @returns random integer in the range from min to max, inclusif
     */
    private getRandomIntegerInRange;
}
export default TextWriter;
