import React from "react";
import TerminalEmulator from "../types/TerminalEmulator";
import TerminalEmulatorOptions from "../types/TerminalEmulatorOptions";
interface Props {
    options?: TerminalEmulatorOptions;
    onInit?: (instance: TerminalEmulator) => void;
}
declare class UnixTerminalEmulator extends React.Component<Props> {
    componentDidMount(): void;
    render(): JSX.Element;
}
export default UnixTerminalEmulator;
