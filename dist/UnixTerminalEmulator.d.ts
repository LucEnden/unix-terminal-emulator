import StdoutEmulator from "./UnixStdoutEmulator";
import "./styles.css";
import FileSystemEmulator from "./types/FileSystemEmulator";
import TerminalCommand from "./types/TerminalCommand";
import TerminalEvent from "./types/TerminalEvent";
import TerminalEmulator from "./types/TerminalEmulator";
import TerminalEmulatorOptions from "./types/TerminalEmulatorOptions";
/**
 * Emulates a unix terminal by building an event sequence of commands and timings which gets excecuted when the run method is called.
 *
 * {@link https://github.com/LucEnden/unix-terminal-emulator}
 */
declare class UnixTerminalEmulator implements TerminalEmulator {
    readonly stdout: StdoutEmulator;
    readonly fileSystem: FileSystemEmulator;
    readonly historyStack: TerminalCommand[];
    readonly eventQueue: TerminalEvent[];
    readonly options: TerminalEmulatorOptions;
    HISTSIZE: number;
    private wrapperElement;
    private currentEvent;
    constructor(options?: TerminalEmulatorOptions);
    addCommand: (command: TerminalCommand) => UnixTerminalEmulator;
    addCommands: (commands: TerminalCommand[]) => UnixTerminalEmulator;
    pause: (ms: number) => UnixTerminalEmulator;
    echo: (text: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    history: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    clear: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    mkdir: (dirNames: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    pwd: (writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    touch: (fileName: string, writeSpeed?: "neutral" | number, pauseBeforeOutput?: number) => UnixTerminalEmulator;
    run: (callback?: () => void) => void;
    private getHistoryOutput;
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
    private writeNewInputLineToStdout;
    /**
     * If this.enviroment is not undefined, write the enviroment line ("username@hostname:") to the stdout
     */
    private writeEnviromentLineToStdout;
    /**
     * Writes ```this.fileSystem.GetCurrentDirectory()``` to the stdout
     */
    private writeRelativeWorkingDirectoryToStdout;
    /**
     * Writes "$ " to the stdout
     */
    private writeInputLineStartToStdout;
    /**
     * Writes "\n" (\<br />) to the stdout
     */
    private writeLineBreakToStdout;
}
export default UnixTerminalEmulator;
