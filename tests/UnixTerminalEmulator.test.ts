import UnixTerminalEmulator from "../src/UnixTerminalEmulator"
import TerminalEmulatorOptions from "../src/types/TerminalEmulatorOptions"

import { randomUUID } from "crypto"
import TerminalCommand from "../src/types/TerminalCommand"

const defaultTerminalWrapperId = "terminal___emulator___wrapper"
const defaultTerminalCursorCss = "terminal___cursor___static"
jest.useRealTimers()
// jest.setTimeout(6000000)	// one hour
// jest.setTimeout(600000)		// 10 minutes
// jest.setTimeout(60000)		// 1 minutes
jest.setTimeout(360000) // 5 minutes

// WRAPPER TESTS
test("constructor => expect wrapper element to get created during object initialization if it does not already exist in the document", () => {
	// arange
	const options = {
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions
	const terminal = new UnixTerminalEmulator(options)

	// act
	const wrapper = document.getElementById(options.wrapperId)

	// assert
	expect(wrapper).not.toBeNull()
})
test("constructor => expect wrapper element in DOM to get the ID and CSS class if they are specified in the options during object initialization, otherwise default values should be set", () => {
	const options = {
		wrapperId: randomUUID(),
		wrapperCss: randomUUID(),
	} as TerminalEmulatorOptions

	// act
	const terminalWitoutOptions = new UnixTerminalEmulator()
	const wrapperWithoutOptions = document.getElementById(defaultTerminalWrapperId)
	const terminalWithOptions = new UnixTerminalEmulator(options)
	const wrapperWithOptions = document.getElementById(options.wrapperId)

	// assert
	expect(wrapperWithoutOptions).not.toBeNull()
	expect(wrapperWithoutOptions?.id).toEqual(defaultTerminalWrapperId)
	expect(wrapperWithoutOptions?.classList.contains(defaultTerminalWrapperId)).toBe(true)

	expect(wrapperWithOptions).not.toBeNull()
	expect(wrapperWithOptions?.id).toEqual(options.wrapperId)
	expect(wrapperWithOptions?.classList.contains(options.wrapperCss!)).toBe(true)
})

// CURSOR TESTS
test("constructor => expect cursor element to get created during object initialization if it does not already exist in the document", () => {
	// arange
	const terminalOptions = {
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions

	// act
	const terminal = new UnixTerminalEmulator(terminalOptions)
	const cursor = document.getElementById(terminalOptions.wrapperId)?.firstElementChild?.lastElementChild

	// assert
	expect(cursor).not.toBeUndefined()
	expect(cursor).not.toBeNull()
})
test("constructor => expect cursor element in DOM to get the ID, CSS class, character and animation if they are specified in the options during object initialization, otherwise default values should be set", () => {
	// arange
	const wrapperId = randomUUID()
	const options = {
		wrapperId: wrapperId,
		cursorChar: "#",
		cursorCss: "cursor_Class",
	} as TerminalEmulatorOptions

	// act
	const terminalWithOptions = new UnixTerminalEmulator(options)
	const cursorWithOptions = document.getElementById(options.wrapperId)?.firstElementChild?.lastElementChild

	const terminalWitoutOptions = new UnixTerminalEmulator()
	const cursorWithoutOptions = document.getElementById(defaultTerminalWrapperId)?.firstElementChild?.lastElementChild

	// assert
	expect(cursorWithOptions).not.toBeUndefined()
	expect(cursorWithOptions).not.toBeNull()
	expect(cursorWithOptions?.classList.contains(options.cursorCss!)).toBe(true)

	expect(cursorWithoutOptions).not.toBeUndefined()
	expect(cursorWithoutOptions).not.toBeNull()
	expect(cursorWithoutOptions?.classList.contains(defaultTerminalCursorCss)).toBe(true)
})

// ENVIROMENT TESTS
test("constructor => expect enviroment text to be written to the DOM in a unix enviroment formated way when it is specified in the options, otherwise no enviroment text should be written", () => {
	// arange
	const optionsWithoutEnviromentTextTerminalId = randomUUID()
	const optionsWithEnviromentText = {
		wrapperId: randomUUID(),
		enviroment: {
			hostname: "hostname",
			user: {
				name: "username",
				homeDir: "/home/",
			},
		},
	} as TerminalEmulatorOptions
	const expectedEnviromentText = `${optionsWithEnviromentText.enviroment!.user.name}@${optionsWithEnviromentText.enviroment!.hostname}:`

	// act
	const terminalWithEnviromentText = new UnixTerminalEmulator(optionsWithEnviromentText)
	const wrapperWithEnviromentText = document.getElementById(optionsWithEnviromentText.wrapperId!)

	const terminalWithoutEnviromentText = new UnixTerminalEmulator({
		wrapperId: optionsWithoutEnviromentTextTerminalId,
	} as TerminalEmulatorOptions)
	const wrapperWithoutEnviromentText = document.getElementById(optionsWithoutEnviromentTextTerminalId)

	// assert
	expect(wrapperWithEnviromentText?.innerHTML).toContain(expectedEnviromentText)
	expect(wrapperWithoutEnviromentText?.innerHTML).not.toContain(expectedEnviromentText)
})

// RUN TESTS
test("run => expect callback to be called once", done => {
	// arange
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)
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

test("writeCommand + pause + run => expect time diffrence from before and after run to be greater then or equal to the pause time in ms", done => {
	// arange
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
	}
	const pauseTimeInMs = 1000

	// act
	const timeBeforeTesting = new Date()
	terminal
		.writeCommand(testCommand)
		.pause(pauseTimeInMs)
		.run(() => {
			done()
			expect(new Date().getTime() - timeBeforeTesting.getTime()).toBeGreaterThanOrEqual(pauseTimeInMs)
		})

	// assert
})

test("writeCommand + run => expect command text and ouput, where output is of type variable, to appear inside the wrapper", done => {
	// arange
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
		output: "bar",
	}
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	// act
	terminal.writeCommand(testCommand).run(() => {
		done()
		// assert
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML).toContain(testCommand.text)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML).toContain(testCommand.output)
	})
})
test("writeCommand + run => expect command text and ouput, where output is of type function, to appear inside the wrapper", done => {
	// arange
	const outputFunction = () => "bar"
	const outputValue = outputFunction()
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
		output: outputFunction,
	}
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	// act
	terminal.writeCommand(testCommand).run(() => {
		done()
		// assert
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML).toContain(testCommand.text)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML).toContain(outputValue)
	})
})

test("writeCommand + run => expect wrapper to have 2 input line characters after single command run", done => {
	// arange
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
	}
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)
	const inputLineMatch = /\$/g

	// act
	terminal.writeCommand(testCommand).run(() => {
		done()
		// assert
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML).toMatch(inputLineMatch)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML.match(inputLineMatch)!.length).toBe(2)
	})
})
test("writeCommands + run => expect multiple commands to have thier text and output written to the wrapper after run", done => {
	// arange
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)
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
	terminal.writeCommands([testCommand1, testCommand2]).run(() => {
		done()
		// assert
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML!).toContain(testCommand1.text)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML!).toContain(testCommand1.output)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML!).toContain(testCommand2.text)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML!).toContain(testCommand2.output)
	})
})
test("writeCommands + run => expect multiple commands with different write speeds to have thier text and output written to the wrapper after run", done => {
	// arange
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)
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
	terminal.writeCommands([testCommand1, testCommand2, testCommand3]).run(() => {
		done()
		// assert
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML!).toContain(testCommand1.text)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML!).toContain(testCommand1.output)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML!).toContain(testCommand2.text)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML!).toContain(testCommand2.output)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML!).toContain(testCommand3.text)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML!).toContain(testCommand3.output)
	})
})

test("echo + run => expect 'echo {text}' to be written to the wrapper and {text} to appear twice", done => {
	// arange
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)
	const echoText = "Hello, World!"

	// act
	terminal.echo(echoText).run(() => {
		done()
		// assert
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML).toContain(echoText)
		expect(document.getElementById(terminal.options.wrapperId)?.innerHTML.match(new RegExp(echoText, "g"))!.length).toBe(2)
	})
})

test("writeCommand + history + run => add a single command and expect thier texts to appear twice", done => {
	// arange
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)
	const command = {
		text: "Hello, World!",
		writeSpeed: 0,
		pauseBeforeOutput: 0,
	} as TerminalCommand

	// act
	terminal
		.writeCommand(command)
		.history(0)
		.run(() => {
			done()
			// assert
			expect(document.getElementById(terminal.options.wrapperId)?.innerHTML.match(new RegExp(command.text, "g"))?.length).toBe(2)
		})
})
test("writeCommands + history + run => add HISTSIZE - 1 commands, each with unique text, and expect all thier texts to appear twice", done => {
	// arange
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)
	const commands = [] as TerminalCommand[]
	for (var i = 0; i < terminal.HISTSIZE - 1; i++) {
		commands.push({
			text: randomUUID(),
			writeSpeed: 0,
		})
	}

	// act
	terminal
		.writeCommands(commands)
		.history(0)
		.run(() => {
			done()
			// assert
			commands.forEach(command => {
				expect(document.getElementById(terminal.options.wrapperId)?.innerHTML.match(new RegExp(command.text, "g"))?.length).toBe(2)
			})
		})
})

test("writeCommand + clear + run => expect terminal wrapper text, without enviroment specified, to be equal to a new empty input line", done => {
	// arange
	const emptyInputLineWithoutEnviromentVariable = "$ "
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
		output: "bar",
	}
	const terminalWithoutEnviromentVariable = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	// act
	terminalWithoutEnviromentVariable
		.writeCommand(testCommand)
		.clear(0)
		.run(() => {
			done()
			// assert
			expect(document.getElementById(terminalWithoutEnviromentVariable.options.wrapperId)?.innerHTML).not.toContain(testCommand.text)
			expect(document.getElementById(terminalWithoutEnviromentVariable.options.wrapperId)?.innerHTML).not.toContain(testCommand.output)
			expect(document.getElementById(terminalWithoutEnviromentVariable.options.wrapperId)?.innerHTML).toMatch(emptyInputLineWithoutEnviromentVariable)
		})
})

test("writeToStdout", () => {
	// todo: implement
})

test("eraseFromStdout", () => {
	// todo: implement
})

test("touch ", () => {
	// todo: implement
})

test("mkdir", () => {
	// todo: implement
})

test("useradd ", () => {
	// todo: implement
})

test("pwd ", () => {
	// todo: implement
})

test("cd", () => {
	// todo: implement
})

test("vim ", () => {
	// todo: implement
})

test("vimInsert ", () => {
	// todo: implement
})

test("vimWrite ", () => {
	// todo: implement
})

test("vimQuit ", () => {
	// todo: implement
})

test("vimWriteQuit ", () => {
	// todo: implement
})