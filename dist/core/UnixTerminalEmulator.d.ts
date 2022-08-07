import StdoutEmulator from "./UnixStdoutEmulator";
import "../styles.css";
import FileSystemEmulator from "../types/FileSystemEmulator";
import TerminalCommand from "../types/TerminalCommand";
import TerminalEvent from "../types/TerminalEvent";
import TerminalEmulator from "../types/TerminalEmulator";
import TerminalEmulatorOptions from "../types/TerminalEmulatorOptions";
import FileSystemUser from "../types/FileSystemUser";
import VimEmulator from "../types/VimEmulator";
/**
 * Emulates a unix terminal by building an event sequence of commands and timings which gets excecuted when the run method is called.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixTerminalEmulator.UnixTerminalEmulator}
 */
declare class UnixTerminalEmulator implements TerminalEmulator {
    private writer;
    private currentEvent;
    constructor(options?: TerminalEmulatorOptions);
    readonly wrapperElement: HTMLElement;
    readonly stdout: StdoutEmulator;
    readonly vimEmulator: VimEmulator;
    readonly fileSystem: FileSystemEmulator;
    readonly historyStack: TerminalCommand[];
    readonly eventQueue: TerminalEvent[];
    readonly options: TerminalEmulatorOptions;
    HISTSIZE: number;
    writeToStdout: (text: string, writeSpeed: "neutral" | number, pauseAfter?: number) => TerminalEmulator;
    eraseFromStdout: (n: number, speed: "neutral" | number, pauseAfter?: number) => TerminalEmulator;
    writeCommand: (command: TerminalCommand) => UnixTerminalEmulator;
    writeCommands: (commands: TerminalCommand[]) => UnixTerminalEmulator;
    pause: (ms: number) => UnixTerminalEmulator;
    echo: (text: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    history: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    clear: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    touch: (fileName: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    mkdir: (dirNames: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    useradd: (user: FileSystemUser, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    pwd: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    cd: (dir: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    vim: (fileName: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    vimInsert: (text: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    vimWrite: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    vimQuit: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    vimWriteQuit: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    run: (callback?: () => void) => void;
    /**
     * Adds an event to the event queue which writes the command and its output if specified to the stdout.
     * @param command the command to write
     * @param fnAfter
     */
    private addWriteCommandEvent;
    /**
     * Gets the output for the history command
     * @returns a string to be used as the history commands output
     */
    private getHistoryOutput;
    /**
     * Writes a complete new empty input line to stdout:
     * ``` "username@hostname:~$ " ```
     *
     * Removes the cursor before and appends it afterwards
     */
    private writeNewInputLineToStdout;
    /**
     * Writes "<br>" to the stdout
     */
    private writeLineBreakToStdout;
}
export default UnixTerminalEmulator;
