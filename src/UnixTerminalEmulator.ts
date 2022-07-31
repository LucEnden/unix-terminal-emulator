import StdoutEmulator from "./UnixStdoutEmulator"
import "./styles.css"
import FileSystemEmulator from "./types/FileSystemEmulator"
import TerminalCommand from "./types/TerminalCommand"
import TerminalEvent from "./types/TerminalEvent"
import TerminalEmulator from "./types/TerminalEmulator"
import TerminalEmulatorOptions from "./types/TerminalEmulatorOptions"
import UnixFileSystemEmulator from "./UnixFileSystemEmulator"
import TextWriter from "./TextWriter"
import FileSystemUser from "./types/FileSystemUser"

// TODO: implement options for every command (check man page on ss64)
// TODO: add support for pipeline commands

/**
 * Emulates a unix terminal by building an event sequence of commands and timings which gets excecuted when the run method is called.
 *
 * {@link https://github.com/LucEnden/unix-terminal-emulator}
 */
class UnixTerminalEmulator implements TerminalEmulator {
	private writer: TextWriter = new TextWriter()
	private wrapperElement: HTMLElement
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

		this.stdout = new StdoutEmulator(this.wrapperElement, this.options)
		this.fileSystem = new UnixFileSystemEmulator(this.options.enviroment?.user)

		this.writeNewInputLineToStdout(() => {})
	}

	readonly stdout: StdoutEmulator
	readonly fileSystem: FileSystemEmulator
	readonly historyStack: TerminalCommand[] = []
	readonly eventQueue: TerminalEvent[] = []
	readonly options: TerminalEmulatorOptions = {
		wrapperId: "terminal___emulator___wrapper",
		wrapperCss: "terminal___emulator___wrapper",
		cursorChar: "|",
		cursorCss: "terminal___cursor___static",
		stdoutCss: "termminal___emulator___stdout",
	}
	HISTSIZE: number = 500

	public addCommand = (command: TerminalCommand): UnixTerminalEmulator => {
		this.addWriteCommandEvent(command)
		return this
	}
	public addCommands = (commands: TerminalCommand[]): UnixTerminalEmulator => {
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
		this.addWriteCommandEvent({
			text: "clear",
			writeSpeed: writeSpeed,
			pauseBeforeOutput: pauseBeforeOutput
		}, (callback) => {
			this.stdout.clear()
			this.writeNewInputLineToStdout(callback)
		})
		return this
	}
	public touch = (fileName: string, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent({
			text: "touch " + fileName,
			writeSpeed: writeSpeed,
			pauseBeforeOutput: pauseBeforeOutput,
		})
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
					return output
				} else {
					return output.message
				}
			},
			pauseBeforeOutput: pauseBeforeOutput
		})
		return this
	}
	public pwd = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.addWriteCommandEvent({
			text: "pwd",
			writeSpeed: writeSpeed,
			output: () => {
				return this.fileSystem.pwd()
			},
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
					return output
				} else {
					return output.message
				}
			},
			pauseBeforeOutput: pauseBeforeOutput,
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

	// /**
	//  * todo: implement
	//  * @param fileName
	//  * @param fileContentToType
	//  * @returns
	//  */
	// public vim = (fileName: string, fileContentToType: string[]) => {
	// 	return this
	// }

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
						// write command output
						this.stdout.removeCursor()
						var cmdOut = ""
						if (typeof command.output === "function") cmdOut = command.output()
						else if (typeof command.output === "string") cmdOut = command.output
						this.writer.writeToElement(this.stdout.element, cmdOut, 0, undefined, undefined, () => {
							this.writeLineBreakToStdout(() => {
								this.writeNewInputLineToStdout(() => {
									this.stdout.appendCursor()
									callback()
								})
							})
						})
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
		if (this.options.enviroment !== undefined && this.options.enviroment.hostname.length > 0 && this.options.enviroment.user.name.length > 0) {
			envTxt = this.options.enviroment.user.name + "@" + this.options.enviroment.hostname + ":"
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
}

export default UnixTerminalEmulator
