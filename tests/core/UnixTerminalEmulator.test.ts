import UnixTerminalEmulator from "../../src/core/UnixTerminalEmulator"
import TerminalEmulatorOptions from "../../src/types/TerminalEmulatorOptions"

import { randomUUID } from "crypto"
import TerminalCommand from "../../src/types/TerminalCommand"
import FileSystemUser from "../../src/types/FileSystemUser"

const defaultTerminalWrapperId = "terminal___emulator___wrapper"
const defaultTerminalCursorCss = "terminal___cursor___static"
jest.useRealTimers()
// jest.setTimeout(6000000)		// 1 hour
// jest.setTimeout(600000)		// 10 minutes
jest.setTimeout(360000) // 5 minutes
// jest.setTimeout(60000)		// 1 minute

// fix: jsdom Doesn't seem to have TextEncoder defined in global for the DOM
// https://stackoverflow.com/questions/57712235/referenceerror-textencoder-is-not-defined-when-running-react-scripts-test#answer-57713960
if (typeof global.TextEncoder === "undefined") {
	const { TextEncoder } = require("util")
	global.TextEncoder = TextEncoder
}

// WRAPPER TESTS
test("constructor => expect wrapper element to get created during object initialization if it does not already exist in the document", () => {
	// arrange
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
	const terminalWithoutOptions = new UnixTerminalEmulator()
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
	// arrange
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
	// arrange
	const wrapperId = randomUUID()
	const options = {
		wrapperId: wrapperId,
		cursorChar: "#",
		cursorCss: "cursor_Class",
	} as TerminalEmulatorOptions

	// act
	const terminalWithOptions = new UnixTerminalEmulator(options)
	const cursorWithOptions = document.getElementById(options.wrapperId)?.firstElementChild?.lastElementChild

	const terminalWithoutOptions = new UnixTerminalEmulator()
	const cursorWithoutOptions = document.getElementById(defaultTerminalWrapperId)?.firstElementChild?.lastElementChild

	// assert
	expect(cursorWithOptions).not.toBeUndefined()
	expect(cursorWithOptions).not.toBeNull()
	expect(cursorWithOptions?.classList.contains(options.cursorCss!)).toBe(true)

	expect(cursorWithoutOptions).not.toBeUndefined()
	expect(cursorWithoutOptions).not.toBeNull()
	expect(cursorWithoutOptions?.classList.contains(defaultTerminalCursorCss)).toBe(true)
})

// ENVIRONMENT TESTS
test("constructor => expect environment text to be written to the DOM in a unix environment formatted way when it is specified in the options, otherwise no environment text should be written", () => {
	// arrange
	const optionsWithoutEnvironmentTextTerminalId = randomUUID()
	const optionsWithEnvironmentText = {
		wrapperId: randomUUID(),
		environment: {
			hostname: "hostname",
			user: {
				name: "username",
				homeDir: "/home/",
			},
		},
	} as TerminalEmulatorOptions
	const expectedEnvironmentText = `${optionsWithEnvironmentText.environment!.user.name}@${optionsWithEnvironmentText.environment!.hostname}:`

	// act
	const terminalWithEnvironmentText = new UnixTerminalEmulator(optionsWithEnvironmentText)
	const wrapperWithEnvironmentText = document.getElementById(optionsWithEnvironmentText.wrapperId!)

	const terminalWithoutEnvironmentText = new UnixTerminalEmulator({
		wrapperId: optionsWithoutEnvironmentTextTerminalId,
	} as TerminalEmulatorOptions)
	const wrapperWithoutEnvironmentText = document.getElementById(optionsWithoutEnvironmentTextTerminalId)

	// assert
	expect(wrapperWithEnvironmentText?.innerHTML).toContain(expectedEnvironmentText)
	expect(wrapperWithoutEnvironmentText?.innerHTML).not.toContain(expectedEnvironmentText)
})

// RUN TESTS
test("run => expect callback to be called once", done => {
	// arrange
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

test("writeCommand + pause + run => expect time difference from before and after run to be greater then or equal to the pause time in ms", done => {
	// arrange
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

test("writeCommand + run => expect command text and output, where output is of type variable, to appear inside the wrapper", done => {
	// arrange
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
test("writeCommand + run => expect command text and output, where output is of type function, to appear inside the wrapper", done => {
	// arrange
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
	// arrange
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
test("writeCommands + run => expect multiple commands to have their text and output written to the wrapper after run", done => {
	// arrange
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
test("writeCommands + run => expect multiple commands with different write speeds to have their text and output written to the wrapper after run", done => {
	// arrange
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
	// arrange
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

test("writeCommand + history + run => add a single command and expect their texts to appear twice", done => {
	// arrange
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
test("writeCommands + history + run => add HISTSIZE - 1 commands, each with unique text, and expect all their texts to appear twice", done => {
	// arrange
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

test("writeCommand + clear + run => expect terminal wrapper text, without environment specified, to be equal to a new empty input line", done => {
	// arrange
	const emptyInputLineWithoutEnvironmentVariable = "$ "
	const testCommand: TerminalCommand = {
		text: "echo foo",
		writeSpeed: 0,
		output: "bar",
	}
	const terminalWithoutEnvironmentVariable = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	// act
	terminalWithoutEnvironmentVariable
		.writeCommand(testCommand)
		.clear(0)
		.run(() => {
			done()
			// assert
			expect(document.getElementById(terminalWithoutEnvironmentVariable.options.wrapperId)?.innerHTML).not.toContain(testCommand.text)
			expect(document.getElementById(terminalWithoutEnvironmentVariable.options.wrapperId)?.innerHTML).not.toContain(testCommand.output)
			expect(document.getElementById(terminalWithoutEnvironmentVariable.options.wrapperId)?.innerHTML).toMatch(emptyInputLineWithoutEnvironmentVariable)
		})
})

test("writeToStdout => should support HTML entities, utf8 characters and emoji's", done => {
	const htmlEntitiesString = "&#180;&#8224;&#174;&#165;&#168;&#169;&#729;&#8747;&#248;&#8230;&#710;&#402;&#8710;&#247;&#8721;&#8482;&#402;&#8710;&#230;&#248;&#960;&#163;&#168;&#402;&#8482;&#101;&#110;&#116;&#163;&#101;&#233;&#115;&#116;"
	const htmlEntitiesStringInUTF8 = "´†®¥¨©˙∫ø…ˆƒ∆÷∑™ƒ∆æøπ£¨ƒ™ent£eést"
	const htmlEmojiString = "⏰☕⚓⚡❗🌃🌄🌔🌠🍍"
	const expectedTerminalText = htmlEntitiesStringInUTF8 + htmlEntitiesStringInUTF8 + htmlEmojiString
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal
		.writeToStdout(htmlEntitiesString, "neutral")
		.writeToStdout(htmlEntitiesStringInUTF8, "neutral")
		.writeToStdout(htmlEmojiString, "neutral")
		.run(() => {
			done()
			expect(terminal.wrapperElement.innerHTML).toContain(expectedTerminalText)
		})
})

test("eraseFromStdout => expect wrapper.innerHTML to not contain the text after erasing it", done => {
	const textToWriteThenErase = "some text to write and then erase"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal
		.writeToStdout(textToWriteThenErase, "neutral")
		.eraseFromStdout(textToWriteThenErase.length, "neutral")
		.run(() => {
			done()

			expect(terminal.wrapperElement.innerHTML).not.toContain(textToWriteThenErase)
		})
})

test("touch => expect filesystem to contain file after touch", done => {
	const fileToCreate = "text.txt"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal.touch(fileToCreate, "neutral").run(() => {
		done()

		expect(terminal.fileSystem.pathExists(fileToCreate)).toBeTruthy()
	})
})

test("mkdir => expect filesystem to contain valid directories, and X amount of errors in the stdout for Y amount of invalid directories", done => {
	const validDirectoriesToCreate = ["a", "a/b", "c"]
	const invalidDirectoriesToCreate = ["A/B/C", "X/Y"]
	const directoriesToCreate = [...validDirectoriesToCreate, ...invalidDirectoriesToCreate].join(" ")
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal.mkdir(directoriesToCreate, "neutral").run(() => {
		done()

		validDirectoriesToCreate.forEach(d => {
			expect(terminal.fileSystem.pathExists(d)).toBeTruthy()
		})
		invalidDirectoriesToCreate.forEach(d => {
			expect(terminal.fileSystem.pathExists(d)).toBeFalsy()
			expect(terminal.wrapperElement.innerHTML).toContain(d)
		})
	})
})

test("useradd => expect filesystem to contain user after useradd and the home directory gets created", done => {
	const userToAdd: FileSystemUser = {
		name: "alice",
		password: "password",
		homeDir: "/alice/",
	}
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal.useradd(userToAdd, "neutral").run(() => {
		done()

		expect(terminal.fileSystem.users.some(u => u.name === userToAdd.name)).toBeTruthy()
		expect(terminal.fileSystem.pathExists(userToAdd.homeDir!)).toBeTruthy()
	})
})

test("cd + pwd => expect string at start of input line to be absolute path when working dir is outside of the current users home directory, and relative to the home directory when inside it", done => {
	const homeCd = "/home/"
	const homeRootCd = "/home/root/"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal
		.cd(homeCd)
		.pwd()
		.cd(homeRootCd)
		.pwd()
		.run(() => {
			done()

			expect(terminal.wrapperElement.innerHTML).toContain(homeCd + "$")
			expect(terminal.wrapperElement.innerHTML).not.toContain(homeRootCd + "$")
			expect(terminal.wrapperElement.innerHTML).toContain("~$")
		})
})

test("vim => expect vim command bar to contain 'filename' and '[New]' when a non existing file gets opened", done => {
	const fileName = "text.txt"
	const expectedNewText = "[New]"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal.vim(fileName).run(() => {
		done()

		expect(terminal.wrapperElement.innerHTML).toContain(fileName)
		expect(terminal.wrapperElement.innerHTML).toContain(expectedNewText)
	})
})

test("vim + vimInsert => expect wrapper element to contain '-- INSERT --' and 'text' and not to contain 'filename'", done => {
	const fileName = "text.txt"
	const textToWrite = "Hello, World!"
	const expectedInsertText = "-- INSERT --"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal
		.vim(fileName)
		.vimInsert(textToWrite)
		.run(() => {
			done()

			expect(terminal.wrapperElement.innerHTML).not.toContain(fileName)
			expect(terminal.wrapperElement.innerHTML).toContain(textToWrite)
			expect(terminal.wrapperElement.innerHTML).toContain(expectedInsertText)
		})
})

test("vim + vimInsert + vimWrite => expect wrapper element to contain 'text' and to contain 'filename' and to contain 'written'", done => {
	const fileName = "text.txt"
	const textToWrite = "Hello, World!"
	const expectedWrittenText = "written"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal
		.vim(fileName)
		.vimInsert(textToWrite)
		.vimWrite()
		.run(() => {
			done()

			expect(terminal.wrapperElement.innerHTML).toContain(textToWrite)
			expect(terminal.wrapperElement.innerHTML).toContain(fileName)
			expect(terminal.wrapperElement.innerHTML).toContain(expectedWrittenText)
		})
})

test("vim + vimInsert + vimWrite => expect filesystem to have file after writing with content", done => {
	const fileName = "text.txt"
	const textToWrite = "Hello, World!"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal
		.vim(fileName)
		.vimInsert(textToWrite)
		.vimWrite()
		.run(() => {
			done()

			expect(terminal.fileSystem.pathExists(fileName)).toBeTruthy()
			expect(terminal.fileSystem.fileHasContent(fileName)).toBeTruthy()
			expect(terminal.fileSystem.getFileContent(fileName)).toBe(textToWrite)
		})
})

test("vim + vimInsert + vimWrite + vimQuit => expect wrapper to contain 'vim' + fileName not to contain written text after quit", done => {
	const fileName = "text.txt"
	const textToWrite = "Hello, World!"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal
		.vim(fileName)
		.vimInsert(textToWrite)
		.vimWrite()
		.vimQuit()
		.run(() => {
			done()

			expect(terminal.wrapperElement.innerHTML).toContain("vim " + fileName)
			expect(terminal.wrapperElement.innerHTML).not.toContain(textToWrite)
		})
})

test("vim + vimInsert + vimWriteQuit => expect wrapper to contain 'vim' + fileName not to contain written text after quit", done => {
	const fileName = "text.txt"
	const textToWrite = "Hello, World!"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal
		.vim(fileName)
		.vimInsert(textToWrite)
		.vimWriteQuit()
		.run(() => {
			done()

			expect(terminal.wrapperElement.innerHTML).toContain("vim " + fileName)
			expect(terminal.wrapperElement.innerHTML).not.toContain(textToWrite)
		})
})

test("touch + clear + ls => expect all files touched to be in the stdout", done => {
	const filesToTouch = "file1 file2 file3 file4 file5"
	const expectedFilesInStdout = filesToTouch.split(" ")
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal
		.touch(filesToTouch, 0)
		.clear(0)
		.ls(0)
		.run(() => {
			done()

			expectedFilesInStdout.forEach(fileToBeExpected => {
				expect(terminal.stdout.element.innerHTML).toContain(fileToBeExpected)
			})
		})
})

test("grep => expect no match when non existing file is used", done => {
	const pattern = /pattern/
	const nonExistingFile = "NON_EXISTING_FILE"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal.grep(pattern, nonExistingFile).run(() => {
		done()
		expect(terminal.stdout.element.innerHTML).not.toContain('<span style="color: brown;">')
	})
})

test("grep => expect no match when non existing file is used", done => {
	const pattern = /pattern/
	const nonExistingDir = "/NON_EXISTING_DIR/"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal.grep(pattern, nonExistingDir).run(() => {
		done()
		expect(terminal.stdout.element.innerHTML).not.toContain('<span style="color: brown;">')
	})
})

test("touch + grep => expect match when existing file is used with content", done => {
	const pattern = /o/
	const existingFile = "foo"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal.touch(existingFile, 0)
	terminal.fileSystem.setFileContent("foo", "foo")
	terminal.grep(pattern, "foo").run(() => {
		done()
		expect(terminal.stdout.element.innerHTML).toContain('<span style="color: brown;">')
	})
})

test("pipeline => expect 'cmd1 | cmd2 | cmd3' to be in stdout innerHTML", done => {
	const commandsToPipe = [
		"cmd1",
		"cmd2",
		() => {
			return "cmd3"
		},
	]
	const expectedText = "cmd1 | cmd2 | cmd3"
	const terminal = new UnixTerminalEmulator({
		wrapperId: randomUUID(),
	} as TerminalEmulatorOptions)

	terminal.pipeline(commandsToPipe).run(() => {
		done()

		expect(terminal.stdout.element.innerHTML).toContain(expectedText)
	})
})
