import StdoutEmulator from "./StdoutEmulator"
import FileSystemEmulator from "./FileSystemEmulator"
import TerminalCommand from "./TerminalCommand"
import TerminalEvent from "./TerminalEvent"
import TerminalEmulatorOptions from "./TerminalEmulatorOptions"

/**
 * Allows the user to create an event sequence that emulates terminal behaviour
 */
export default interface TerminalEmulator {
	/**
	 * @param stdout The stdout for this terminal instance
	 */
	readonly stdout: StdoutEmulator
	/**
	 * @param fileSystem The file system for this terminal instance
	 */
	readonly fileSystem: FileSystemEmulator
	/**
	 * @param historyStack The command history for this terminal instance
	 */
	readonly historyStack: TerminalCommand[]
	/**
	 * @param eventQueue The event queue for this terminal instance
	 */
	readonly eventQueue: TerminalEvent[]
	/**
	 * @param options Default options for every terminal instance
	 * @constant
	 * @default
	 * {
	 * 	wrapperId: "terminal___emulator___wrapper",
	 * 	wrapperCss: "terminal___emulator___wrapper",
	 * 	cursorChar: "|",
	 * 	cursorCss: "terminal___cursor___static",
	 * 	stdoutCss: "termminal___emulator___stdout"
	 * }
	 */
	readonly options: TerminalEmulatorOptions
	/**
	 * @param HISTSIZE The history size for this terminal instance.  
	 * Based on histsize variable in bash: echo $HISTSIZE, see:  
	 * https://stackoverflow.com/questions/19454837/bash-histsize-vs-histfilesize#answer-19454838
	 */
	HISTSIZE: number
	/**
	 * Adds a custom command to the to event queue.
	 * @param {TerminalCommand} command 	The command to add the the queue
	 * @returns {TerminalEmulator} 			The current instance of TerminalEmulator, which enables method chaining.
	 */
	addCommand: (command: TerminalCommand) => TerminalEmulator
	/**
	 * Adds multiple custom commands to the to event queue.
	 * @param {TerminalCommand[]} commands 	The commands to add the the queue
	 * @returns {TerminalEmulator} 			The current instance of TerminalEmulator, which enables method chaining.
	 */
	addCommands: (commands: TerminalCommand[]) => TerminalEmulator
	/**
	 * Adds a pause in the event sequence.
	 * @param {number} ms 					The time to pause for in miliseconds
	 * @returns {TerminalEmulator} 			The current instance of TerminalEmulator, which enables method chaining.
	 */
	pause: (ms: number) => TerminalEmulator
	/**
	 * Emulates the echo command.  
	 * https://ss64.com/bash/echo.html
	 * @param {string} text 						The text to echo
	 * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
	 * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
	 * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
	 */
	echo: (text: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator
	/**
	 * Emulates the history command.  
	 * https://ss64.com/bash/history.html
	 * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
	 * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
	 * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
	 */
	history: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator
	/**
	 * Emulates the clear command.  
	 * https://ss64.com/bash/clear.html
	 * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
	 * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
	 * @returns {TerminalEmulator} 				The current instance of TerminalEmulator, which enables method chaining.
	 */
	clear: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator
	/**
	 * Emulates the mkdir command.  
	 * https://ss64.com/bash/mkdir.html
	 * @param {string} dirNames 					A space delimited string containing all the directories to create
	 * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
	 * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
	 * @returns {TerminalEmulator} 				The current instance of TerminalEmulator, which enables method chaining.
	 */
	mkdir: (dirNames: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator
	/**
	 * Emulates the pwd command.  
	 * https://ss64.com/bash/pwd.html
	 * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
	 * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
	 * @returns {TerminalEmulator} 				The current instance of TerminalEmulator, which enables method chaining.
	 */
	pwd: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator
	/**
	 * Emulates the touch command.  
	 * https://ss64.com/bash/touch.html
	 * @param {string} fileName 					The file to touch
	 * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
	 * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
	 * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
	 */
	touch: (fileName: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator
	/**
	 * Excecutes the created event sequence
	 * @param callback Gets called when the sequence has finished
	 */
	run: (callback: () => void) => void
}
