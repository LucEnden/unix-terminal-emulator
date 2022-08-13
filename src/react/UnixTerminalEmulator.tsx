import React from "react"
import Props from "./Props"
import * as Core from "../core"

/**
 * Emulates a unix terminal by building an event sequence of commands and timings which gets executed when the run method is called.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/react.UnixTerminalEmulator.UnixTerminalEmulator}
 */
class UnixTerminalEmulator extends React.Component<Props> {
	instance = new Core.default(this.props.options)
	componentDidMount() {
		if (this.props.onInit) {
			this.props.onInit(this.instance)
		}
	}

	componentDidUpdate() {
		if (this.props.onInit) {
			this.instance = new Core.default(this.props.options)
			this.props.onInit(this.instance)
		}
	}

	render() {
		return <div id={this.props.options ? this.props.options.wrapperId : "terminal___emulator___wrapper"}></div>
	}
}

export default UnixTerminalEmulator
