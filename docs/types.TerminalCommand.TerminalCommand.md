# Interface: TerminalCommand

[types/TerminalCommand](../wiki/types.TerminalCommand).TerminalCommand

A customizable command.

## Table of contents

### Properties

- [output](../wiki/types.TerminalCommand.TerminalCommand#output)
- [pauseBeforeOutput](../wiki/types.TerminalCommand.TerminalCommand#pausebeforeoutput)
- [text](../wiki/types.TerminalCommand.TerminalCommand#text)
- [writeSpeed](../wiki/types.TerminalCommand.TerminalCommand#writespeed)

## Properties

### output

• `Optional` **output**: `string` \| () => `string`

The output of the command

#### Defined in

[types/TerminalCommand.ts:18](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/TerminalCommand.ts#L18)

___

### pauseBeforeOutput

• `Optional` **pauseBeforeOutput**: `number`

The time to pause before writing the output in miliseconds

#### Defined in

[types/TerminalCommand.ts:22](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/TerminalCommand.ts#L22)

___

### text

• **text**: `string`

The full command text to write

#### Defined in

[types/TerminalCommand.ts:8](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/TerminalCommand.ts#L8)

___

### writeSpeed

• **writeSpeed**: `number` \| ``"neutral"``

The pause length between each charater being written in miliseconds.  
"neutral" = random integer between 80 and 120 miliseconds.  
0 = instant

#### Defined in

[types/TerminalCommand.ts:14](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/TerminalCommand.ts#L14)
