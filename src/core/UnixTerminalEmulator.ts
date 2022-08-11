import StdoutEmulator from "./UnixStdoutEmulator"
import "../styles.css"
import FileSystemEmulator from "../types/FileSystemEmulator"
import TerminalCommand from "../types/TerminalCommand"
import TerminalEvent from "../types/TerminalEvent"
import TerminalEmulator from "../types/TerminalEmulator"
import TerminalEmulatorOptions from "../types/TerminalEmulatorOptions"
import UnixFileSystemEmulator from "./UnixFileSystemEmulator"
import TextWriter from "./TextWriter"
import FileSystemUser from "../types/FileSystemUser"
import VimEmulator from "../types/VimEmulator"
import UnixVimEmulator from "./UnixVimEmulator"
import UnixStdoutEmulator from "./UnixStdoutEmulator"

// TODO: implement options for every command (check man page on ss64)
// TODO: add support for pipeline commands

/**
 * Emulates a unix terminal by building an event sequence of commands and timings which gets executed when the run method is called.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixTerminalEmulator.UnixTerminalEmulator}
 */
class UnixTerminalEmulator implements TerminalEmulator {
	private writer: TextWriter = new TextWriter()
	private currentEvent: TerminalEvent | undefined

	constructor(options?: TerminalEmulatorOptions) {
		if (options) {
			this.options = {
				...this.options,
				...options,
			}
		}

		if (document.getElementById(this.options.wrapperId) === null) {
			this.wrapperElement = document.createElement("div")
			this.wrapperElement.id = this.options.wrapperId
			document.body.appendChild(this.wrapperElement)
		} else {
			this.wrapperElement = document.getElementById(this.options.wrapperId)!
		}
		if (this.options.wrapperCss.length > 0) this.wrapperElement.classList.add(this.options.wrapperCss)

		this.fileSystem = new UnixFileSystemEmulator(this.options.environment?.user)
		this.stdout = new UnixStdoutEmulator(this.wrapperElement, this.options)
		this.vimEmulator = new UnixVimEmulator(this.options)

		this.writeNewInputLineToStdout(() => {})
	}

	readonly wrapperElement: HTMLElement
	readonly stdout: StdoutEmulator
	readonly vimEmulator: VimEmulator
	readonly fileSystem: FileSystemEmulator
	readonly historyStack: TerminalCommand[] = []
	readonly eventQueue: TerminalEvent[] = []
	readonly options: TerminalEmulatorOptions = {
		wrapperId: "terminal___emulator___wrapper",
		wrapperCss: "terminal___emulator___wrapper",
		cursorChar: "|",
		cursorCss: "terminal___cursor___static",
		stdoutCss: "terminal___emulator___stdout",
		vimCss: "vim___emulator___wrapper",
		vimBarCss: "vim___emulator___bar",
		vimBarLeftCss: "vim___emulator___bar___left",
		vimBarRightCss: "vim___emulator___bar___right",
	}
	HISTSIZE: number = 500

	public writeToStdout = (text: string, writeSpeed: "neutral" | number, pauseAfter?: number): TerminalEmulator => {
		const e: TerminalEvent = {
			fn: callback => this.writer.writeToElement(this.stdout.element, text, writeSpeed, this.stdout.removeCursor, this.stdout.appendCursor, callback),
			fnAfter: callback => {
				callback()
			},
			delayAfter: pauseAfter ? pauseAfter : 0,
		}
		this.eventQueue.push(e)
		return this
	}
	public eraseFromStdout = (n: number, speed: "neutral" | number, pauseAfter?: number): TerminalEmulator => {
		const e: TerminalEvent = {
			fn: callback => this.writer.eraseFromElement(this.stdout.element, n, speed, this.stdout.removeCursor, this.stdout.appendCursor, callback),
			fnAfter: callback => {
				callback()
			},
			delayAfter: pauseAfter ? pauseAfter : 0,
		}
		this.eventQueue.push(e)
		return this
	}
	public writeCommand = (command: TerminalCommand): UnixTerminalEmulator => {
		this.addWriteCommandEvent(command)
		return this
	}
	public writeCommands = (commands: TerminalCommand[]): UnixTerminalEmulator => {
		commands.forEach(command => {
			this.addWriteCommandEvent(command)
		})
		return this
	}
	public pause = (ms: number): UnixTerminalEmulator => {
		const e: TerminalEvent = {
			fn: callback => {
				callback()
			},
			fnAfter: callback => {
				callback()
			},
			delayAfter: ms,
		}
		this.eventQueue.push(e)
		return this
	}
	public echo = (text: string, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent({
			text: "echo " + text,
			writeSpeed: writeSpeed,
			output: text,
			pauseBeforeOutput: pauseBeforeOutput,
		})
		return this
	}
	public history = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent({
			text: "history",
			writeSpeed: writeSpeed,
			output: this.getHistoryOutput,
			pauseBeforeOutput: pauseBeforeOutput,
		})
		return this
	}
	public clear = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent(
			{
				text: "clear",
				writeSpeed: writeSpeed,
				pauseBeforeOutput: pauseBeforeOutput,
			},
			callback => {
				this.stdout.clear()
				this.writeNewInputLineToStdout(callback)
			}
		)
		return this
	}
	public touch = (fileName: string, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent(
			{
				text: "touch " + fileName,
				writeSpeed: writeSpeed,
				pauseBeforeOutput: pauseBeforeOutput,
			},
			callback => {
				this.fileSystem.touch(fileName)
				callback()
			}
		)
		return this
	}
	public mkdir = (dirNames: string, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent({
			text: "mkdir " + dirNames,
			writeSpeed: writeSpeed,
			output: () => {
				var output = ""
				var errors = this.fileSystem.mkdir(dirNames)
				for (var i = 0; i < errors.length; i++) {
					output += errors[i].message
					if (i != errors.length - 1) {
						output = output + "<br>"
					}
				}
				return output
			},
			pauseBeforeOutput: pauseBeforeOutput,
		})
		return this
	}
	public useradd = (user: FileSystemUser, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent({
			text: "useradd " + user.name,
			writeSpeed: writeSpeed,
			output: () => {
				var output = this.fileSystem.useradd(user)
				if (typeof output === "string") {
					return ""
				} else {
					return output.message
				}
			},
			pauseBeforeOutput: pauseBeforeOutput,
		})
		return this
	}
	public pwd = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent({
			text: "pwd",
			writeSpeed: writeSpeed,
			output: this.fileSystem.pwd,
			pauseBeforeOutput: pauseBeforeOutput,
		})
		return this
	}
	public cd = (dir: string, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent({
			text: "cd " + dir,
			writeSpeed: writeSpeed,
			output: () => {
				var output = this.fileSystem.cd(dir)
				if (typeof output === "string") {
					return ""
				} else {
					return output.message
				}
			},
			pauseBeforeOutput: pauseBeforeOutput,
		})
		return this
	}
	public ls = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent(
			{
				text: "ls",
				writeSpeed: writeSpeed,
				output: () => {
					var lsOut = this.fileSystem.ls()
					if (lsOut.length === 0) {
						return ""
					}

					var output = '<table style="table-layout: fixed;">'
					output = output + "<tr>"
					for (var i = 0; i < lsOut.length; i++) {
						output = output + '<td style="padding: 0;">' + lsOut[i] + "&nbsp;</td>"
						if (i > 0 && (i + 1) % 12 === 0) {
							output = output + "</tr><tr>"
						}
					}
					output = output + "</tr></table>"
					return output
				},
				pauseBeforeOutput: pauseBeforeOutput,
			},
			callback => {
				this.removeLastLineBreakFromStdout(() => this.writeNewInputLineToStdout(callback))
			}
		)
		return this
	}
	public vim = (fileName: string, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent(
			{
				text: "vim " + fileName,
				writeSpeed: writeSpeed,
				pauseBeforeOutput: pauseBeforeOutput,
			},
			callback => {
				this.vimEmulator.openFile(this.wrapperElement, this.stdout, this.fileSystem, fileName)
				callback()
			}
		)
		return this
	}
	public vimInsert = (text: string, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		const e: TerminalEvent = {
			fn: callback => {
				this.vimEmulator.insert(this.stdout, this.fileSystem, text, writeSpeed, callback)
			},
			fnAfter: callback => callback(),
			delayAfter: pauseBeforeOutput ? pauseBeforeOutput : 0,
		}
		this.eventQueue.push(e)
		return this
	}
	public vimWrite = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		pauseBeforeOutput = pauseBeforeOutput ? pauseBeforeOutput : 0
		const e: TerminalEvent = {
			fn: callback => {
				this.vimEmulator.write(this.stdout, this.fileSystem, writeSpeed, pauseBeforeOutput!, callback)
			},
			fnAfter: callback => callback(),
			delayAfter: 0,
		}
		this.eventQueue.push(e)
		return this
	}
	public vimQuit = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		pauseBeforeOutput = pauseBeforeOutput ? pauseBeforeOutput : 0
		const e: TerminalEvent = {
			fn: callback => {
				this.vimEmulator.quit(this.stdout, this.fileSystem, writeSpeed, pauseBeforeOutput!, callback)
			},
			fnAfter: callback => callback(),
			delayAfter: 0,
		}
		this.eventQueue.push(e)
		return this
	}
	public vimWriteQuit = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		pauseBeforeOutput = pauseBeforeOutput ? pauseBeforeOutput : 0
		const e: TerminalEvent = {
			fn: callback => {
				this.vimEmulator.writeQuit(this.stdout, this.fileSystem, writeSpeed, pauseBeforeOutput!, callback)
			},
			fnAfter: callback => callback(),
			delayAfter: 0,
		}
		this.eventQueue.push(e)
		return this
	}
	public grep = (pattern: RegExp, file: string, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		var stringPattern = pattern.toString()
		stringPattern = stringPattern.substring(1, stringPattern.lastIndexOf("/"))
		this.addWriteCommandEvent({
			text: `grep ${stringPattern} ${file}`,
			writeSpeed: writeSpeed,
			output: () => {
				var output = ""
				if (!this.fileSystem.pathExists(file)) {
					output = `grep: ${file}: No such file or directory`
				} else if (this.fileSystem.isDirectory(file)) {
					output = `grep: ${file}: Is a directory`
				} else {
					var fileContent = this.fileSystem.getFileContent(file)
					if (typeof fileContent === "string") {
						pattern = new RegExp('('+stringPattern+')' , pattern.flags + 'gm')
						output = fileContent.replace(pattern, '<span style="color: brown;">$1</span>').replace("\n", "<br>")
					} else {
						output = fileContent.message
					}
				}
				return output
			},
			pauseBeforeOutput: pauseBeforeOutput,
		})
		return this
	}
	public pipeline = (commands: Array<(() => string) | string>, writeSpeed: "neutral" | number = "neutral", output?: string, pauseBeforeOutput?: number): UnixTerminalEmulator => {
		var text: string[] = []
		for (var i = 0; i < commands.length; i++) {
			var nextCmd = commands[i]
			if (typeof nextCmd === "string") {
				text.push(nextCmd)
			} else {
				text.push(nextCmd())
			}
		}
		this.addWriteCommandEvent({
			text: text.join(" | "),
			writeSpeed: writeSpeed,
			output: output,
			pauseBeforeOutput: pauseBeforeOutput
		})
		return this
	}
	public run = (callback?: () => void) => {
		this.currentEvent = this.eventQueue.shift()
		if (this.currentEvent !== undefined) {
			this.currentEvent.fn(() => {
				this.currentEvent!.fnAfter(() => {
					setTimeout(() => {
						this.run(callback)
					}, this.currentEvent!.delayAfter)
				})
			})
		} else {
			if (callback !== undefined) {
				callback()
			}
		}
	}

	/**
	 * Adds an event to the event queue which writes the command and its output if specified to the stdout.
	 * @param command the command to write
	 * @param fnAfter
	 */
	private addWriteCommandEvent = (command: TerminalCommand, fnAfter?: (callback: () => void) => void) => {
		// write command text
		const e: TerminalEvent = {
			fn: callback => {
				this.historyStack.push(command)
				this.writer.writeToElement(this.stdout.element, command.text, command.writeSpeed, this.stdout.removeCursor, this.stdout.appendCursor, () => {
					this.writeLineBreakToStdout(() => {
						this.stdout.removeCursor()
						var cmdOut = ""
						if (typeof command.output === "function") cmdOut = command.output()
						else if (typeof command.output === "string") cmdOut = command.output
						if (command.output !== undefined && cmdOut.length > 0) {
							// write command output
							this.writer.writeToElement(this.stdout.element, cmdOut, 0, undefined, undefined, () => {
								this.writeLineBreakToStdout(() => {
									this.writeNewInputLineToStdout(() => {
										this.stdout.appendCursor()
										callback()
									})
								})
							})
						} else {
							this.writeNewInputLineToStdout(() => {
								this.stdout.appendCursor()
								callback()
							})
						}
					})
				})
			},
			fnAfter: fnAfter
				? callback => {
						fnAfter(callback)
				  }
				: callback => {
						callback()
				  },
			delayAfter: 0,
		}
		this.eventQueue.push(e)
	}
	/**
	 * Gets the output for the history command
	 * @returns a string to be used as the history commands output
	 */
	private getHistoryOutput = () => {
		var output = [] as string[]
		var j = 0
		for (var i = this.historyStack.length; i > 0; i--) {
			var newOutputLine = ""

			// leading spaces are based on decimals
			// single decimal = 4 spaces
			// double decimal = 3 spaces
			// etc...
			if (i < 10) {
				newOutputLine += "&nbsp;&nbsp;&nbsp;&nbsp;"
			} else if (i < 100) {
				newOutputLine += "&nbsp;&nbsp;&nbsp;"
			} else if (i < 1000) {
				newOutputLine += "&nbsp;&nbsp;"
			} else if (i < 10000) {
				newOutputLine += "&nbsp;"
			}

			newOutputLine += `${i}&nbsp;&nbsp;${this.historyStack[i - 1].text}`
			output.push(newOutputLine)

			j++
			if (j >= this.HISTSIZE) break
		}
		return output.reverse().join("<br />")
	}
	/**
	 * Writes a complete new empty input line to stdout:
	 * ``` "username@hostname:~$ " ```
	 *
	 * Removes the cursor before and appends it afterwards
	 */
	private writeNewInputLineToStdout = (callback: () => void) => {
		this.stdout.removeCursor()
		var envTxt = ""
		if (this.options.environment !== undefined && this.options.environment.hostname.length > 0 && this.options.environment.user.name.length > 0) {
			envTxt = this.options.environment.user.name + "@" + this.options.environment.hostname + ":"
		}
		this.writer.writeToElement(this.stdout.element, envTxt, 0, undefined, undefined, () => {
			this.writer.writeToElement(this.stdout.element, this.fileSystem.getCurrentDirectory(), 0, undefined, undefined, () => {
				this.writer.writeToElement(this.stdout.element, "$ ", 0, undefined, this.stdout.appendCursor, callback)
			})
		})
	}
	/**
	 * Writes "<br>" to the stdout
	 */
	private writeLineBreakToStdout = (callback: () => void) => {
		this.writer.writeToElement(this.stdout.element, "<br>", 0, this.stdout.removeCursor, this.stdout.appendCursor, callback)
	}

	private removeLastLineBreakFromStdout = (callback: () => void) => {
		this.stdout.removeCursor()
		this.stdout.element.innerHTML = this.stdout.element.innerHTML.substring(0, this.stdout.element.innerHTML.lastIndexOf("<br>"))
		this.stdout.appendCursor()
		callback()
	}
}

export default UnixTerminalEmulator
