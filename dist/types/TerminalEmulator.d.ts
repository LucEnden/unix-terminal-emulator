import StdoutEmulator from "./StdoutEmulator";
import FileSystemEmulator from "./FileSystemEmulator";
import TerminalCommand from "./TerminalCommand";
import TerminalEvent from "./TerminalEvent";
import TerminalEmulatorOptions from "./TerminalEmulatorOptions";
/**
 * Allows the user to create an event sequence that emulates someone using a  terminal.
 */
export default interface TerminalEmulator {
    /**
     * @param stdout The stdout for this terminal instance
     */
    readonly stdout: StdoutEmulator;
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
     * @param options Default options for this terminal instance
     */
    readonly options: TerminalEmulatorOptions;
    /**
     * @param HISTSIZE Based on histsize variable in bash: echo $HISTSIZE, see: https://stackoverflow.com/questions/19454837/bash-histsize-vs-histfilesize#answer-19454838
     */
    HISTSIZE: number;
    /**
     * Adds a command to the to event queue.
     * @param {TerminalCommand} command 	The command to add the the queue
     * @returns {TerminalEmulator} 			The current instance of TerminalEmulator
     */
    addCommand: (command: TerminalCommand) => TerminalEmulator;
    /**
     * Adds multiple commands to the to queue.
     * @param {TerminalCommand[]} commands 	The commands to add the the queue
     * @returns {TerminalEmulator} 		The current instance of TerminalEmulator
     */
    addCommands: (commands: TerminalCommand[]) => TerminalEmulator;
    /**
     * Adds a pause in the event sequence.
     * @param {number} ms 					The time to pause for in miliseconds
     * @returns {TerminalEmulator} 		The current instance of TerminalEmulator
     */
    pause: (ms: number) => TerminalEmulator;
    /**
     * Emulates the echo command.
     * @param {string} text 						The text to echo
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 				The current instance of TerminalEmulator
     */
    echo: (text: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the history command.
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 				The current instance of TerminalEmulator
     */
    history: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the clear command.
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 				The current instance of TerminalEmulator
     */
    clear: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the mkdir command.
     * @param {string} dirNames 					A space delimited string containing all the directories to create
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 				The current instance of TerminalEmulator
     */
    mkdir: (dirNames: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the pwd command.
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 				The current instance of TerminalEmulator
     */
    pwd: (writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Emulates the touch command.
     * @param {string} fileName 					The file to touch
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {TerminalEmulator} 				The current instance of TerminalEmulator
     */
    touch: (fileName: string, writeSpeed: "neutral" | number, pauseBeforeOutput?: number) => TerminalEmulator;
    /**
     * Excecutes the created event sequence
     * @param callback Gets called when the sequence has finished
     */
    run: (callback: () => void) => void;
}
