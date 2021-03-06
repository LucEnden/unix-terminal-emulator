import { TerminalCommand, TerminalOptions, TerminalEvent } from "./interfaces"
import "./styles.css"

// TODO: add SS64 links to every command jsdoc

/**
 * Emulates a unix terminal by typing out commands and there specified outputs.
 * Allows you to build an event sequence of commands and timings which gets excecuted when the run method is called.
 *
 * {@link https://github.com/LucEnden/unix-terminal-emulator}
 */
class UnixTerminalEmulator {
	/**
	 * Contains all commands executed so far by run.
	 */
	private readonly historyStack = [] as Array<TerminalCommand>
	/**
	 * Contains all events to be executed by run.
	 */
	private readonly eventQueue = [] as Array<TerminalEvent>
	/**
	 * Used in run to determine if there are any events left to be executed.
	 */
	private currentEvent: TerminalEvent | undefined

	/**
	 * Default values for TerminalOptions.
	 */
	private options: TerminalOptions = {
		wrapperId: "terminal___emulator___wrapper",
		wrapperClassName: "terminal___emulator___wrapper",
		cursor: "|",
		cursorId: "terminal___emulator___cursor",
		cursorClassName: "terminal___emulator___cursor",
		cursorAnimation: "static",
		enviroment: undefined,
	}
	/**
	 * The HTML element to which all text should be written to.
	 */
	private wrapperElement: HTMLElement
	/**
	 * The HTML element that acts as the cursor
	 */
	private cursorElement: HTMLElement

	constructor(options?: TerminalOptions) {
		if (options) {
			this.options = {
				...this.options,
				...options,
			}
		}

		var wrapper = document.getElementById(this.options.wrapperId!)
		if (wrapper === null) {
			wrapper = document.createElement("div")
			wrapper.id = this.options.wrapperId!
		}
		if (this.options.wrapperClassName!.length > 0) {
			wrapper.classList.add(this.options.wrapperClassName!)
		}
		this.wrapperElement = wrapper
		document.body.appendChild(this.wrapperElement)

		this.cursorElement = document.createElement("span")
		this.cursorElement.id = this.options.cursorId!
		this.cursorElement.innerText = this.options.cursor!
		switch (this.options.cursorAnimation) {
			case "fluid":
				this.cursorElement.classList.add("terminal___cursor___fluid")
				break
			case "static":
				this.cursorElement.classList.add("terminal___cursor___static")
				break
			case undefined:
				this.cursorElement.classList.add("terminal___cursor___none")
				break
		}
		this.cursorElement.classList.add(this.options.cursorClassName!)

		this.writeNewInputLineToStdout()
		this.appendCursor()
	}

	/**
	 * Based on histsize variable in bash: echo $HISTSIZE
	 *
	 * see: https://stackoverflow.com/questions/19454837/bash-histsize-vs-histfilesize#answer-19454838
	 */
	public HISTSIZE = 500

	/**
	 * Adds a command to the to queue.
	 * @param {TerminalCommand} command 	The command to add the the queue
	 * @returns {UnixTerminalEmulator} 		The current instance of UnixTerminalEmulator
	 */
	public addCommand = (command: TerminalCommand): UnixTerminalEmulator => {
		this.eventQueue.push({
			delayAfter: 0,
			command: command,
		} as TerminalEvent)
		return this
	}
	/**
	 * Adds multiple commands to the to queue.
	 * @param {TerminalCommand[]} commands 	The commands to add the the queue
	 * @returns {UnixTerminalEmulator} 		The current instance of UnixTerminalEmulator
	 */
	public addCommands = (commands: TerminalCommand[]): UnixTerminalEmulator => {
		commands.forEach((c) => {
			this.eventQueue.push({
				delayAfter: 0,
				command: c,
			} as TerminalEvent)
		})
		return this
	}

	/**
	 * Adds a pause in the event sequence.
	 * @param {number} ms The time to pause for in miliseconds
	 * @returns {UnixTerminalEmulator} The current instance of UnixTerminalEmulator
	 */
	public pause = (ms: number): UnixTerminalEmulator => {
		this.eventQueue.push({
			delayAfter: ms,
		} as TerminalEvent)
		return this
	}

	/**
	 * Emulates the echo command.
	 *
	 * @param {string} text 						The text to echo
	 * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
	 * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
	 * @example
	 * echo("Hello, World") =>
	 * $ echo Hello, World!
	 * Hello, World!
	 * @returns {UnixTerminalEmulator} The current instance of UnixTerminalEmulator
	 */
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

	/**
	 * Emulates the history command.
	 *
	 * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
	 * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
	 * @returns {UnixTerminalEmulator} 				The current instance of UnixTerminalEmulator
	 */
	public history = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.eventQueue.push({
			command: {
				text: "history",
				writeSpeed: writeSpeed,
				output: this.getHistoryOutput,
				pauseBeforeOutput: pauseBeforeOutput
			},
		} as TerminalEvent)
		return this
	}
	private getHistoryOutput = () => {
		var output = [] as string[]
		var j = 0;
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
		return output.reverse().join("<br />");
	}

	/**
	 * Emulates the clear command.
	 *
	 * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
	 * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
	 * @returns {UnixTerminalEmulator} 				The current instance of UnixTerminalEmulator
	 */
	public clear = (writeSpeed: "neutral" | number = "neutral", pauseBeforeOutput?: number): UnixTerminalEmulator => {
		this.eventQueue.push({
			command: {
				text: "clear",
				writeSpeed: writeSpeed,
				pauseBeforeOutput: pauseBeforeOutput
			},
			logicAfter: () => {
				this.wrapperElement.innerHTML = ""
				this.writeNewInputLineToStdout()
				this.appendCursor()
			}
		} as TerminalEvent)
		return this
	}

	// todo: add support for pipeline commands
	// // todo: implement
	// public touch = (fileName: string) => {
	// 	return this
	// }
	// // todo: implement
	// public mkdir = (dirName: string) => {
	// 	return this
	// }
	// // todo: implement
	// public pwd = () => {}
	// // todo: implement
	// public vim = (fileName: string, fileContentToType: string[]) => {
	// 	return this
	// }

	/**
	 * Excecutes the created event sequence
	 * @param callback Gets called when the sequence has finished
	 */
	public run = (callback?: () => void) => {
		// If there are events left in the queue, continue running.
		this.currentEvent = this.eventQueue.shift()
		if (this.currentEvent !== undefined) {
			if (this.currentEvent.command !== undefined) {
				// Add command to history stack, then start writing the command text to the stdout
				this.historyStack.push(this.currentEvent.command)
				this.writeToStdout(this.currentEvent.command.text, this.currentEvent.command.writeSpeed, () => {
					// After command text was written, check if the command has an output...
					if (this.currentEvent!.command!.output !== undefined) {
						var newOutput = ""
						if (typeof this.currentEvent!.command!.output === "function") {
							newOutput = this.currentEvent!.command!.output()
						} else {
							newOutput = this.currentEvent!.command!.output
						}
						setTimeout(() => {
							this.removeCursor()
							this.writeLineBreakToStdout()
							this.writeToStdout(newOutput, 0, () => {
								// After command output was written...
								this.writeLineBreakToStdout()
								this.writeNewInputLineToStdout()
								if (this.currentEvent!.logicAfter !== undefined) {
									this.currentEvent!.logicAfter()
								}
								this.appendCursor()
								setTimeout(() => {
									this.run(callback)
								}, this.currentEvent!.delayAfter)
							})
						}, this.currentEvent!.command!.pauseBeforeOutput)
					} else {
						this.removeCursor()
						this.writeLineBreakToStdout()
						this.writeNewInputLineToStdout()
						this.appendCursor()
						if (this.currentEvent!.logicAfter !== undefined) {
							this.currentEvent!.logicAfter()
						}
						setTimeout(() => {
							this.run(callback)
						}, this.currentEvent!.delayAfter)
					}
				})
			} else {
				// If the current events command is undefined, continue running...
				setTimeout(() => {
					this.run(callback)
				}, this.currentEvent!.delayAfter)
			}
		} else {
			// If no event is left in the queue, run calback...
			if (callback !== undefined) {
				callback()
			}
		}
	}

	/**
	 * Removes the cursor from the wrapper document
	 */
	private removeCursor = () => {
		this.cursorElement.remove()
	}
	/**
	 * Appends the cursor element to the wrapper element
	 */
	private appendCursor = () => {
		this.wrapperElement.appendChild(this.cursorElement)
	}

	/**
	 * Gets a random integer in the range from min to max, inclusif
	 * @param {Number} min Minimum number to generate
	 * @param {Number} max Maximum number to generate
	 * @returns random integer in the range from min to max, inclusif
	 */
	private getRandomIntegerInRange = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	/**
	 * Uses:  
	 * ```this.writeEnviromentLineToStdout``` and ```this.writeInputLineStartToStdout```
	 * 
	 * To write a complete new empty input line to stdout
	 */
	private writeNewInputLineToStdout = () => {
		this.writeEnviromentLineToStdout()
		this.writeInputLineStartToStdout()
	}
	/**
	 * If this.enviroment is not undefined, write the enviroment line ("username@hostname:") to the stdout
	 */
	private writeEnviromentLineToStdout = () => {
		if (this.options.enviroment !== undefined && this.options.enviroment.hostname.length > 0 && this.options.enviroment.username.length > 0) {
			this.wrapperElement.innerHTML += this.options.enviroment.username + "@" + this.options.enviroment.hostname + ":"
		}
	}
	/**
	 * Writes "$ " to the stdout
	 */
	private writeInputLineStartToStdout = () => {
		this.wrapperElement.innerHTML += "$ "
	}
	/**
	 * Writes "\n" (\<br />) to the stdout
	 */
	private writeLineBreakToStdout = () => {
		this.wrapperElement.innerHTML += "<br />"
	}
	/**
	 * Writes the specified text to the terminal wrapper.
	 *
	 * If speed === 0, it will remove the cursor from the wrapper.
	 * If speed > 0, the cursor will remove before and appended after every character.
	 * @param text text to write to stdout
	 * @param speed speed at which each character is written to stdout
	 * @param callback gets excecuted when writing to stdout has finished
	 * @param i used for recursion purposes
	 */
	private writeToStdout = (text: string, speed: "neutral" | number, callback: () => void, i: number = 0) => {
		if (speed === 0) {
			this.removeCursor()
			this.wrapperElement.innerHTML += text
			callback()
		} else {
			if (i < text.length) {
				this.removeCursor()
				this.wrapperElement.innerHTML += text[i]
				this.appendCursor()
				i++
				if (speed === "neutral") {
					setTimeout(() => this.writeToStdout(text, speed, callback, i), this.getRandomIntegerInRange(80, 120))
				} else {
					setTimeout(() => this.writeToStdout(text, speed, callback, i), speed)
				}
			} else {
				callback()
			}
		}
	}
}

export default UnixTerminalEmulator
