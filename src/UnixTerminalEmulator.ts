import StdoutEmulator from "./UnixStdoutEmulator"
import "./styles.css"
import FileSystemEmulator from "./types/FileSystemEmulator"
import TerminalCommand from "./types/TerminalCommand"
import TerminalEvent from "./types/TerminalEvent"
import TerminalEmulator from "./types/TerminalEmulator"
import TerminalEmulatorOptions from "./types/TerminalEmulatorOptions"
import UnixFileSystemEmulator from "./UnixFileSystemEmulator"

// TODO: add SS64 links to every command method jsdoc
// TODO: implement options for every command (check man page on ss64)
// TODO: add support for pipeline commands

/**
 * Emulates a unix terminal by building an event sequence of commands and timings which gets excecuted when the run method is called.
 *
 * {@link https://github.com/LucEnden/unix-terminal-emulator}
 */
class UnixTerminalEmulator implements TerminalEmulator {
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

		this.writeNewInputLineToStdout()
	}

	public addCommand = (command: TerminalCommand): UnixTerminalEmulator => {
		const newEvent: TerminalEvent = {
			command: command,
			delayAfter: 0,
		}
		this.eventQueue.push(newEvent)
		return this
	}
	public addCommands = (commands: TerminalCommand[]): UnixTerminalEmulator => {
		commands.forEach(c => {
			const newEvent: TerminalEvent = {
				command: c,
				delayAfter: 0,
			}
			this.eventQueue.push(newEvent)
		})
		return this
	}
	public pause = (ms: number): UnixTerminalEmulator => {
		this.eventQueue.push({
			delayAfter: ms,
		} as TerminalEvent)
		return this
	}
	public echo = (text: string, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.eventQueue.push({
			command: {
				text: "echo " + text,
				writeSpeed: writeSpeed,
				output: text,
				pauseBeforeOutput: pauseBeforeOutput,
			},
		} as TerminalEvent)
		return this
	}
	public history = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.eventQueue.push({
			command: {
				text: "history",
				writeSpeed: writeSpeed,
				output: this.getHistoryOutput,
				pauseBeforeOutput: pauseBeforeOutput,
			},
		} as TerminalEvent)
		return this
	}
	public clear = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.eventQueue.push({
			command: {
				text: "clear",
				writeSpeed: writeSpeed,
				pauseBeforeOutput: pauseBeforeOutput,
			},
			logicAfter: () => {
				this.stdout.clear()
				this.writeNewInputLineToStdout()
			},
		} as TerminalEvent)
		return this
	}
	public mkdir = (dirNames: string, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.eventQueue.push({
			command: {
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
			},
		} as TerminalEvent)
		return this
	}
	public pwd = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.eventQueue.push({
			command: {
				text: "pwd",
				writeSpeed: writeSpeed,
				output: () => {
					return this.fileSystem.pwd()
				},
				pauseBeforeOutput: pauseBeforeOutput,
			},
		} as TerminalEvent)
		return this
	}
	public touch = (fileName: string, writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.eventQueue.push({
			command: {
				text: "touch " + fileName,
				writeSpeed: writeSpeed,
				pauseBeforeOutput: pauseBeforeOutput,
			},
		} as TerminalEvent)
		return this
	}
	public run = (callback?: () => void) => {
		// If there are events left in the queue, continue running.
		this.currentEvent = this.eventQueue.shift()
		if (this.currentEvent !== undefined) {
			if (this.currentEvent.command !== undefined) {
				// Add command to history stack, then start writing the command text to the stdout
				this.historyStack.push(this.currentEvent.command)
				this.stdout.write(this.currentEvent.command.text, this.currentEvent.command.writeSpeed, () => {
					// After command text was written, check if the command has an output...
					if (this.currentEvent!.command!.output !== undefined) {
						var newOutput = ""
						if (typeof this.currentEvent!.command!.output === "function") {
							newOutput = this.currentEvent!.command!.output()
						} else {
							newOutput = this.currentEvent!.command!.output
						}
						setTimeout(() => {
							this.writeLineBreakToStdout(() => {
								this.stdout.write(newOutput, 0, () => {
									// After command output was written...
									this.writeLineBreakToStdout(() => {
										this.writeNewInputLineToStdout(() => {
											if (this.currentEvent!.logicAfter !== undefined) {
												this.currentEvent!.logicAfter()
											}
											setTimeout(() => {
												this.run(callback)
											}, this.currentEvent!.delayAfter)
										})
									})
								})
							})
						}, this.currentEvent!.command!.pauseBeforeOutput)
					} else {
						this.writeLineBreakToStdout(() => {
							this.writeNewInputLineToStdout(() => {
								if (this.currentEvent!.logicAfter !== undefined) {
									this.currentEvent!.logicAfter()
								}
								setTimeout(() => {
									this.run(callback)
								}, this.currentEvent!.delayAfter)
							})
						})
					}
				})
			} else {
				// If the current events command is undefined, continue running...
				setTimeout(() => {
					this.run(callback)
				}, this.currentEvent.delayAfter)
			}
		} else {
			// If no event is left in the queue, run calback...
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
	 * Uses:
	 * ```
		this.writeEnviromentLineToStdout()
		this.writeRelativeWorkingDirectoryToStdout()
		this.writeInputLineStartToStdout()
	 * ```
	 *
	 * to write a complete new empty input line to stdout:  
	 * ``` "username@hostname:~$ " ```
	 *
	 * Also removes before and appends the cursor afterwards
	 */
	private writeNewInputLineToStdout = (callback?: () => void) => {
		this.stdout.removeCursor()
		this.writeEnviromentLineToStdout(() => {
			this.writeRelativeWorkingDirectoryToStdout(() => {
				this.writeInputLineStartToStdout(() => {
					this.stdout.appendCursor()
					if (callback !== undefined) {
						callback()
					}
				})
			})
		})
	}
	/**
	 * If this.enviroment is not undefined, write the enviroment line ("username@hostname:") to the stdout
	 */
	private writeEnviromentLineToStdout = (callback: () => void) => {
		if (this.options.enviroment !== undefined && this.options.enviroment.hostname.length > 0 && this.options.enviroment.user.name.length > 0) {
			this.stdout.write(this.options.enviroment.user.name + "@" + this.options.enviroment.hostname + ":", 0, callback)
		} else {
			callback()
		}
	}
	/**
	 * Writes ```this.fileSystem.GetCurrentDirectory()``` to the stdout
	 */
	private writeRelativeWorkingDirectoryToStdout = (callback: () => void) => {
		this.stdout.write(this.fileSystem.getCurrentDirectory(), 0, callback)
	}
	/**
	 * Writes "$ " to the stdout
	 */
	private writeInputLineStartToStdout = (callback: () => void) => {
		this.stdout.write("$ ", 0, callback)
	}
	/**
	 * Writes "\n" (\<br />) to the stdout
	 */
	private writeLineBreakToStdout = (callback: () => void) => {
		this.stdout.write("<br>", 0, callback)
	}
}

export default UnixTerminalEmulator
