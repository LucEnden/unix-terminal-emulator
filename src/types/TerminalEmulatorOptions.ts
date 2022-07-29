import CursorElementOptions from "./CursorElementOptions"
import EnviromentOptions from "./EnviromentOptions"
import StdoutElementOptions from "./StdoutEmulatorOptions"
import WrapperElementOptions from "./WrapperElementOptions"

/**
 * Options that allow customization for the TerminalEmulator instance
 */
export default interface TerminalEmulatorOptions extends WrapperElementOptions, CursorElementOptions, StdoutElementOptions {
    enviroment?: EnviromentOptions
}
