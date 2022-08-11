import FileSystemEmulator from "../types/FileSystemEmulator";
import StdoutEmulator from "../types/StdoutEmulator";
import VimEmulator from "../types/VimEmulator";
import VimOptions from "../types/VimOptions";
/**
 * Emulates vim by allowing for writing of text, use basic vim commands and updating the vim bar accordingly.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixVimEmulator.UnixVimEmulator}
 */
declare class UnixVimEmulator implements VimEmulator {
    private wrapper;
    private writer;
    private prevStdoutContent;
    private currentFilename;
    private currentFileIsNew;
    private cursorPosX;
    private cursorPosY;
    constructor(options?: VimOptions);
    readonly options: VimOptions;
    readonly wrapperElement: HTMLElement;
    readonly vimBar: HTMLElement;
    readonly fileNameElement: HTMLElement;
    readonly fileLineCountElement: HTMLElement;
    readonly fileSizeElement: HTMLElement;
    readonly cursorPositionElement: HTMLElement;
    readonly allElement: HTMLElement;
    openFile: (wrapper: HTMLElement, stdout: StdoutEmulator, fileSystem: FileSystemEmulator, fileName: string) => void;
    insert: (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, content: string, speed: number | "neutral", callback: () => void) => void;
    escape: () => void;
    write: (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, speed: number | "neutral" | undefined, pauseBeforeOutput: number | undefined, callback: () => void) => void;
    quit: (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, speed: number | "neutral" | undefined, pauseBeforeOutput: number | undefined, callback: () => void) => void;
    writeQuit: (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, speed: number | "neutral" | undefined, pauseBeforeOutput: number | undefined, callback: () => void) => void;
    private closeVim;
    private writeStdoutToFile;
    private updateFileNameElem;
    private updateFileSizeElem;
    private updateFileLineCountElem;
    private updateAllElem;
    private updateCursorPosElem;
    private clearVimBar;
}
export default UnixVimEmulator;
