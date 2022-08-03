export default interface VimCommandBarOptions {
    /**
     * The CSS to apply to the vim commandbar wrapper element 
     * @constant
     */
    readonly vimBarCss: "vim___emulator___bar"
    /**
     * The CSS to apply to the left inner elements of the vim commandba element 
     * @constant
     */
    readonly vimBarLeftCss: "vim___emulator___bar___left"
    /**
     * The CSS to apply to the right inner elements of the vim commandba element 
     * @constant
     */
    readonly vimBarRightCss: "vim___emulator___bar___right"
}

// commandBar: HTMLElement
// fileNameElement: HTMLElement
// fileLineCountElement: HTMLElement
// fileSizeElement: HTMLElement
// cursorPositionElement: HTMLElement
// allElement: HTMLElement