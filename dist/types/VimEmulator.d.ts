import VimOptions from "./VimOptions";
/**
 * Emulates vim behaviour inside the browser.
 */
export default interface VimEmulator {
    /**
     * The options this vim emulator uses.
     */
    readonly options: VimOptions;
    openFile: (fileName: string) => void;
    insert: (content: string, speed: number | "neutral", callback: () => void) => void;
    quit: (speed: number | "neutral") => void;
}
