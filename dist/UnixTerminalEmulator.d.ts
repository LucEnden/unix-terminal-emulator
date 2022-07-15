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
     * Adds a command to the to queue.
     * @param {TerminalCommand} command 	The command to add the the queue
     * @returns {UnixTerminalEmulator} 		The current instance of UnixTerminalEmulator
     */
    addCommand: (command: TerminalCommand) => this;
    /**
     * Adds multiple commands to the to queue.
     * @param {TerminalCommand[]} commands 	The commands to add the the queue
     * @returns {UnixTerminalEmulator} 		The current instance of UnixTerminalEmulator
     */
    addCommands: (commands: TerminalCommand[]) => this;
    /**
     * Adds a pause in the event sequence.
     * @param {number} ms The time to pause for in miliseconds
     * @returns
     */
    pause: (ms: number) => this;
    echo: (text: string) => this;
    touch: (fileName: string) => this;
    mkdir: (dirName: string) => this;
    history: () => this;
    clear: () => this;
    vim: (fileName: string, fileContentToType: string[]) => this;
    /**
     * Excecutes the created event sequence
     * @param callback Gets called when the sequence has finished
     */
    run: (callback?: () => void) => void;
    private removeCursor;
    private appendCursor;
    /**
     * Gets a random integer in the range from min to max, inclusif
     * @param {Number} min Minimum number to generate
     * @param {Number} max Maximum number to generate
     * @returns random integer in the range from min to max, inclusif
     */
    private getRandomIntegerInRange;
    /**
     * If this.enviroment is not undefined, write "username@hostname:" to the stdout
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
