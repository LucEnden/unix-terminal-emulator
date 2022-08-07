import React from "react"
import * as Core from "../core"
import TerminalEmulator from "../types/TerminalEmulator"
import TerminalEmulatorOptions from "../types/TerminalEmulatorOptions"

interface Props {
	options?: TerminalEmulatorOptions
	onInit?: (instance: TerminalEmulator) => void
}

class UnixTerminalEmulator extends React.Component<Props> {
	componentDidMount() {
		const instance = new Core.default(this.props.options)
		if (this.props.onInit) {
			this.props.onInit(instance)
		}
	}

	render() {
		return <div id={this.props.options ? this.props.options.wrapperId : "terminal___emulator___wrapper"}></div>
	}
}

export default UnixTerminalEmulator
