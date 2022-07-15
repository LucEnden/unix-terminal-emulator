import { TerminalCommand, TerminalOptions, TerminalEvent } from "./interfaces"
import "./styles.css"

/**
 * Emulates a unix terminal by typing out commands and there specified outputs.
 * Comes with some basic unix commands out of the box, and a few methods for customization.
 */
class UnixTerminalEmulator {
	// internals
	private readonly historyStack = [] as Array<TerminalCommand>
	private readonly eventQueue = [] as Array<TerminalEvent>
	private currentEvent: TerminalEvent | undefined

	private options: TerminalOptions = {
		wrapperId: "terminal___emulator___wrapper",
		wrapperClassName: "terminal___emulator___wrapper",
		cursor: "|",
		cursorId: "terminal___emulator___cursor",
		cursorClassName: "terminal___emulator___cursor",
		cursorAnimation: "fluid",
		enviroment: undefined,
	}
	private wrapperElement: HTMLElement
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
			if (this.options.wrapperClassName!.length > 0) {
				wrapper.classList.add(this.options.wrapperClassName!)
			}
			this.wrapperElement = wrapper
			document.body.appendChild(this.wrapperElement)
		} else {
			this.wrapperElement = wrapper
		}

		this.cursorElement = document.createElement("span")
		this.cursorElement.id = this.options.cursorId!
		this.cursorElement.innerText = this.options.cursor!
		this.cursorElement.classList.add(this.options.cursorClassName!)
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

		this.writeEnviromentLineToStdout()
		this.writeInputLineStartToStdout()
		this.appendCursor()
	}

	public addCommand = (command: TerminalCommand) => {
		this.eventQueue.push({
			delayAfter: 0,
			command: command,
		} as TerminalEvent)
		return this
	}
	public addCommands = (commands: TerminalCommand[]) => {
		commands.forEach((c) => {
			this.eventQueue.push({
				delayAfter: 0,
				command: c,
			} as TerminalEvent)
		})
		return this
	}

	public pause = (ms: number) => {
		this.eventQueue.push({
			delayAfter: ms,
		} as TerminalEvent)
		return this
	}

	// todo: implement
	public echo = (text: string) => {
		return this
	}
	// todo: implement
	public touch = (fileName: string) => {
		return this
	}
	// todo: implement
	public mkdir = (dirName: string) => {
		return this
	}
	// todo: implement
	public history = () => {
		return this
	}
	// todo: implement
	public clear = () => {
		return this
	}
	// todo: implement
	public vim = (fileName: string, fileContentToType: string[]) => {
		return this
	}

	/**
	 * Excecutes the command sequence
	 * @param callback Gets called when sequence has finished
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
						/* istanbul ignore next */
						setTimeout(() => {
							this.removeCursor()
							this.writeLineBreakToStdout()
							this.writeToStdout(this.currentEvent!.command!.output!, 0, () => {
								// After command output was written...
								this.writeLineBreakToStdout()
								this.writeEnviromentLineToStdout()
								this.writeInputLineStartToStdout()
								/* istanbul ignore next */
								setTimeout(() => {
									this.appendCursor()
									this.run(callback)
								}, this.currentEvent!.delayAfter)
							})
						}, this.currentEvent!.command!.pauseBeforeOutput)
					} else {
						this.writeLineBreakToStdout()
						this.writeEnviromentLineToStdout()
						this.writeInputLineStartToStdout()
						/* istanbul ignore next */
						setTimeout(() => this.run(callback), this.currentEvent!.delayAfter)
					}
				})
			} else {
				// If the current events command is undefined, continue running...
				/* istanbul ignore next */
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

	private removeCursor = () => {
		this.cursorElement.remove()
	}
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
	 * If this.enviroment is not undefined, write "username@hostname:" to the stdout
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
					/* istanbul ignore next */
					setTimeout(() => this.writeToStdout(text, speed, callback, i), this.getRandomIntegerInRange(80, 120))
				} else {
					/* istanbul ignore next */
					setTimeout(() => this.writeToStdout(text, speed, callback, i), speed)
				}
			} else /* istanbul ignore next */ {
				callback()
			}
		}
	}
}

export default UnixTerminalEmulator
