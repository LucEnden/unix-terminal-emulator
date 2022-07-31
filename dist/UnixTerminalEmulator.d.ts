import StdoutEmulator from "./UnixStdoutEmulator";
import "./styles.css";
import FileSystemEmulator from "./types/FileSystemEmulator";
import TerminalCommand from "./types/TerminalCommand";
import TerminalEvent from "./types/TerminalEvent";
import TerminalEmulator from "./types/TerminalEmulator";
import TerminalEmulatorOptions from "./types/TerminalEmulatorOptions";
import FileSystemUser from "./types/FileSystemUser";
/**
 * Emulates a unix terminal by building an event sequence of commands and timings which gets excecuted when the run method is called.
 *
 * {@link https://github.com/LucEnden/unix-terminal-emulator}
 */
declare class UnixTerminalEmulator implements TerminalEmulator {
    private writer;
    private wrapperElement;
    private currentEvent;
    constructor(options?: TerminalEmulatorOptions);
    readonly stdout: StdoutEmulator;
    readonly fileSystem: FileSystemEmulator;
    readonly historyStack: TerminalCommand[];
    readonly eventQueue: TerminalEvent[];
    readonly options: TerminalEmulatorOptions;
    HISTSIZE: number;
    addCommand: (command: TerminalCommand) => UnixTerminalEmulator;
    addCommands: (commands: TerminalCommand[]) => UnixTerminalEmulator;
    pause: (ms: number) => UnixTerminalEmulator;
    echo: (text: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    history: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    clear: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    touch: (fileName: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    mkdir: (dirNames: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    useradd: (user: FileSystemUser, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    pwd: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    cd: (dir: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
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
