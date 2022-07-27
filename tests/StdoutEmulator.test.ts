import { randomUUID } from "crypto"
import CursorElementOptions from "../src/types/CursorElementOptions"
import StdoutEmulatorOptions from "../src/types/StdoutEmulatorOptions"
import UnixStdoutEmulator from "../src/UnixStdoutEmulator"

test("write => expect text element innerHTML to contain text", done => {
	const textElem = document.createElement("div")
	textElem.id = randomUUID()
	const options: StdoutEmulatorOptions = {
		stdoutCss: "stdoutcss",
		cursorChar: "|",
		cursorCss: "cursor_css",
	}
    const textToWrite = "text to write to stdout"

	document.body.appendChild(textElem)
	const stdout = new UnixStdoutEmulator(textElem, options)

	stdout.write(textToWrite, "neutral", () => {
		done()
		expect(document.getElementById(textElem.id)).not.toBeNull()
		expect(document.getElementById(textElem.id)?.innerHTML).toContain(textToWrite)
	})
})

test("write => expect text element innerHTML to contain HTML entities", done => {
	const textElem = document.createElement("div")
	textElem.id = randomUUID()
	const options: StdoutEmulatorOptions = {
		stdoutCss: "stdoutcss",
		cursorChar: "|",
		cursorCss: "cursor_css",
	}
	const textToWrite = "&#8224;&#174;&#165;&#168;&#169;&#729;&#8747;&#248;&#8230;&#710;&#402;&#8710;&#247;&#8721;&#402;&#8710;&#230;&#248;&#960;&#163;&#168;&#402;&#8482;"
    const expectedText = "†®¥¨©˙∫ø…ˆƒ∆÷∑ƒ∆æøπ£¨ƒ™"

	document.body.appendChild(textElem)
	const stdout = new UnixStdoutEmulator(textElem, options)

	stdout.write(textToWrite, 0, () => {
		done()
		expect(document.getElementById(textElem.id)).not.toBeNull()
		expect(document.getElementById(textElem.id)?.innerHTML).toContain(expectedText)
	})
})

test("write => expect text element innerHTML to contain HTML emojis", done => {
	const textElem = document.createElement("div")
	textElem.id = randomUUID()
	const options: StdoutEmulatorOptions = {
		stdoutCss: "stdoutcss",
		cursorChar: "|",
		cursorCss: "cursor_css",
	}
	const textToWrite = "⏰☔☕⛎⛺✨"

	document.body.appendChild(textElem)
	const stdout = new UnixStdoutEmulator(textElem, options)

	stdout.write(textToWrite, 0, () => {
		done()
		expect(document.getElementById(textElem.id)).not.toBeNull()
		expect(document.getElementById(textElem.id)?.innerHTML).toContain(textToWrite)
	})
})