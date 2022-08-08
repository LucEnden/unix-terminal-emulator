# Class: UnixTerminalEmulator

[core/UnixTerminalEmulator](../wiki/core.UnixTerminalEmulator).UnixTerminalEmulator

Emulates a unix terminal by building an event sequence of commands and timings which gets excecuted when the run method is called.
[https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixTerminalEmulator.UnixTerminalEmulator](https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

## Implements

- [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

## Table of contents

### Constructors

- [constructor](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#constructor)

### Properties

- [HISTSIZE](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#histsize)
- [eventQueue](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#eventqueue)
- [fileSystem](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#filesystem)
- [historyStack](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#historystack)
- [options](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#options)
- [stdout](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#stdout)
- [vimEmulator](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#vimemulator)
- [wrapperElement](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#wrapperelement)

### Methods

- [cd](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#cd)
- [clear](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#clear)
- [echo](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#echo)
- [eraseFromStdout](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#erasefromstdout)
- [history](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#history)
- [ls](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#ls)
- [mkdir](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#mkdir)
- [pause](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#pause)
- [pwd](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#pwd)
- [run](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#run)
- [touch](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#touch)
- [useradd](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#useradd)
- [vim](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#vim)
- [vimInsert](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#viminsert)
- [vimQuit](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#vimquit)
- [vimWrite](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#vimwrite)
- [vimWriteQuit](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#vimwritequit)
- [writeCommand](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#writecommand)
- [writeCommands](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#writecommands)
- [writeToStdout](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator#writetostdout)

## Constructors

### constructor

• **new UnixTerminalEmulator**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`TerminalEmulatorOptions`](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions) |

#### Defined in

[src/core/UnixTerminalEmulator.ts:26](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L26)

## Properties

### HISTSIZE

• **HISTSIZE**: `number` = `500`

**`Param`**

The history size for this terminal instance.
Based on histsize variable in bash: echo $HISTSIZE, see:
https://stackoverflow.com/questions/19454837/bash-histsize-vs-histfilesize#answer-19454838

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[HISTSIZE](../wiki/types.TerminalEmulator.TerminalEmulator#histsize)

#### Defined in

[src/core/UnixTerminalEmulator.ts:67](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L67)

___

### eventQueue

• `Readonly` **eventQueue**: [`TerminalEvent`](../wiki/types.TerminalEvent.TerminalEvent)[] = `[]`

**`Param`**

The event queue for this terminal instance

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[eventQueue](../wiki/types.TerminalEmulator.TerminalEmulator#eventqueue)

#### Defined in

[src/core/UnixTerminalEmulator.ts:55](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L55)

___

### fileSystem

• `Readonly` **fileSystem**: [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator)

**`Param`**

The file system for this terminal instance

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[fileSystem](../wiki/types.TerminalEmulator.TerminalEmulator#filesystem)

#### Defined in

[src/core/UnixTerminalEmulator.ts:53](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L53)

___

### historyStack

• `Readonly` **historyStack**: [`TerminalCommand`](../wiki/types.TerminalCommand.TerminalCommand)[] = `[]`

**`Param`**

The command history for this terminal instance

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[historyStack](../wiki/types.TerminalEmulator.TerminalEmulator#historystack)

#### Defined in

[src/core/UnixTerminalEmulator.ts:54](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L54)

___

### options

• `Readonly` **options**: [`TerminalEmulatorOptions`](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions)

**`Param`**

Default options for every terminal instance

**`Constant`**

**`Default`**

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[options](../wiki/types.TerminalEmulator.TerminalEmulator#options)

#### Defined in

[src/core/UnixTerminalEmulator.ts:56](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L56)

___

### stdout

• `Readonly` **stdout**: [`UnixStdoutEmulator`](../wiki/core.UnixStdoutEmulator.UnixStdoutEmulator)

**`Param`**

The stdout for this terminal instance

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[stdout](../wiki/types.TerminalEmulator.TerminalEmulator#stdout)

#### Defined in

[src/core/UnixTerminalEmulator.ts:51](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L51)

___

### vimEmulator

• `Readonly` **vimEmulator**: [`VimEmulator`](../wiki/types.VimEmulator.VimEmulator)

**`Param`**

The vim emulator for this terminal instance

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[vimEmulator](../wiki/types.TerminalEmulator.TerminalEmulator#vimemulator)

#### Defined in

[src/core/UnixTerminalEmulator.ts:52](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L52)

___

### wrapperElement

• `Readonly` **wrapperElement**: `HTMLElement`

**`Param`**

The wrapper element for this terminal instance. If it doesnt already exist, it will be created and appended to the body.

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[wrapperElement](../wiki/types.TerminalEmulator.TerminalEmulator#wrapperelement)

#### Defined in

[src/core/UnixTerminalEmulator.ts:50](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L50)

## Methods

### cd

▸ **cd**(`dir`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the cd command.
https://ss64.com/bash/cd.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `dir` | `string` | `undefined` | The dir to change to |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.cd

#### Defined in

[src/core/UnixTerminalEmulator.ts:204](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L204)

___

### clear

▸ **clear**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the clear command.
https://ss64.com/bash/clear.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.clear

#### Defined in

[src/core/UnixTerminalEmulator.ts:132](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L132)

___

### echo

▸ **echo**(`text`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the echo command.
https://ss64.com/bash/echo.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The text to echo |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.echo

#### Defined in

[src/core/UnixTerminalEmulator.ts:114](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L114)

___

### eraseFromStdout

▸ **eraseFromStdout**(`n`, `speed`, `pauseAfter?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Adds a custom text erasing event to the event queue.  
Note: will wrap to previous rows if the amount of charecters is large enough

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The amount of charecters to erase from the stdout element |
| `speed` | `number` \| ``"neutral"`` | The speed at which to erase each character |
| `pauseAfter?` | `number` | The time to pause after erasing all charecters |

#### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.eraseFromStdout

#### Defined in

[src/core/UnixTerminalEmulator.ts:80](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L80)

___

### history

▸ **history**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the history command.
https://ss64.com/bash/history.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.history

#### Defined in

[src/core/UnixTerminalEmulator.ts:123](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L123)

___

### ls

▸ **ls**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the ls command.
https://ss64.com/bash/ls.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.ls

#### Defined in

[src/core/UnixTerminalEmulator.ts:220](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L220)

___

### mkdir

▸ **mkdir**(`dirNames`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the mkdir command.
https://ss64.com/bash/mkdir.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `dirNames` | `string` | `undefined` | A space delimited string containing all the directories to create |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.mkdir

#### Defined in

[src/core/UnixTerminalEmulator.ts:160](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L160)

___

### pause

▸ **pause**(`ms`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Adds a pause in the event sequence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | The time to pause for in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.pause

#### Defined in

[src/core/UnixTerminalEmulator.ts:101](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L101)

___

### pwd

▸ **pwd**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the pwd command.
https://ss64.com/bash/pwd.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.pwd

#### Defined in

[src/core/UnixTerminalEmulator.ts:195](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L195)

___

### run

▸ **run**(`callback?`): `void`

Excecutes the created event sequence

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | () => `void` | Gets called when the sequence has finished |

#### Returns

`void`

#### Implementation of

TerminalEmulator.run

#### Defined in

[src/core/UnixTerminalEmulator.ts:308](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L308)

___

### touch

▸ **touch**(`fileName`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the touch command.
https://ss64.com/bash/touch.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fileName` | `string` | `undefined` | The file to touch |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.touch

#### Defined in

[src/core/UnixTerminalEmulator.ts:146](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L146)

___

### useradd

▸ **useradd**(`user`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the useradd command.
https://ss64.com/bash/useradd.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `user` | [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser) | `undefined` | The user to add |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.useradd

#### Defined in

[src/core/UnixTerminalEmulator.ts:179](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L179)

___

### vim

▸ **vim**(`fileName`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the vim command.
https://linuxcommand.org/lc3_man_pages/vim1.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fileName` | `string` | `undefined` | The name of the file to edit |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.vim

#### Defined in

[src/core/UnixTerminalEmulator.ts:247](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L247)

___

### vimInsert

▸ **vimInsert**(`text`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Inserts text into the currently opend vim window

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The text to insert |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to insert the text |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing a newline character in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.vimInsert

#### Defined in

[src/core/UnixTerminalEmulator.ts:261](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L261)

___

### vimQuit

▸ **vimQuit**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Quit vim and return to the terminal window. Note: any written content to vim will be lost

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to insert the text |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing a newline character in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.vimQuit

#### Defined in

[src/core/UnixTerminalEmulator.ts:284](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L284)

___

### vimWrite

▸ **vimWrite**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Writes the current text of the vim window to the file

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to insert the text |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing a newline character in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.vimWrite

#### Defined in

[src/core/UnixTerminalEmulator.ts:272](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L272)

___

### vimWriteQuit

▸ **vimWriteQuit**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Writes the current text of the vim window to the file, then quits vim and return to the terminal window

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to insert the text |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing a newline character in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.vimWriteQuit

#### Defined in

[src/core/UnixTerminalEmulator.ts:296](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L296)

___

### writeCommand

▸ **writeCommand**(`command`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Adds a custom command to the to event queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | [`TerminalCommand`](../wiki/types.TerminalCommand.TerminalCommand) | The command to add the the queue |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.writeCommand

#### Defined in

[src/core/UnixTerminalEmulator.ts:91](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L91)

___

### writeCommands

▸ **writeCommands**(`commands`): [`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

Adds multiple custom commands to the to event queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commands` | [`TerminalCommand`](../wiki/types.TerminalCommand.TerminalCommand)[] | The commands to add the the queue |

#### Returns

[`UnixTerminalEmulator`](../wiki/core.UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.writeCommands

#### Defined in

[src/core/UnixTerminalEmulator.ts:95](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L95)

___

### writeToStdout

▸ **writeToStdout**(`text`, `writeSpeed`, `pauseAfter?`): [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

Adds a custom text writing event to the event queue.  
Note: formated HTML will work, but only if the ```writeSpeed === 0```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to write to the stdout element |
| `writeSpeed` | `number` \| ``"neutral"`` | The speed at which to write each character |
| `pauseAfter?` | `number` | The time to pause after writing all charecters |

#### Returns

[`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.writeToStdout

#### Defined in

[src/core/UnixTerminalEmulator.ts:69](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixTerminalEmulator.ts#L69)
