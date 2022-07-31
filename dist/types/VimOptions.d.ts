import CursorElementOptions from "./CursorElementOptions";
import StdoutEmulatorOptions from "./StdoutEmulatorOptions";
/**
 * Options to customize the VIM emulator
 */
export default interface VimOptions extends StdoutEmulatorOptions, CursorElementOptions {
    /**
     * The CSS to apply to the vim element
     * @default "vim___emulator___editor"
     */
    readonly vimCss: string;
}
