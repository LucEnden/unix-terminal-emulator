import React from "react"
import UnixTerminalEmulatorComponent from "../../src/react/UnixTerminalEmulatorComponent"
import { render } from "@testing-library/react"
import TerminalCommand from "../../src/types/TerminalCommand"
import TerminalEmulatorOptions from "../../src/types/TerminalEmulatorOptions"
import { randomUUID } from "crypto"

test("constructor => test if custom ID gets passed down properly", done => {
    const options = {
        wrapperId: randomUUID()
    } as TerminalEmulatorOptions
	render(
		<UnixTerminalEmulatorComponent
            options={options}
			onInit={terminal => {
				terminal
					.run(() => {
						done()

                        expect(document.getElementById(options.wrapperId)).not.toBeNull()
					})
			}}
		/>
	)
})

test("writeCommand + run => test if text appears on screen", done => {
    const cmd = {
        text: "echo Hello, World!",
        writeSpeed: "neutral",
        output: "Hello, World!",
        pauseBeforeOutput: 500,
    } as TerminalCommand
	render(
		<UnixTerminalEmulatorComponent
			onInit={terminal => {
				terminal
					.writeCommand(cmd)
					.run(() => {
						done()

                        expect(document.body.innerHTML).toContain(cmd.text)
                        expect(document.body.innerHTML).toContain(cmd.output)
					})
			}}
		/>
	)
})
