import React from "react";
import Props from "./Props";
import TerminalEmulator from "../types/TerminalEmulator";
/**
 * Emulates a unix terminal by building an event sequence of commands and timings which gets executed when the run method is called.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/react.UnixTerminalEmulator.UnixTerminalEmulator}
 */
declare class UnixTerminalEmulatorComponent extends React.Component<Props> {
    state: {
        instance: TerminalEmulator | undefined;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    render(): JSX.Element;
}
export default UnixTerminalEmulatorComponent;
