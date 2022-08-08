import StdoutEmulator from "./StdoutEmulator";
import FileSystemEmulator from "./FileSystemEmulator";
import TerminalCommand from "./TerminalCommand";
import TerminalEvent from "./TerminalEvent";
import TerminalEmulatorOptions from "./TerminalEmulatorOptions";
import FileSystemUser from "./FileSystemUser";
import VimEmulator from "./VimEmulator";
/**
 * Allows the user to create an event sequence that emulates terminal behaviour
 */
export default interface TerminalEmulator {
    /**
     * @param wrapperElement The wrapper element for this terminal instance. If it doesnt already exist, it will be created and appended to the body.
     */
    readonly wrapperElement: HTMLElement;
    /**
     * @param stdout The stdout for this terminal instance
     */
    readonly stdout: StdoutEmulator;
    /**
     * @param vimEmulator The vim emulator for this terminal instance
     */
    readonly vimEmulator: VimEmulator;
    /**
     * @param fileSystem The file system for this terminal instance
     */
    readonly fileSystem: FileSystemEmulator;
    /**
     * @param historyStack The command history for this terminal instance
     */
    readonly historyStack: TerminalCommand[];
    /**
     * @param eventQueue The event queue for this terminal instance
     */
    readonly eventQueue: TerminalEvent[];
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
    readonly options: TerminalEmulatorOptions;
    /**
     * @param HISTSIZE The history size for this terminal instance.
     * Based on histsize variable in bash: echo $HISTSIZE, see:
     * https://stackoverflow.com/questions/19454837/bash-histsize-vs-histfilesize#answer-19454838
     */
    HISTSIZE: number;
    /**
     * Adds a custom text writing event to the event queue.
     * Note: formated HTML will work, but only if the ```writeSpeed === 0```
     * @param {string} text 					The text to write to the stdout element
     * @param {"neutral"|number} writeSpeed 	The speed at which to write each character
     * @param {number|undefined} pauseAfter 	The time to pause after writing all charecters
     * @returns {TerminalEmulator} 				The current instance of TerminalEmulator, which enables method chaining.
     */
    writeToStdout: (text: string, writeSpeed: "neutral" | number, pauseAfter?: number) => TerminalEmulator;
    /**
     * Adds a custom text erasing event to the event queue.
     * Note: will wrap to previous rows if the amount of charecters is large enough
     * @param {number} n 						The amount of charecters to erase from the stdout element
     * @param {"neutral"|number} speed		 	The speed at which to erase each character
     * @param {number|undefined} pauseAfter 	The time to pause after erasing all charecters
     * @returns {TerminalEmulator} 				The current instance of TerminalEmulator, which enables method chaining.
     */
    eraseFromStdout: (n: number, speed: "neutral" | number, pauseAfter?: number) => TerminalEmulator;
    /**
     * Adds a custom command to the to event queue.
     * @param {TerminalCommand} command 	The command to add the the queue
     * @returns {TerminalEmulator} 			The current instance of TerminalEmulator, which enables method chaining.
     */
    writeCommand: (command: TerminalCommand) => TerminalEmulator;
    /**
     * Adds multiple custom commands to the to event queue.
     * @param {TerminalCommand[]} commands 	The commands to add the the queue
     * @returns {TerminalEmulator} 			The current instance of TerminalEmulator, which enables method chaining.
     */
    writeCommands: (commands: TerminalCommand[]) => TerminalEmulator;
    /**
     * Adds a pause in the event sequence.
     * @param {number} ms 					The time to pause for in miliseconds
     * @returns {TerminalEmulator} 			The current instance of TerminalEmulator, which enables method chaining.
     */
    pause: (ms: number) => TerminalEmulator;
    /**
     * Emulates the echo command.
     * https://ss64.com/bash/echo.html
     * @param {string} text 						The text to echo
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
     */
    echo: (text: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the history command.
     * https://ss64.com/bash/history.html
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
     */
    history: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the clear command.
     * https://ss64.com/bash/clear.html
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 				The current instance of TerminalEmulator, which enables method chaining.
     */
    clear: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the mkdir command.
     * https://ss64.com/bash/mkdir.html
     * @param {string} dirNames 					A space delimited string containing all the directories to create
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 				The current instance of TerminalEmulator, which enables method chaining.
     */
    mkdir: (dirNames: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the pwd command.
     * https://ss64.com/bash/pwd.html
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 				The current instance of TerminalEmulator, which enables method chaining.
     */
    pwd: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the touch command.
     * https://ss64.com/bash/touch.html
     * @param {string} fileName 					The file to touch
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
     */
    touch: (fileName: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the useradd command.
     * https://ss64.com/bash/useradd.html
     * @param {string} user 						The user to add
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
     */
    useradd: (user: FileSystemUser, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the cd command.
     * https://ss64.com/bash/cd.html
     * @param {string} dir 							The dir to change to
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
     */
    cd: (dir: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the ls command.
     * https://ss64.com/bash/ls.html
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
     */
    ls: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the vim command.
     * https://linuxcommand.org/lc3_man_pages/vim1.html
     * @param {string} fileName			 			The name of the file to edit
     * @param {string} initialFileContent 			The initial file content to display
     * @param {string[]} contentToWrite 			The content to write
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
     */
    vim: (fileName: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Inserts text into the currently opend vim window
     * @param {string} text 						The text to insert
     * @param {"neutral"|number} writeSpeed 		The speed at which to insert the text
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing a newline character in miliseconds
     * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
     */
    vimInsert: (text: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Writes the current text of the vim window to the file
     * @param {"neutral"|number} writeSpeed 		The speed at which to insert the text
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing a newline character in miliseconds
     * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
     */
    vimWrite: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Quit vim and return to the terminal window. Note: any written content to vim will be lost
     * @param {"neutral"|number} writeSpeed 		The speed at which to insert the text
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing a newline character in miliseconds
     * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
     */
    vimQuit: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Writes the current text of the vim window to the file, then quits vim and return to the terminal window
     * @param {"neutral"|number} writeSpeed 		The speed at which to insert the text
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing a newline character in miliseconds
     * @returns {TerminalEmulator} 					The current instance of TerminalEmulator, which enables method chaining.
     */
    vimWriteQuit: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Excecutes the created event sequence
     * @param callback Gets called when the sequence has finished
     */
    run: (callback: () => void) => void;
}
