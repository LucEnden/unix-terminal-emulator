import { randomUUID } from "crypto"
import CursorElementOptions from "../src/types/CursorElementOptions"
import StdoutEmulatorOptions from "../src/types/StdoutEmulatorOptions"
import UnixStdoutEmulator from "../src/UnixStdoutEmulator"

const textToWrite = "&#8224;&#174;&#165;&#168;&#169;&#729;&#8747;&#248;&#8230;&#710;&#402;&#8710;&#247;&#8721;&#402;&#8710;&#230;&#248;&#960;&#163;&#168;&#402;&#8482;"
const expectedText = "†®¥¨©˙∫ø…ˆƒ∆÷∑ƒ∆æøπ£¨ƒ™"

test("constructor + appendCursor => expect stdout css to be passed to stdout element and cursor character/css to be passed to the cursor element", () => {
	const textElem = document.createElement("div")
	textElem.id = randomUUID()
	const options: StdoutEmulatorOptions = {
		stdoutCss: "stdoutcss",
		cursorChar: "|",
		cursorCss: "cursor_css",
	}

	document.body.appendChild(textElem)
	const stdout = new UnixStdoutEmulator(textElem, options)
	stdout.appendCursor()

	expect(textElem.firstElementChild).not.toBeNull()
	expect(textElem.firstElementChild!.classList).toContain(options.stdoutCss)
	expect(textElem.firstElementChild!.firstElementChild).not.toBeNull()
	expect(textElem.firstElementChild!.firstElementChild!.innerHTML).toContain(options.cursorChar)
	expect(textElem.firstElementChild!.firstElementChild!.classList).toContain(options.cursorCss)
})

test("appendCursor + removeCursor => expect text element innerHTML to not contain cursor char", () => {
	const textElem = document.createElement("div")
	textElem.id = randomUUID()
	const options: StdoutEmulatorOptions = {
		stdoutCss: "stdoutcss",
		cursorChar: "|",
		cursorCss: "cursor_css",
	}

	document.body.appendChild(textElem)
	const stdout = new UnixStdoutEmulator(textElem, options)
	stdout.appendCursor()
	stdout.removeCursor()

	expect(textElem.firstElementChild).not.toBeNull()
	expect(textElem.firstElementChild!.firstElementChild).toBeNull()
})