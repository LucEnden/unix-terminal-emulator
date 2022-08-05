import CursorElementOptions from "./CursorElementOptions"
import EnviromentOptions from "./EnviromentOptions"
import StdoutElementOptions from "./StdoutEmulatorOptions"
import VimOptions from "./VimOptions"
import WrapperElementOptions from "./WrapperElementOptions"

/**
 * Options that allow customization for the TerminalEmulator instance
 */
export default interface TerminalEmulatorOptions extends WrapperElementOptions, CursorElementOptions, StdoutElementOptions, VimOptions {
    enviroment?: EnviromentOptions
}