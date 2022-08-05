# Class: UnixTerminalEmulator

[UnixTerminalEmulator](../wiki/UnixTerminalEmulator).UnixTerminalEmulator

Emulates a unix terminal by building an event sequence of commands and timings which gets excecuted when the run method is called.

[https://github.com/LucEnden/unix-terminal-emulator](https://github.com/LucEnden/unix-terminal-emulator)

## Implements

- [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator)

## Table of contents

### Constructors

- [constructor](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#constructor)

### Properties

- [HISTSIZE](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#histsize)
- [eventQueue](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#eventqueue)
- [fileSystem](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#filesystem)
- [historyStack](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#historystack)
- [options](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#options)
- [stdout](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#stdout)
- [vimEmulator](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#vimemulator)
- [wrapperElement](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#wrapperelement)

### Methods

- [cd](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#cd)
- [clear](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#clear)
- [echo](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#echo)
- [eraseFromStdout](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#erasefromstdout)
- [history](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#history)
- [mkdir](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#mkdir)
- [pause](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#pause)
- [pwd](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#pwd)
- [run](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#run)
- [touch](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#touch)
- [useradd](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#useradd)
- [vim](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#vim)
- [vimInsert](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#viminsert)
- [vimQuit](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#vimquit)
- [vimWrite](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#vimwrite)
- [vimWriteQuit](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#vimwritequit)
- [writeCommand](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#writecommand)
- [writeCommands](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#writecommands)
- [writeToStdout](../wiki/UnixTerminalEmulator.UnixTerminalEmulator#writetostdout)

## Constructors

### constructor

• **new UnixTerminalEmulator**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`TerminalEmulatorOptions`](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions) |

#### Defined in

[UnixTerminalEmulator.ts:27](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L27)

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

[UnixTerminalEmulator.ts:68](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L68)

___

### eventQueue

• `Readonly` **eventQueue**: [`TerminalEvent`](../wiki/types.TerminalEvent.TerminalEvent)[] = `[]`

**`Param`**

The event queue for this terminal instance

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[eventQueue](../wiki/types.TerminalEmulator.TerminalEmulator#eventqueue)

#### Defined in

[UnixTerminalEmulator.ts:56](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L56)

___

### fileSystem

• `Readonly` **fileSystem**: [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator)

**`Param`**

The file system for this terminal instance

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[fileSystem](../wiki/types.TerminalEmulator.TerminalEmulator#filesystem)

#### Defined in

[UnixTerminalEmulator.ts:54](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L54)

___

### historyStack

• `Readonly` **historyStack**: [`TerminalCommand`](../wiki/types.TerminalCommand.TerminalCommand)[] = `[]`

**`Param`**

The command history for this terminal instance

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[historyStack](../wiki/types.TerminalEmulator.TerminalEmulator#historystack)

#### Defined in

[UnixTerminalEmulator.ts:55](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L55)

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

[UnixTerminalEmulator.ts:57](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L57)

___

### stdout

• `Readonly` **stdout**: [`UnixStdoutEmulator`](../wiki/UnixStdoutEmulator.UnixStdoutEmulator)

**`Param`**

The stdout for this terminal instance

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[stdout](../wiki/types.TerminalEmulator.TerminalEmulator#stdout)

#### Defined in

[UnixTerminalEmulator.ts:52](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L52)

___

### vimEmulator

• `Readonly` **vimEmulator**: [`VimEmulator`](../wiki/types.VimEmulator.VimEmulator)

**`Param`**

The vim emulator for this terminal instance

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[vimEmulator](../wiki/types.TerminalEmulator.TerminalEmulator#vimemulator)

#### Defined in

[UnixTerminalEmulator.ts:53](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L53)

___

### wrapperElement

• `Readonly` **wrapperElement**: `HTMLElement`

**`Param`**

The wrapper element for this terminal instance. If it doesnt already exist, it will be created and appended to the body.

#### Implementation of

[TerminalEmulator](../wiki/types.TerminalEmulator.TerminalEmulator).[wrapperElement](../wiki/types.TerminalEmulator.TerminalEmulator#wrapperelement)

#### Defined in

[UnixTerminalEmulator.ts:51](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L51)

## Methods

### cd

▸ **cd**(`dir`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the cd command.
https://ss64.com/bash/cd.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `dir` | `string` | `undefined` | The dir to change to |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.cd

#### Defined in

[UnixTerminalEmulator.ts:205](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L205)

___

### clear

▸ **clear**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the clear command.
https://ss64.com/bash/clear.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.clear

#### Defined in

[UnixTerminalEmulator.ts:133](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L133)

___

### echo

▸ **echo**(`text`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the echo command.
https://ss64.com/bash/echo.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The text to echo |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.echo

#### Defined in

[UnixTerminalEmulator.ts:115](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L115)

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

[UnixTerminalEmulator.ts:81](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L81)

___

### history

▸ **history**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the history command.
https://ss64.com/bash/history.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.history

#### Defined in

[UnixTerminalEmulator.ts:124](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L124)

___

### mkdir

▸ **mkdir**(`dirNames`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the mkdir command.
https://ss64.com/bash/mkdir.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `dirNames` | `string` | `undefined` | A space delimited string containing all the directories to create |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.mkdir

#### Defined in

[UnixTerminalEmulator.ts:161](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L161)

___

### pause

▸ **pause**(`ms`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Adds a pause in the event sequence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | The time to pause for in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.pause

#### Defined in

[UnixTerminalEmulator.ts:102](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L102)

___

### pwd

▸ **pwd**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the pwd command.
https://ss64.com/bash/pwd.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.pwd

#### Defined in

[UnixTerminalEmulator.ts:196](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L196)

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

[UnixTerminalEmulator.ts:282](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L282)

___

### touch

▸ **touch**(`fileName`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the touch command.
https://ss64.com/bash/touch.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fileName` | `string` | `undefined` | The file to touch |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.touch

#### Defined in

[UnixTerminalEmulator.ts:147](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L147)

___

### useradd

▸ **useradd**(`user`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the useradd command.
https://ss64.com/bash/useradd.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `user` | [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser) | `undefined` | The user to add |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.useradd

#### Defined in

[UnixTerminalEmulator.ts:180](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L180)

___

### vim

▸ **vim**(`fileName`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Emulates the vim command.
https://linuxcommand.org/lc3_man_pages/vim1.html

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fileName` | `string` | `undefined` | The name of the file to edit |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` | The speed at which to write each character of the command |
| `pauseBeforeOutput?` | `number` | `undefined` | The time to pause before writing the output in miliseconds |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.vim

#### Defined in

[UnixTerminalEmulator.ts:221](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L221)

___

### vimInsert

▸ **vimInsert**(`text`, `writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

#### Implementation of

TerminalEmulator.vimInsert

#### Defined in

[UnixTerminalEmulator.ts:235](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L235)

___

### vimQuit

▸ **vimQuit**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

#### Defined in

[UnixTerminalEmulator.ts:258](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L258)

___

### vimWrite

▸ **vimWrite**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

#### Defined in

[UnixTerminalEmulator.ts:246](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L246)

___

### vimWriteQuit

▸ **vimWriteQuit**(`writeSpeed?`, `pauseBeforeOutput?`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

#### Defined in

[UnixTerminalEmulator.ts:270](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L270)

___

### writeCommand

▸ **writeCommand**(`command`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Adds a custom command to the to event queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | [`TerminalCommand`](../wiki/types.TerminalCommand.TerminalCommand) | The command to add the the queue |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.writeCommand

#### Defined in

[UnixTerminalEmulator.ts:92](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L92)

___

### writeCommands

▸ **writeCommands**(`commands`): [`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

Adds multiple custom commands to the to event queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commands` | [`TerminalCommand`](../wiki/types.TerminalCommand.TerminalCommand)[] | The commands to add the the queue |

#### Returns

[`UnixTerminalEmulator`](../wiki/UnixTerminalEmulator.UnixTerminalEmulator)

The current instance of TerminalEmulator, which enables method chaining.

#### Implementation of

TerminalEmulator.writeCommands

#### Defined in

[UnixTerminalEmulator.ts:96](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L96)

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

[UnixTerminalEmulator.ts:70](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixTerminalEmulator.ts#L70)
