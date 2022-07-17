import UnixTerminalEmulator from "../src/UnixTerminalEmulator"
import { TerminalCommand, TerminalOptions } from "../src/interfaces"
import { randomUUID } from "crypto"

const defaultTerminalWrapperId = "terminal___emulator___wrapper"
const defaultTerminalCursorId = "terminal___emulator___cursor"
jest.useRealTimers()
jest.setTimeout(60000)

// WRAPPER TESTS
test("constructor => expect wrapper element to get created during object initialization if it does not already exist in the document", () => {
	// arange
	const terminalId = randomUUID()
	const terminal = new UnixTerminalEmulator({
		wrapperId: terminalId,
	})

	// act
	const wrapper = document.getElementById(terminalId)

	// assert
	expect(wrapper).not.toBeNull()
})
test("constructor => expect wrapper element in DOM to get the ID and CSS class if they are specified in the options during object initialization, otherwise default values should be set", () => {
	const idAndCssClass = randomUUID()
	const options: TerminalOptions = {
		wrapperId: idAndCssClass,
		wrapperClassName: idAndCssClass,
	}

	// act
	const terminalWitoutOptions = new UnixTerminalEmulator()
	const wrapperWithoutOptions = document.getElementById(defaultTerminalWrapperId)
	const terminalWithOptions = new UnixTerminalEmulator(options)
	const wrapperWithOptions = document.getElementById(idAndCssClass)

	// assert
	expect(wrapperWithoutOptions).not.toBeNull()
	expect(wrapperWithoutOptions?.id).toEqual(defaultTerminalWrapperId)
	expect(wrapperWithoutOptions?.classList.contains(defaultTerminalWrapperId)).toBe(true)

	expect(wrapperWithOptions).not.toBeNull()
	expect(wrapperWithOptions?.id).toEqual(options.wrapperId)
	expect(wrapperWithOptions?.classList.contains(options.wrapperClassName!)).toBe(true)
})

// CURSOR TESTS
test("constructor => expect cursor element to get created during object initialization if it does not already exist in the document", () => {
	// arange
	const teminalCursorId = randomUUID()
	const terminalOptions = {
		cursorId: teminalCursorId,
	} as TerminalOptions

	// act
	const terminal = new UnixTerminalEmulator(terminalOptions)
	const cursor = document.getElementById(teminalCursorId)

	// assert
	expect(cursor).not.toBeNull()
})
test("constructor => expect cursor element in DOM to get the ID, CSS class, character and animation if they are specified in the options during object initialization, otherwise default values should be set", () => {
	// arange
	const defaultTerminalCursor = "|"
	const wrapperId = randomUUID()
	const cursorId = randomUUID()
	const options: TerminalOptions = {
		wrapperId: wrapperId,
		cursor: "#",
		cursorId: cursorId,
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
test("constructor => expect cursor element in DOM to get animation class based on settings, otherwise default animation should be applied", () => {
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

// ENVIROMENT TESTS
test("constructor => expect enviroment text to be written to the DOM in a unix enviroment formated way when it is specified in the options, otherwise no enviroment text should be written", () => {
	// arange
	const optionsWithoutEnviromentTextTerminalId = randomUUID()
	const optionsWithEnviromentText: TerminalOptions = {
		wrapperId: randomUUID(),
		enviroment: {
			hostname: "hostname",
			username: "username",
		},
	}
	const expectedEnviromentText = `${optionsWithEnviromentText.enviroment!.username}@${optionsWithEnviromentText.enviroment!.hostname}:`

	// act
	const terminalWithEnviromentText = new UnixTerminalEmulator(optionsWithEnviromentText)
	const wrapperWithEnviromentText = document.getElementById(optionsWithEnviromentText.wrapperId!)

	const terminalWithoutEnviromentText = new UnixTerminalEmulator({ wrapperId: optionsWithoutEnviromentTextTerminalId })
	const wrapperWithoutEnviromentText = document.getElementById(optionsWithoutEnviromentTextTerminalId)

	// assert
	expect(wrapperWithEnviromentText?.innerHTML).toContain(expectedEnviromentText)
	expect(wrapperWithoutEnviromentText?.innerHTML).not.toContain(expectedEnviromentText)
})

// RUN TESTS
test("run => expect callback to be called once", (done) => {
	// arange
	const terminalId = randomUUID()
	const terminal = new UnixTerminalEmulator({
		wrapperId: terminalId,
	})
	const callback = jest.fn()

	// act
	terminal.run(() => {
		callback()
		done()
		// assert
		expect(callback).toBeCalled()
		expect(callback).toBeCalledTimes(1)
	})
})

test("addCommand + pause + run => expect time diffrence from before and after run to be greater then or equal to the pause time in ms", (done) => {
	// arange
	const terminalId = randomUUID()
	const terminal = new UnixTerminalEmulator({
		wrapperId: terminalId,
	})
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
		output: "foo",
	}
	const pauseTimeInMs = 1000

	// act
	const timeBeforeTesting = new Date()
	terminal
		.addCommand(testCommand)
		.pause(pauseTimeInMs)
		.run(() => {
			done()
			expect(new Date().getTime() - timeBeforeTesting.getTime()).toBeGreaterThanOrEqual(pauseTimeInMs)
		})

	// assert
})

test("addCommand + run => expect command text and ouput, where output is of type variable, to appear inside the wrapper", (done) => {
	// arange
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
		output: "bar",
	}
	const terminalId = randomUUID()
	const terminal = new UnixTerminalEmulator({
		wrapperId: terminalId,
	})

	// act
	terminal.addCommand(testCommand).run(() => {
		done()
		// assert
		expect(document.getElementById(terminalId)?.innerHTML).toContain(testCommand.text)
		expect(document.getElementById(terminalId)?.innerHTML).toContain(testCommand.output)
	})
})
test("addCommand + run => expect command text and ouput, where output is of type function, to appear inside the wrapper", (done) => {
	// arange
	const outputFunction = () => "bar"
	const outputValue = outputFunction()
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
		output: outputFunction,
	}
	const terminalId = randomUUID()
	const terminal = new UnixTerminalEmulator({
		wrapperId: terminalId,
	})

	// act
	terminal.addCommand(testCommand).run(() => {
		done()
		// assert
		expect(document.getElementById(terminalId)?.innerHTML).toContain(testCommand.text)
		expect(document.getElementById(terminalId)?.innerHTML).toContain(outputValue)
	})
})
test("addCommand + run => expect wrapper to have 2 input line characters after single command run", (done) => {
	// arange
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
	}
	const terminalId = randomUUID()
	const terminal = new UnixTerminalEmulator({
		wrapperId: terminalId,
	})
	const inputLineMatch = /\$/g

	// act
	terminal.addCommand(testCommand).run(() => {
		done()
		// assert
		expect(document.getElementById(terminalId)?.innerHTML).toMatch(inputLineMatch)
		expect(document.getElementById(terminalId)?.innerHTML.match(inputLineMatch)!.length).toBe(2)
	})
})
test("addCommands + run => expect multiple commands to have thier text and output written to the wrapper after run", (done) => {
	// arange
	const terminalId = randomUUID()
	const terminal = new UnixTerminalEmulator({
		wrapperId: terminalId,
	})
	const testCommand1: TerminalCommand = {
		text: "echo foo1",
		writeSpeed: 0,
		output: "bar1",
	}
	const testCommand2: TerminalCommand = {
		text: "echo foo2",
		writeSpeed: 0,
		output: "bar2",
	}

	// act
	terminal.addCommands([testCommand1, testCommand2]).run(() => {
		done()
		// assert
		expect(document.getElementById(terminalId)?.innerHTML!).toContain(testCommand1.text)
		expect(document.getElementById(terminalId)?.innerHTML!).toContain(testCommand1.output)
		expect(document.getElementById(terminalId)?.innerHTML!).toContain(testCommand2.text)
		expect(document.getElementById(terminalId)?.innerHTML!).toContain(testCommand2.output)
	})
})
test("addCommands + run => expect multiple commands with different write speeds to have thier text and output written to the wrapper after run", (done) => {
	// arange
	const terminalId = randomUUID()
	const terminal = new UnixTerminalEmulator({
		wrapperId: terminalId,
	})
	const testCommand1: TerminalCommand = {
		text: "echo foo1",
		writeSpeed: 0,
		output: "bar1",
	}
	const testCommand2: TerminalCommand = {
		text: "echo foo2",
		writeSpeed: "neutral",
		output: "bar2",
	}
	const testCommand3: TerminalCommand = {
		text: "echo foo2",
		writeSpeed: 100,
		output: "bar2",
	}

	// act
	terminal.addCommands([testCommand1, testCommand2, testCommand3]).run(() => {
		done()
		// assert
		expect(document.getElementById(terminalId)?.innerHTML!).toContain(testCommand1.text)
		expect(document.getElementById(terminalId)?.innerHTML!).toContain(testCommand1.output)
		expect(document.getElementById(terminalId)?.innerHTML!).toContain(testCommand2.text)
		expect(document.getElementById(terminalId)?.innerHTML!).toContain(testCommand2.output)
		expect(document.getElementById(terminalId)?.innerHTML!).toContain(testCommand3.text)
		expect(document.getElementById(terminalId)?.innerHTML!).toContain(testCommand3.output)
	})
})
/*

test("echo + run => expect 'echo {text}' to be written to the wrapper and {text} to appear twice", (done) => {
	// arange
	const terminalId = randomUUID()
	const terminal = new UnixTerminalEmulator({
		wrapperId: terminalId,
	})
	const echoText = "Hello, World!"

	// act
	terminal.echo(echoText).run(done)

	// asset
	expect(document.getElementById(terminalId)?.innerHTML).toContain(echoText)
	expect(document.getElementById(terminalId)?.innerHTML.split(echoText).length).toBe(2)
})

test("addCommand + history + run => add a single command and expect thier texts to appear twice after history run", (done) => {
	// arange
	const terminalId = randomUUID()
	const terminal = new UnixTerminalEmulator({
		wrapperId: terminalId,
	})
	const command = {
		text: "Hello, World!",
		writeSpeed: 0,
		pauseBeforeOutput: 0,
	} as TerminalCommand

	// act
	const wrapper = document.getElementById(terminalId)
	terminal.addCommand(command).history().run(done)

	// asset
	expect(document.getElementById(terminalId)?.innerHTML).toContain(command.text)
	expect(document.getElementById(terminalId)?.innerHTML.split(command.text).length).toBe(2)
})
test("addCommands + history + run => add 100 commands with each a unique text and expect all thier texts to appear twice after history run", (done) => {
	// arange
	const terminalId = randomUUID()
	const terminal = new UnixTerminalEmulator({
		wrapperId: terminalId,
	})
	const commands = [] as TerminalCommand[]

	// act
	for (var i = 0; i < 100; i++) {
		commands.push({
			text: randomUUID(),
			writeSpeed: 0,
		})
	}
	const wrapper = document.getElementById(terminalId)
	terminal.addCommands(commands).run(done)

	// asset
	for (var i = 0; i <= commands.length; i++) {
		expect(wrapper?.innerHTML).toContain(commands[i].text)
		expect(wrapper?.innerHTML.split(commands[i].text).length).toBe(2)
	}
})
*/
