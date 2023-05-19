import React from "react"
import Props from "./Props"
import TerminalEmulator from "../types/TerminalEmulator"

/**
 * Emulates a unix terminal by building an event sequence of commands and timings which gets executed when the run method is called.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/react.UnixTerminalEmulator.UnixTerminalEmulator}
 */
class UnixTerminalEmulatorComponent extends React.Component<Props> {
	state = {
		// optional second annotation for better type inference
		instance: {} as TerminalEmulator,
		id: "" as string
	}

	componentDidMount() {
		this.setState({
			instance: this.props.instance,
			id: this.props.instance.options.wrapperId
		})
		this.props.run()
	}

	componentDidUpdate(prevProps: Props) {
		if (prevProps !== this.props) {
			this.setState({
				instance: this.props.instance,
				id: this.props.instance.options.wrapperId
			})
			this.props.run()
		}
	}

	render() {
		return <div id={this.state.id}></div>
	}
}

export default UnixTerminalEmulatorComponent
