/**
 * @jest-environment jsdom
 */

import { TerminalEmulatorLib } from '../dist/bundle.node'

test('addCommand + run => text and output of single command are on screen after run', () => {
    // arange
    const wrapperId = "test-id";
    const terminalOptions = {
        wrapperElement: {
            id: wrapperId
        }
    };
    const wrapper = document.createElement("div");
    wrapper.id = wrapperId;
    document.body.appendChild(wrapper);
    document.onload = () => {
        const terminalUnderTest = new TerminalEmulatorLib.Terminal(terminalOptions);
        const testCommand = {
            text: "echo Hello, World!",
            output: "Hello, World!"
        };
        const callback = () => {
            expect(document.getElementById(wrapperId)?.innerHTML).toContain(testCommand.text)
            expect(document.getElementById(wrapperId)?.innerHTML).toContain(testCommand.output)
        }

        // act
        terminalUnderTest.addCommand(testCommand).run(callback);
    }

    // assertion was setup in callback
});

test('addCommands + run => text and output of multiple commands are on screen after run', () => {
    // arange
    const wrapperId = "test-id";
    const terminalOptions = {
        wrapperElement: {
            id: wrapperId
        }
    };
    const wrapper = document.createElement("div");
    wrapper.id = wrapperId;
    document.body.appendChild(wrapper);
    document.onload = () => {
        const terminalUnderTest = new TerminalEmulatorLib.Terminal(terminalOptions);
        const testCommand1 = {
            text: "echo Foo",
            output: "Foo"
        };
        const testCommand2 = {
            text: "echo Bar",
            output: "Bar"
        };
        const callback = () => {
            expect(document.getElementById(wrapperId)?.innerHTML).toContain(testCommand1.text)
            expect(document.getElementById(wrapperId)?.innerHTML).toContain(testCommand1.output)
            expect(document.getElementById(wrapperId)?.innerHTML).toContain(testCommand2.text)
            expect(document.getElementById(wrapperId)?.innerHTML).toContain(testCommand2.output)
        }

        // act
        terminalUnderTest.addCommands([testCommand1, testCommand2]).run(callback);
    }

    // assertion was setup in callback
});
