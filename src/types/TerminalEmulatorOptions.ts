import CursorElementOptions from "./CursorElementOptions"
import EnviromentOptions from "./EnviromentOptions"
import StdoutElementOptions from "./StdoutEmulatorOptions"
import WrapperElementOptions from "./WrapperElementOptions"

export default interface TerminalEmulatorOptions extends WrapperElementOptions, CursorElementOptions, StdoutElementOptions {
    enviroment?: EnviromentOptions
}
