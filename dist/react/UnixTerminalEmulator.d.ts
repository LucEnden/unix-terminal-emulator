import React from "react";
import Props from "./Props";
/**
 * Emulates a unix terminal by building an event sequence of commands and timings which gets executed when the run method is called.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/react.UnixTerminalEmulator.UnixTerminalEmulator}
 */
declare class UnixTerminalEmulator extends React.Component<Props> {
    componentDidMount(): void;
    render(): JSX.Element;
}
export default UnixTerminalEmulator;
