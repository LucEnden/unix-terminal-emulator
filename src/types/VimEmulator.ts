import FileSystemEmulator from "./FileSystemEmulator"
import StdoutEmulator from "./StdoutEmulator"
import TerminalEmulator from "./TerminalEmulator"
import VimOptions from "./VimOptions"

/**
 * Emulates vim behaviour inside the browser.
 */
export default interface VimEmulator {
    /**
     * The options this vim emulator uses.
     */
    readonly options: VimOptions
	/**
	 * @param wrapperElement The wrapper element for this vim instance.
	 */
	readonly wrapperElement: HTMLElement
    /**
     * @param vimBar The bottom bar for this vim instance.
     */
    readonly vimBar: HTMLElement
    readonly fileNameElement: HTMLElement
    readonly fileLineCountElement: HTMLElement
    readonly fileSizeElement: HTMLElement
    readonly cursorPositionElement: HTMLElement
    readonly allElement: HTMLElement

    openFile: (wrapper: HTMLElement, stdout: StdoutEmulator, fileSystem: FileSystemEmulator, fileName: string) => void
    insert: (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, content: string, speed: number | "neutral", callback: () => void) => void
    write: (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, speed: number | "neutral", pauseBeforeOutput: number, callback: () => void) => void
    quit: (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, speed: number | "neutral", pauseBeforeOutput: number, callback: () => void) => void
    writeQuit: (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, speed: number | "neutral", pauseBeforeOutput: number, callback: () => void) => void
}