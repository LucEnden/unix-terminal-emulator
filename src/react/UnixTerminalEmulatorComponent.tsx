import React from "react"
import Props from "./Props"
import * as Core from "../core"
import TerminalEmulator from "../types/TerminalEmulator"

/**
 * Emulates a unix terminal by building an event sequence of commands and timings which gets executed when the run method is called.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/react.UnixTerminalEmulator.UnixTerminalEmulator}
 */
class UnixTerminalEmulatorComponent extends React.Component<Props> {
	state = {
		// optional second annotation for better type inference
		instance: {} as TerminalEmulator | undefined,
	}

	componentDidMount() {
		if (this.props.onInit) {
			if (this.props.instance) {
				this.setState({
					instance: this.props.instance,
				})
			} else {
				const instance = new Core.default(this.props.options)
				this.setState({
					instance: instance,
				})
			}
			this.props.onInit(this.state.instance)
		}
	}

	componentDidUpdate(prevProps: Props) {
		if (prevProps !== this.props) {
			if (this.props.instance) {
				this.setState({
					instance: this.props.instance,
				})
			} else {
				const instance = new Core.default(this.props.options)
				this.setState({
					instance: instance,
				})
			}
		}
		
		if (this.props.onInit) {
			this.props.onInit(this.state.instance)
		}
	}

	render() {
		return <div id={this.props.options ? this.props.options.wrapperId : "terminal___emulator___wrapper"}></div>
	}
}

export default UnixTerminalEmulatorComponent
