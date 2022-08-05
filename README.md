# Terminal Emulator

![ci (build and test)](https://img.shields.io/github/workflow/status/LucEnden/unix-terminal-emulator/CI?label=CI%20%28build%20and%20test%29&style=flat-square)
![coverage](https://img.shields.io/codecov/c/github/LucEnden/unix-terminal-emulator?style=flat-square&token=QHWVZR2MQ5)
![issues](https://img.shields.io/github/issues/LucEnden/unix-terminal-emulator?style=flat-square)
![npm score](https://img.shields.io/npms-io/final-score/unix-terminal-emulator?label=npm%20score&style=flat-square)
![dependencies](https://img.shields.io/librariesio/release/npm/unix-terminal-emulator?style=flat-square)
![minified size](https://img.shields.io/bundlephobia/min/unix-terminal-emulator?label=minified%20size&style=flat-square)
![downloads](https://img.shields.io/npm/dw/unix-terminal-emulator?style=flat-square)
![license](https://img.shields.io/github/license/LucEnden/unix-terminal-emulator?style=flat-square)

![Preview](preview.gif)

![NPM Repository](https://www.npmjs.com/package/unix-terminal-emulator) -
![Codesandbox example](https://codesandbox.io/s/unix-terminal-emulator-example-5n9ylu?file=index.html)

Inspired by ![TypewriterJS](https://www.npmjs.com/package/typewriter-effect).

---

- [CDN](#cdn)
- [Instalation](#instalation)
- [Example usage](#example-usage)
- [Do's and dont's](#dos-and-donts)
- [Perfomance](#perfomance)

## CDN

You can use the CDN version for simple imports in HTML:

```html
<script src="https://unpkg.com/unix-terminal-emulator@latest/dist/index.js"></script>
```

## Instalation

You can install it via your prefered package manager:

```shell
npm i --save unix-terminal-emulator
```

```shell
yarn add unix-terminal-emulator
```

## Example usage

For more advanced examples, please click [this link](https://codesandbox.io/s/unix-terminal-emulator-example-5n9ylu?file=index.html).
You can also [check out the wiki](https://github.com/LucEnden/unix-terminal-emulator/wiki) for more information

```javascript
import UnixTerminalEmulator from "unix-terminal-emulator"

const terminal = new UnixTerminalEmulator()
const command = {
	text: "echo Hello, World!",
	writeSpeed: "neutral",
	output: "Hello, World!",
	pauseBeforeOutput: 500,
}
terminal.writeCommand(command).run()
```

## Do's and dont's

Below are a few examples of do's and dont's regarding building a command sequence.

```javascript
const terminal = new UnixTerminalEmulator()
```

---

:heavy_check_mark: Chain the commands you want to run in sequence before calling run (this is by design):

```javascript
// Chaining commands is by design
terminal
	.writeCommand({
		text: "echo foo",
		writeSpeed: "neutral",
		output: "foo",
		pauseBeforeOutput: 500,
	})
	.pause(1000)
	.writeCommand({
		text: "echo bar",
		writeSpeed: "neutral",
		output: "bar",
		pauseBeforeOutput: 500,
	})
	.run()
```

---

:heavy_check_mark: Call the sequence building commands in a non-chain fashion, as long as the run method is called last (this is by design):

```javascript
terminal.writeCommand({
	text: "echo foo",
	writeSpeed: "neutral",
	output: "foo",
	pauseBeforeOutput: 500,
})
terminal.pause(1000)
terminal.writeCommand({
	text: "echo bar",
	writeSpeed: "neutral",
	output: "bar",
	pauseBeforeOutput: 500,
})
terminal.run()
```

---

:warning: Adding commands to the sequence BEFORE run has finished will queue them for the current sequence (this is timing depentend and not recomended).

```javascript
terminal
	.writeCommand({
		text: "echo foo",
		writeSpeed: "neutral",
		output: "foo",
		pauseBeforeOutput: 500,
	})
	.run()
// The command added bellow will be added to the current sequence
terminal.writeCommand({
	text: "echo bar",
	writeSpeed: "neutral",
	output: "bar",
	pauseBeforeOutput: 500,
})
// The command bellow in the setTimeout will not run in the first sequence, a new call to the run method is required in order to run it
setTimeout(() => {
	terminal.writeCommand({
		text: "echo baz",
		writeSpeed: "neutral",
		output: "baz",
		pauseBeforeOutput: 500,
	})
}, 10000)
```

---

:x: Calling the run method on a terminal instance before the previous call has finished will result in unexpected behaviour

```javascript
terminal
	.writeCommand({
		text: "echo foo",
		writeSpeed: "neutral",
		output: "foo",
		pauseBeforeOutput: 500,
	})
	.writeCommand({
		text: "echo bar",
		writeSpeed: "neutral",
		output: "bar",
		pauseBeforeOutput: 500,
	})
	.run()
terminal.run() // this brakes the sequence and will result in unexpected behaviour
```

---

:x: Creating 2 terminal instances with the same wrapper and cursor ID will result in unexpected behaviour

```javascript
const terminal1 = new UnixTerminalEmulator({
	wrapperId: "same-wrapper-id",
	cursorId: "same-cursor-id",
})
const terminal2 = new UnixTerminalEmulator({
	wrapperId: "same-wrapper-id",
	cursorId: "same-cursor-id",
})
terminal1
	.writeCommand({
		text: "echo foo",
		writeSpeed: "neutral",
		output: "foo",
		pauseBeforeOutput: 500,
	})
	.run()
terminal2
	.writeCommand({
		text: "echo foo",
		writeSpeed: "neutral",
		output: "foo",
		pauseBeforeOutput: 500,
	})
	.run()
```

## Perfomance

Bellow are performance charts based on different versions of the app. [Click here](tests/performance/performance_testing.md) for a detailed explanation about how the performance was tested. [Click here](https://docs.google.com/spreadsheets/d/e/2PACX-1vSAKSUTB6fm6-PQNgSEpBtxe9h_v1m2JiYnl--0hHiyvHMK8Yrdz16e5Y8X9kPmBm0HvIJPgchSufp4/pubhtml) for an interactive version of the graphs.

| Time per Run in MS                                                                    | Time per Command in MS                                                                    |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Time per run in MS graph of all versions](tests/performance/time_per_run_in_ms.svg) | ![Time per command in MS graph of all versions](tests/performance/time_per_command_in_ms.svg) |

[Click here](https://docs.google.com/spreadsheets/d/e/2PACX-1vSAKSUTB6fm6-PQNgSEpBtxe9h_v1m2JiYnl--0hHiyvHMK8Yrdz16e5Y8X9kPmBm0HvIJPgchSufp4/pubhtml) to see an interactive version of the graph.
