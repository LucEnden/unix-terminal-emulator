import { TerminalCommand, TerminalOptions } from "./interfaces";
import "./styles.css";
/**
 * Emulates a unix terminal by typing out commands and there specified outputs.
 * Allows you to build an event sequence of commands and timings which gets excecuted when the run method is called.
 *
 * {@link https://github.com/LucEnden/unix-terminal-emulator}
 */
declare class UnixTerminalEmulator {
    /**
     * Contains all commands executed so far by run.
     */
    private readonly historyStack;
    /**
     * Contains all events to be executed by run.
     */
    private readonly eventQueue;
    /**
     * Used in run to determine if there are any events left to be executed.
     */
    private currentEvent;
    /**
     * Default values for TerminalOptions.
     */
    private options;
    /**
     * The HTML element to which all text should be written to.
     */
    private wrapperElement;
    /**
     * The HTML element that acts as the cursor
     */
    private cursorElement;
    constructor(options?: TerminalOptions);
    /**
     * Based on histsize variable in bash: echo $HISTSIZE
     *
     * see: https://stackoverflow.com/questions/19454837/bash-histsize-vs-histfilesize#answer-19454838
     */
    HISTSIZE: number;
    /**
     * Adds a command to the to queue.
     * @param {TerminalCommand} command 	The command to add the the queue
     * @returns {UnixTerminalEmulator} 		The current instance of UnixTerminalEmulator
     */
    addCommand: (command: TerminalCommand) => UnixTerminalEmulator;
    /**
     * Adds multiple commands to the to queue.
     * @param {TerminalCommand[]} commands 	The commands to add the the queue
     * @returns {UnixTerminalEmulator} 		The current instance of UnixTerminalEmulator
     */
    addCommands: (commands: TerminalCommand[]) => UnixTerminalEmulator;
    /**
     * Adds a pause in the event sequence.
     * @param {number} ms The time to pause for in miliseconds
     * @returns {UnixTerminalEmulator} The current instance of UnixTerminalEmulator
     */
    pause: (ms: number) => UnixTerminalEmulator;
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
    echo: (text: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    /**
     * Emulates the history command.
     *
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {UnixTerminalEmulator} 				The current instance of UnixTerminalEmulator
     */
    history: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    private getHistoryOutput;
    /**
     * Emulates the clear command.
     *
     * @param {"neutral"|number} writeSpeed 		The speed at which to write each character of the command
     * @param {number|undefined} pauseBeforeOutput 	The time to pause before writing the output in miliseconds
     * @returns {UnixTerminalEmulator} 				The current instance of UnixTerminalEmulator
     */
    clear: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    /**
     * Excecutes the created event sequence
     * @param callback Gets called when the sequence has finished
     */
    run: (callback?: () => void) => void;
    /**
     * Removes the cursor from the wrapper document
     */
    private removeCursor;
    /**
     * Appends the cursor element to the wrapper element
     */
    private appendCursor;
    /**
     * Gets a random integer in the range from min to max, inclusif
     * @param {Number} min Minimum number to generate
     * @param {Number} max Maximum number to generate
     * @returns random integer in the range from min to max, inclusif
     */
    private getRandomIntegerInRange;
    /**
     * Uses:
     * ```this.writeEnviromentLineToStdout``` and ```this.writeInputLineStartToStdout```
     *
     * To write a complete new empty input line to stdout
     */
    private writeNewInputLineToStdout;
    /**
     * If this.enviroment is not undefined, write the enviroment line ("username@hostname:") to the stdout
     */
    private writeEnviromentLineToStdout;
    /**
     * Writes "$ " to the stdout
     */
    private writeInputLineStartToStdout;
    /**
     * Writes "\n" (\<br />) to the stdout
     */
    private writeLineBreakToStdout;
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
    private writeToStdout;
}
export default UnixTerminalEmulator;
