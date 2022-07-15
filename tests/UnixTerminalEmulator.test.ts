import UnixTerminalEmulator from "../src/UnixTerminalEmulator"
import { TerminalCommand, TerminalOptions } from "../src/interfaces"

const defaultTerminalWrapperId = "terminal___emulator___wrapper"
const defaultTerminalCursorId = "terminal___emulator___cursor"

test("constructor => wrapper element gets created during object initialization if it does not already exist in the document", () => {
	// arange

	// act
	const terminal = new UnixTerminalEmulator()
	const wrapper = document.getElementById(defaultTerminalWrapperId)

	// assert
	expect(wrapper).not.toBeNull()
})
test("constructor => wrapper element in DOM gets the ID and CSS class if they are specified in the options during object initialization, otherwise default values should be set", () => {
	const defaultTerminalWrapperIdAndClass = "terminal___emulator___wrapper"
	const idAndCssClass = "idAndCssClassDefault"
	const options: TerminalOptions = {
		wrapperId: idAndCssClass,
		wrapperClassName: idAndCssClass,
	}

	// act
	const terminalWitoutOptions = new UnixTerminalEmulator()
	const wrapperWithoutOptions = document.getElementById(defaultTerminalWrapperIdAndClass)
	const terminalWithOptions = new UnixTerminalEmulator(options)
	const wrapperWithOptions = document.getElementById(idAndCssClass)

	// assert
	expect(wrapperWithoutOptions).not.toBeNull()
	expect(wrapperWithoutOptions?.id).toEqual(defaultTerminalWrapperIdAndClass)
	expect(wrapperWithoutOptions?.classList.contains(defaultTerminalWrapperIdAndClass)).toBe(true)

	expect(wrapperWithOptions).not.toBeNull()
	expect(wrapperWithOptions?.id).toEqual(options.wrapperId)
	expect(wrapperWithOptions?.classList.contains(options.wrapperClassName!)).toBe(true)
})

test("constructor => cursor element gets created during object initialization if it does not already exist in the document", () => {
	// arange

	// act
	const terminal = new UnixTerminalEmulator()
	const cursor = document.getElementById(defaultTerminalCursorId)

	// assert
	expect(cursor).not.toBeNull()
})
test("constructor => cursor element in DOM gets the ID, CSS class, character and animation if they are specified in the options during object initialization, otherwise default values should be set", () => {
	// arange

	const defaultTerminalCursor = "|"
	const options: TerminalOptions = {
		wrapperId: "wrapper___with___options",
		cursor: "#",
		cursorId: "cursor_ID",
		cursorClassName: "cursor_Class",
		cursorAnimation: undefined,
	}

	// act
	const terminalWithOptions = new UnixTerminalEmulator(options)
	const cursorWithOptions = document.getElementById(options.cursorId!)

	const terminalWitoutOptions = new UnixTerminalEmulator()
	const cursorWithoutOptions = document.getElementById(defaultTerminalCursorId)

	// assert
	expect(cursorWithOptions).not.toBeUndefined()
	expect(cursorWithOptions?.id).toEqual(options.cursorId)
	expect(cursorWithOptions?.classList.contains(options.cursorClassName!)).toBe(true)

	expect(cursorWithoutOptions).not.toBeUndefined()
	expect(cursorWithoutOptions?.id).toEqual(defaultTerminalCursorId)
	expect(cursorWithoutOptions?.classList.contains(defaultTerminalCursorId)).toBe(true)

	// innerText is not implemented in jest https://stackoverflow.com/questions/47902335/innertext-is-undefined-in-jest-test#answer-47902938
	// expect(cursorWithOptions?.innerText).toEqual(options.cursor)
	// expect(cursorWithoutOptions?.innerText).toEqual(defaultTerminalCursor)
})
test("constructor => cursor element in DOM gets animation class based on settings, otherwise default animation should be applied", () => {
	// arange
	const optionsWithAnimationFluid: TerminalOptions = {
		wrapperId: "wrapper___with___fluid___cursor___animation",
		cursorId: "cursor___with___fluid___animation",
		cursorAnimation: "fluid",
	}
	const fluidAnimationCssClassAndKeyframeName = "terminal___cursor___fluid"
	const optionsWithAnimationStatic: TerminalOptions = {
		wrapperId: "wrapper___with___static___cursor___animation",
		cursorId: "cursor___with___static___animation",
		cursorAnimation: "static",
	}
	const staticAnimationCssClassAndKeyframeName = "terminal___cursor___static"
	const optionsWithAnimationUndefined: TerminalOptions = {
		wrapperId: "wrapper___with___undefined___cursor___animation",
		cursorId: "cursor___with___undefined___animation",
		cursorAnimation: undefined,
	}
	const undefinedAnimationCssClassAndKeyframeName = "terminal___cursor___none"

	// act
	const terminalWithFluidCursor = new UnixTerminalEmulator(optionsWithAnimationFluid)
	const cursorWithFluidAnimation = document.getElementById(optionsWithAnimationFluid.cursorId!)

	const terminalWithStaticCursor = new UnixTerminalEmulator(optionsWithAnimationStatic)
	const cursorWithStaticAnimation = document.getElementById(optionsWithAnimationStatic.cursorId!)

	const terminalWithUndefinedCursor = new UnixTerminalEmulator(optionsWithAnimationUndefined)
	const cursorWithUndefinedAnimation = document.getElementById(optionsWithAnimationUndefined.cursorId!)

	// assert
	expect(cursorWithFluidAnimation).not.toBeNull()
	expect(cursorWithFluidAnimation?.classList.contains(fluidAnimationCssClassAndKeyframeName)).toBe(true)

	expect(cursorWithStaticAnimation).not.toBeNull()
	expect(cursorWithStaticAnimation?.classList.contains(staticAnimationCssClassAndKeyframeName)).toBe(true)

	expect(cursorWithUndefinedAnimation).not.toBeNull()
	expect(cursorWithUndefinedAnimation?.classList.contains(undefinedAnimationCssClassAndKeyframeName)).toBe(true)
})

test("constructor => enviroment text gets written to the DOM in a unix enviroment formated way when it is specified in the options, otherwise no enviroment text should be written", () => {
	// arange

	const optionsWithEnviromentText: TerminalOptions = {
		wrapperId: "wrapper___with___enviroment___text",
		enviroment: {
			hostname: "hostname",
			username: "username",
		},
	}
	const expectedEnviromentText = `${optionsWithEnviromentText.enviroment!.username}@${optionsWithEnviromentText.enviroment!.hostname}:`

	// act
	const terminalWithEnviromentText = new UnixTerminalEmulator(optionsWithEnviromentText)
	const wrapperWithEnviromentText = document.getElementById(optionsWithEnviromentText.wrapperId!)

	const terminalWithoutEnviromentText = new UnixTerminalEmulator()
	const wrapperWithoutEnviromentText = document.getElementById(defaultTerminalWrapperId)

	// assert
	expect(wrapperWithEnviromentText?.innerHTML).toContain(expectedEnviromentText)
	expect(wrapperWithoutEnviromentText?.innerHTML).not.toContain(expectedEnviromentText)
})

test("run => callback should be called once", () => {
	// arange
	const terminal = new UnixTerminalEmulator()
	const callback = jest.fn()

	// act
	terminal.run(callback)

	// assert
	expect(callback).toBeCalled()
	expect(callback).toBeCalledTimes(1)
})

test("addCommand + run => wrapper should have 2 input line characters after single command run", () => {
	// arange
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
	}
	const terminal = new UnixTerminalEmulator()

	// act
	const wrapper = document.getElementById(defaultTerminalWrapperId)
	const assertCallback = () => {
		expect(wrapper?.innerHTML.split("$").length).toBe(2)
	}
	terminal.addCommand(testCommand).run(assertCallback)

	// assert (see assertCallback)
})
test("addCommand + run => command text and output are written to the wrapper after run", () => {
	// arange
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
		output: "foo",
	}
	const terminal = new UnixTerminalEmulator()

	// act
	const wrapper = document.getElementById(defaultTerminalWrapperId)
	const assertCallback = () => {
		expect(wrapper?.innerHTML).toContain(testCommand.text)
		expect(wrapper?.innerHTML).toContain(testCommand.output)
	}
	terminal.addCommand(testCommand).run(assertCallback)

	// assert (see assertCallback)
})
test("addCommand + run => multiple terminal instances with each a single command that have different writing speeds are expected to have their text appear on the screen one after the other", () => {
	jest.useFakeTimers()
	const testCommandSlow: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 1000,
		output: "foo",
	}
	const terminalOptionsSlow: TerminalOptions = {
		wrapperId: "slow",
	}
	const terminalSlow = new UnixTerminalEmulator(terminalOptionsSlow)
	const wrapperSlow = document.getElementById(terminalOptionsSlow.wrapperId!)
	const callbackSlow = jest.fn(() => {
		expect(callbackNeutral).toBeCalled()
		expect(callbackInstant).toBeCalled()
		expect(wrapperNeutral?.innerHTML).toContain(testCommandNeutral.text)
		expect(wrapperNeutral?.innerHTML).toContain(testCommandNeutral.output)
		expect(wrapperInstant?.innerHTML).toContain(testCommandInstant.text)
		expect(wrapperInstant?.innerHTML).toContain(testCommandInstant.output)
	})

	const testCommandNeutral: TerminalCommand = {
		text: "echo foo",
		writeSpeed: "neutral",
		output: "foo",
	}
	const terminalOptionsNeutral: TerminalOptions = {
		wrapperId: "neutral",
	}
	const terminalNeutral = new UnixTerminalEmulator(terminalOptionsNeutral)
	const wrapperNeutral = document.getElementById(terminalOptionsNeutral.wrapperId!)
	const callbackNeutral = jest.fn(() => {
		expect(callbackSlow).not.toBeCalled()
		expect(callbackInstant).toBeCalled()
		expect(wrapperSlow?.innerHTML).not.toContain(testCommandSlow.text)
		expect(wrapperSlow?.innerHTML).not.toContain(testCommandSlow.output)
		expect(wrapperInstant?.innerHTML).toContain(testCommandInstant.text)
		expect(wrapperInstant?.innerHTML).toContain(testCommandInstant.output)
	})

	const testCommandInstant: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
		output: "foo",
	}
	const terminalOptionsInstant: TerminalOptions = {
		wrapperId: "instant",
	}
	const terminalInstant = new UnixTerminalEmulator(terminalOptionsInstant)
	const wrapperInstant = document.getElementById(terminalOptionsInstant.wrapperId!)
	const callbackInstant = jest.fn(() => {
		expect(callbackNeutral).not.toBeCalled()
		expect(callbackSlow).not.toBeCalled()
		expect(wrapperSlow?.innerHTML).not.toContain(testCommandSlow.text)
		expect(wrapperSlow?.innerHTML).not.toContain(testCommandSlow.output)
		expect(wrapperNeutral?.innerHTML).not.toContain(testCommandNeutral.text)
		expect(wrapperNeutral?.innerHTML).not.toContain(testCommandNeutral.output)
	})

	// act
	terminalInstant.addCommand(testCommandInstant).run(callbackInstant)
	terminalNeutral.addCommand(testCommandNeutral).run(callbackNeutral)
	terminalSlow.addCommand(testCommandSlow).run(callbackSlow)

	// assert
})
test("addCommand + pause + run => expect time diffrence from before and after run to be greater then or equal to the pause time in ms", () => {
	// arange
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
		output: "foo",
	}
	const pauseTimeInMs = 1000
	const timeBeforeTesting = new Date()
	const terminal = new UnixTerminalEmulator()

	// act
	const wrapper = document.getElementById(defaultTerminalWrapperId)
	const assertCallback = () => {
		const timeAfterTesting = new Date()
		expect(timeAfterTesting.getTime() - timeBeforeTesting.getTime()).toBeGreaterThanOrEqual(pauseTimeInMs)
	}
	terminal.addCommand(testCommand).pause(pauseTimeInMs).run(assertCallback)

	// assert (see assertCallback)
})

test("addCommands + run => multiple commands text and output are written to the wrapper after run", () => {
	// arange
	const testCommand1: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
		output: "foo",
	}
	const testCommand2: TerminalCommand = {
		text: "echo Hello",
		writeSpeed: 0,
		output: "World!",
	}
	const terminal = new UnixTerminalEmulator()

	// act
	const wrapper = document.getElementById(defaultTerminalWrapperId)
	const assertCallback = () => {
		expect(wrapper?.innerHTML).toContain(testCommand1.text)
		expect(wrapper?.innerHTML).toContain(testCommand1.output)
		expect(wrapper?.innerHTML).toContain(testCommand2.text)
		expect(wrapper?.innerHTML).toContain(testCommand2.output)
	}
	terminal.addCommands([testCommand1, testCommand2]).run(assertCallback)

	// assert (see assertCallback)
})
