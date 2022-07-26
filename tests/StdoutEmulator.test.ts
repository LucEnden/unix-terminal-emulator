import { randomUUID } from "crypto"
import { StdoutChildElement, StdoutCursorElement } from "../src/interfaces"
import StdoutEmulator from "../src/StdoutEmulator"

test("write => expect text element innerHTML to contain text", done => {
	const textElem: StdoutChildElement = {
		id: randomUUID(),
	}
	const cursorElem: StdoutCursorElement = {
		char: "|",
		id: "cursor_id",
		css: "cursor_css",
	}
    const textToWrite = "text to write to stdout"

	const stdout = new StdoutEmulator(textElem, cursorElem)

	stdout.Write(textToWrite, "neutral", () => {
		done()
		expect(document.getElementById(textElem.id)).not.toBeNull()
		expect(document.getElementById(textElem.id)?.innerHTML).toContain(textToWrite)
	})
})

test("write => expect text element innerHTML to contain HTML entities", done => {
	const textElem: StdoutChildElement = {
		id: randomUUID(),
	}
	const cursorElem: StdoutCursorElement = {
		char: "|",
		id: "cursor_id",
		css: "",
	}
	const textToWrite = "&#8224;&#174;&#165;&#168;&#169;&#729;&#8747;&#248;&#8230;&#710;&#402;&#8710;&#247;&#8721;&#402;&#8710;&#230;&#248;&#960;&#163;&#168;&#402;&#8482;"
    const expectedText = "†®¥¨©˙∫ø…ˆƒ∆÷∑ƒ∆æøπ£¨ƒ™"

	const stdout = new StdoutEmulator(textElem, cursorElem)

	stdout.Write(textToWrite, 0, () => {
		done()
		expect(document.getElementById(textElem.id)).not.toBeNull()
		expect(document.getElementById(textElem.id)?.innerHTML).toContain(expectedText)
	})
})

test("write => expect text element innerHTML to contain HTML emojis", done => {
	const textElem: StdoutChildElement = {
		id: randomUUID(),
	}
	const cursorElem: StdoutCursorElement = {
		char: "|",
		id: "cursor_id",
		css: "",
	}
	const textToWrite = "⏰☔☕⛎⛺✨"

	const stdout = new StdoutEmulator(textElem, cursorElem)

	stdout.Write(textToWrite, 0, () => {
		done()
		expect(document.getElementById(textElem.id)).not.toBeNull()
		expect(document.getElementById(textElem.id)?.innerHTML).toContain(textToWrite)
	})
})