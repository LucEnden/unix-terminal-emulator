/**
 * @jest-environment jsdom
 */

import Terminal from '../dist/index';

test('addCommand + run => text and output are on screen after run', () => {
    // arange
    const wrapperId = "test-id";
    const terminalOptions = {
        wrapperElement: {
            id: wrapperId
        }
    };
    const terminalUnderTest = new Terminal(terminalOptions);
    const wrapper = document.createElement("div");
    wrapper.id = wrapperId;
    document.body.appendChild(wrapper);
    const testCommand = {
        text: "echo Hello, World!",
        output: "Hello, World!"
    };
    const callback = () => {
        expect(document.getElementById(wrapperId)?.innerHTML).toContain(testCommand.text)
        expect(document.getElementById(wrapperId)?.innerHTML).toContain(testCommand.output)
    }

    // act
    terminalUnderTest.addCommand(testCommand);
    terminalUnderTest.run(callback);

    // assertion was setup in callback
});