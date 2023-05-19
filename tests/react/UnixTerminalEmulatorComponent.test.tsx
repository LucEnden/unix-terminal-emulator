import React from "react"
import UnixTerminalEmulatorComponent from "../../src/react/UnixTerminalEmulatorComponent"
import { render } from "@testing-library/react"
import TerminalCommand from "../../src/types/TerminalCommand"
import TerminalEmulatorOptions from "../../src/types/TerminalEmulatorOptions"
import { randomUUID } from "crypto"
import UnixTerminalEmulator from "../../src/core/UnixTerminalEmulator"

test("constructor => test if custom ID gets passed down properly", done => {
    const options = {
        wrapperId: randomUUID()
    } as TerminalEmulatorOptions
	const instance = new UnixTerminalEmulator(options)
	
	render(
		<UnixTerminalEmulatorComponent
			instance={instance}
			run={() => {
				instance.run(() => {
					done()
					expect(document.getElementById(instance.options.wrapperId)).not.toBe(null)
				})
			}}
		/>
	)
})

test("writeCommand + run => test if text appears on screen", done => {
    const cmd = {
        text: "echo Hello, World!",
        writeSpeed: "neutral",
        output: "Greetings back to you!",
        pauseBeforeOutput: 500,
    } as TerminalCommand
	const instance = new UnixTerminalEmulator()
	render(
		<UnixTerminalEmulatorComponent
			instance={instance}
			run={() => instance.writeCommand(cmd).run(() => {
				done()
				expect(document.body.innerHTML).toContain(cmd.text)
				expect(document.body.innerHTML).toContain(cmd.output)
			})}
		/>
	)
})

test("writeCommand + run + update state => test if state second run after state update gets excecuted", done => {
    const cmdA = {
        text: "echo Hello, World!",
        writeSpeed: "neutral",
        output: "Greetings back to you!",
        pauseBeforeOutput: 0,
    } as TerminalCommand
    const cmdB = {
        text: "echo command B",
        writeSpeed: "neutral",
        output: "Command B got excecuted",
        pauseBeforeOutput: 0,
    } as TerminalCommand
	const instance = new UnixTerminalEmulator()

	const {rerender} = render(<UnixTerminalEmulatorComponent
		instance={instance}
		run={() => instance.writeCommand(cmdA).run(() => {
			// re-render the same component with different props
			rerender(<UnixTerminalEmulatorComponent 
				instance={instance}
				run={() => instance.writeCommand(cmdB).run(() => { 
					done()
					expect(document.body.innerHTML).toContain(cmdA.text)
					expect(document.body.innerHTML).toContain(cmdA.output)
					expect(document.body.innerHTML).toContain(cmdB.text)
					expect(document.body.innerHTML).toContain(cmdB.output)
				})}
			/>)
		})}
	/>)
})
