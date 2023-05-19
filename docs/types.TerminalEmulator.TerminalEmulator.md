# Interface: TerminalEmulator

[types/TerminalEmulator](../wiki/types.TerminalEmulator).TerminalEmulator

Allows the user to create an event sequence that emulates terminal behaviour

## Implemented by

- [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

## Table of contents

### Properties

- [HISTSIZE](../wiki/types.TerminalEmulator.TerminalEmulator#histsize)
- [cd](../wiki/types.TerminalEmulator.TerminalEmulator#cd)
- [clear](../wiki/types.TerminalEmulator.TerminalEmulator#clear)
- [echo](../wiki/types.TerminalEmulator.TerminalEmulator#echo)
- [eraseFromStdout](../wiki/types.TerminalEmulator.TerminalEmulator#erasefromstdout)
- [eventQueue](../wiki/types.TerminalEmulator.TerminalEmulator#eventqueue)
- [fileSystem](../wiki/types.TerminalEmulator.TerminalEmulator#filesystem)
- [grep](../wiki/types.TerminalEmulator.TerminalEmulator#grep)
- [history](../wiki/types.TerminalEmulator.TerminalEmulator#history)
- [historyStack](../wiki/types.TerminalEmulator.TerminalEmulator#historystack)
- [ls](../wiki/types.TerminalEmulator.TerminalEmulator#ls)
- [mkdir](../wiki/types.TerminalEmulator.TerminalEmulator#mkdir)
- [options](../wiki/types.TerminalEmulator.TerminalEmulator#options)
- [pause](../wiki/types.TerminalEmulator.TerminalEmulator#pause)
- [pipeline](../wiki/types.TerminalEmulator.TerminalEmulator#pipeline)
- [pwd](../wiki/types.TerminalEmulator.TerminalEmulator#pwd)
- [run](../wiki/types.TerminalEmulator.TerminalEmulator#run)
- [stdout](../wiki/types.TerminalEmulator.TerminalEmulator#stdout)
- [touch](../wiki/types.TerminalEmulator.TerminalEmulator#touch)
- [useradd](../wiki/types.TerminalEmulator.TerminalEmulator#useradd)
- [vim](../wiki/types.TerminalEmulator.TerminalEmulator#vim)
- [vimEmulator](../wiki/types.TerminalEmulator.TerminalEmulator#vimemulator)
- [vimInsert](../wiki/types.TerminalEmulator.TerminalEmulator#viminsert)
- [vimQuit](../wiki/types.TerminalEmulator.TerminalEmulator#vimquit)
- [vimWrite](../wiki/types.TerminalEmulator.TerminalEmulator#vimwrite)
- [vimWriteQuit](../wiki/types.TerminalEmulator.TerminalEmulator#vimwritequit)
- [wrapperElement](../wiki/types.TerminalEmulator.TerminalEmulator#wrapperelement)
- [writeCommand](../wiki/types.TerminalEmulator.TerminalEmulator#writecommand)
- [writeCommands](../wiki/types.TerminalEmulator.TerminalEmulator#writecommands)
- [writeToStdout](../wiki/types.TerminalEmulator.TerminalEmulator#writetostdout)

## Properties

### HISTSIZE

• **HISTSIZE**: `number`

**`Param`**

The history size for this terminal instance.
Based on histsize variable in bash: echo $HISTSIZE, see:
https://stackoverflow.com/questions/19454837/bash-histsize-vs-histfilesize#answer-19454838

#### Defined in

[src/types/TerminalEmulator.ts:55](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L55)

___

### cd

• **cd**: (`dir`: `string`, `writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`dir`, `writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates the cd command.
https://ss64.com/bash/cd.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | The dir to change to |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:160](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L160)

___

### clear

• **clear**: (`writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates the clear command.
https://ss64.com/bash/clear.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:116](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L116)

___

### echo

• **echo**: (`text`: `string`, `writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`text`, `writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates the echo command.
https://ss64.com/bash/echo.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to echo |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:100](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L100)

___

### eraseFromStdout

• **eraseFromStdout**: (`n`: `number`, `speed`: `number` \| ``"neutral"``, `pauseAfter?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`n`, `speed`, `pauseAfter?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Adds a custom text erasing event to the event queue.  
Note: will wrap to previous rows if the amount of charecters is large enough

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The amount of charecters to erase from the stdout element |
| `speed` | `number` \| ``"neutral"`` | The speed at which to erase each character |
| `pauseAfter?` | `number` | The time to pause after erasing all charecters |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:73](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L73)

___

### eventQueue

• `Readonly` **eventQueue**: [`TerminalEvent`](../wiki/types.TerminalEvent.TerminalEvent)[]

**`Param`**

The event queue for this terminal instance

#### Defined in

[src/types/TerminalEmulator.ts:36](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L36)

___

### fileSystem

• `Readonly` **fileSystem**: [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator)

**`Param`**

The file system for this terminal instance

#### Defined in

[src/types/TerminalEmulator.ts:28](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L28)

___

### grep

• **grep**: (`pattern`: `RegExp`, `file`: `string`, `writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`pattern`, `file`, `writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates the grep command.
https://ss64.com/bash/grep.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `RegExp` | The pattern to use to match the file contents |
| `file` | `string` | The file to get the content of to match the pattern to |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:218](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L218)

___

### history

• **history**: (`writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates the history command.
https://ss64.com/bash/history.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:108](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L108)

___

### historyStack

• `Readonly` **historyStack**: [`TerminalCommand`](../wiki/types.TerminalCommand.TerminalCommand)[]

**`Param`**

The command history for this terminal instance

#### Defined in

[src/types/TerminalEmulator.ts:32](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L32)

___

### ls

• **ls**: (`writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates the ls command.
https://ss64.com/bash/ls.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:168](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L168)

___

### mkdir

• **mkdir**: (`dirNames`: `string`, `writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`dirNames`, `writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates the mkdir command.
https://ss64.com/bash/mkdir.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dirNames` | `string` | A space delimited string containing all the directories to create |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:125](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L125)

___

### options

• `Readonly` **options**: [`TerminalEmulatorOptions`](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions)

**`Param`**

Default options for every terminal instance

**`Constant`**

**`Default`**

#### Defined in

[src/types/TerminalEmulator.ts:49](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L49)

___

### pause

• **pause**: (`ms`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`ms`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Adds a pause in the event sequence.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | The time to pause for in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:91](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L91)

___

### pipeline

• **pipeline**: (`commands`: (`string` \| () => `string`)[], `writeSpeed`: `number` \| ``"neutral"``, `output?`: `string`, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`commands`, `writeSpeed`, `output?`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates command pipelining.
https://ss64.com/bash/grep.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commands` | (`string` \| () => `string`)[] | The commands to pipe |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `output?` | `string` | The output to write to stdout |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:228](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L228)

___

### pwd

• **pwd**: (`writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates the pwd command.
https://ss64.com/bash/pwd.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:133](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L133)

___

### run

• **run**: (`callback`: () => `void`) => `void`

#### Type declaration

▸ (`callback`): `void`

Excecutes the created event sequence

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Gets called when the sequence has finished |

##### Returns

`void`

#### Defined in

[src/types/TerminalEmulator.ts:233](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L233)

___

### stdout

• `Readonly` **stdout**: [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator)

**`Param`**

The stdout for this terminal instance

#### Defined in

[src/types/TerminalEmulator.ts:20](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L20)

___

### touch

• **touch**: (`fileName`: `string`, `writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`fileName`, `writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates the touch command.
https://ss64.com/bash/touch.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | The file to touch |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:142](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L142)

___

### useradd

• **useradd**: (`user`: [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser), `writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`user`, `writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates the useradd command.
https://ss64.com/bash/useradd.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser) | The user to add |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:151](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L151)

___

### vim

• **vim**: (`fileName`: `string`, `writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`fileName`, `writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Emulates the vim command.
https://linuxcommand.org/lc3_man_pages/vim1.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | The name of the file to edit |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | The time to pause before writing the output in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:179](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L179)

___

### vimEmulator

• `Readonly` **vimEmulator**: [`VimEmulator`](../wiki/types.VimEmulator.VimEmulator)

**`Param`**

The vim emulator for this terminal instance

#### Defined in

[src/types/TerminalEmulator.ts:24](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L24)

___

### vimInsert

• **vimInsert**: (`text`: `string`, `writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`text`, `writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Inserts text into the currently opend vim window

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to insert |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to insert the text |
| `pauseBeforeOutput?` | `number` | The time to pause before writing a newline character in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:187](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L187)

___

### vimQuit

• **vimQuit**: (`writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Quit vim and return to the terminal window. Note: any written content to vim will be lost

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to insert the text |
| `pauseBeforeOutput?` | `number` | The time to pause before writing a newline character in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:201](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L201)

___

### vimWrite

• **vimWrite**: (`writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Writes the current text of the vim window to the file

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to insert the text |
| `pauseBeforeOutput?` | `number` | The time to pause before writing a newline character in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:194](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L194)

___

### vimWriteQuit

• **vimWriteQuit**: (`writeSpeed`: `number` \| ``"neutral"``, `pauseBeforeOutput?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`writeSpeed`, `pauseBeforeOutput?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Writes the current text of the vim window to the file, then quits vim and return to the terminal window

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to insert the text |
| `pauseBeforeOutput?` | `number` | The time to pause before writing a newline character in miliseconds |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:208](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L208)

___

### wrapperElement

• `Readonly` **wrapperElement**: `HTMLElement`

**`Param`**

The wrapper element for this terminal instance. If it doesnt already exist, it will be created and appended to the body.

#### Defined in

[src/types/TerminalEmulator.ts:16](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L16)

___

### writeCommand

• **writeCommand**: (`command`: [`TerminalCommand`](../wiki/types.TerminalCommand.TerminalCommand)) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`command`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Adds a custom command to the to event queue.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | [`TerminalCommand`](../wiki/types.TerminalCommand.TerminalCommand) | The command to add the the queue |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:79](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L79)

___

### writeCommands

• **writeCommands**: (`commands`: [`TerminalCommand`](../wiki/types.TerminalCommand.TerminalCommand)[]) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`commands`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Adds multiple custom commands to the to event queue.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commands` | [`TerminalCommand`](../wiki/types.TerminalCommand.TerminalCommand)[] | The commands to add the the queue |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:85](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L85)

___

### writeToStdout

• **writeToStdout**: (`text`: `string`, `writeSpeed`: `number` \| ``"neutral"``, `pauseAfter?`: `number`) => [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

#### Type declaration

▸ (`text`, `writeSpeed`, `pauseAfter?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Adds a custom text writing event to the event queue.  
Note: formated HTML will work, but only if the ```writeSpeed === 0```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to write to the stdout element |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character |
| `pauseAfter?` | `number` | The time to pause after writing all charecters |

##### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Defined in

[src/types/TerminalEmulator.ts:64](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/TerminalEmulator.ts#L64)
