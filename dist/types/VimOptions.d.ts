import VimCommandBarOptions from "./VimCommandBarOptions";
/**
 * Options to customize the VIM emulator
 */
export default interface VimOptions extends VimCommandBarOptions {
    /**
     * The CSS to apply to the vim element
     * @constant
     */
    readonly vimCss: "vim___emulator___wrapper";
}
