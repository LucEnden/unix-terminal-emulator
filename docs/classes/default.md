[unix-terminal-emulator](../README.md) / [Exports](../modules.md) / default

# Class: default

Emulates a unix terminal by building an event sequence of commands and timings which gets excecuted when the run method is called.

[https://github.com/LucEnden/unix-terminal-emulator](https://github.com/LucEnden/unix-terminal-emulator)

## Implements

- `default`

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [HISTSIZE](default.md#histsize)
- [currentEvent](default.md#currentevent)
- [eventQueue](default.md#eventqueue)
- [fileSystem](default.md#filesystem)
- [historyStack](default.md#historystack)
- [options](default.md#options)
- [stdout](default.md#stdout)
- [vimEmulator](default.md#vimemulator)
- [wrapperElement](default.md#wrapperelement)
- [writer](default.md#writer)

### Methods

- [addWriteCommandEvent](default.md#addwritecommandevent)
- [cd](default.md#cd)
- [clear](default.md#clear)
- [echo](default.md#echo)
- [eraseFromStdout](default.md#erasefromstdout)
- [getHistoryOutput](default.md#gethistoryoutput)
- [history](default.md#history)
- [mkdir](default.md#mkdir)
- [pause](default.md#pause)
- [pwd](default.md#pwd)
- [run](default.md#run)
- [touch](default.md#touch)
- [useradd](default.md#useradd)
- [vim](default.md#vim)
- [vimInsert](default.md#viminsert)
- [vimQuit](default.md#vimquit)
- [vimWrite](default.md#vimwrite)
- [vimWriteQuit](default.md#vimwritequit)
- [writeCommand](default.md#writecommand)
- [writeCommands](default.md#writecommands)
- [writeLineBreakToStdout](default.md#writelinebreaktostdout)
- [writeNewInputLineToStdout](default.md#writenewinputlinetostdout)
- [writeToStdout](default.md#writetostdout)

## Constructors

### constructor

• **new default**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `default` |

#### Defined in

[UnixTerminalEmulator.ts:27](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L27)

## Properties

### HISTSIZE

• **HISTSIZE**: `number` = `500`

#### Implementation of

TerminalEmulator.HISTSIZE

#### Defined in

[UnixTerminalEmulator.ts:68](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L68)

___

### currentEvent

• `Private` **currentEvent**: `undefined` \| `default`

#### Defined in

[UnixTerminalEmulator.ts:25](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L25)

___

### eventQueue

• `Readonly` **eventQueue**: `default`[] = `[]`

#### Implementation of

TerminalEmulator.eventQueue

#### Defined in

[UnixTerminalEmulator.ts:56](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L56)

___

### fileSystem

• `Readonly` **fileSystem**: `default`

#### Implementation of

TerminalEmulator.fileSystem

#### Defined in

[UnixTerminalEmulator.ts:54](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L54)

___

### historyStack

• `Readonly` **historyStack**: `default`[] = `[]`

#### Implementation of

TerminalEmulator.historyStack

#### Defined in

[UnixTerminalEmulator.ts:55](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L55)

___

### options

• `Readonly` **options**: `default`

#### Implementation of

TerminalEmulator.options

#### Defined in

[UnixTerminalEmulator.ts:57](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L57)

___

### stdout

• `Readonly` **stdout**: `UnixStdoutEmulator`

#### Implementation of

TerminalEmulator.stdout

#### Defined in

[UnixTerminalEmulator.ts:52](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L52)

___

### vimEmulator

• `Readonly` **vimEmulator**: `default`

#### Implementation of

TerminalEmulator.vimEmulator

#### Defined in

[UnixTerminalEmulator.ts:53](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L53)

___

### wrapperElement

• `Readonly` **wrapperElement**: `HTMLElement`

#### Implementation of

TerminalEmulator.wrapperElement

#### Defined in

[UnixTerminalEmulator.ts:51](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L51)

___

### writer

• `Private` **writer**: `TextWriter`

#### Defined in

[UnixTerminalEmulator.ts:24](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L24)

## Methods

### addWriteCommandEvent

▸ `Private` **addWriteCommandEvent**(`command`, `fnAfter?`): `void`

Adds an event to the event queue which writes the command and its output if specified to the stdout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `default` | the command to write |
| `fnAfter?` | (`callback`: () => `void`) => `void` |  |

#### Returns

`void`

#### Defined in

[UnixTerminalEmulator.ts:314](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L314)

___

### cd

▸ **cd**(`dir`, `writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dir` | `string` | `undefined` |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.cd

#### Defined in

[UnixTerminalEmulator.ts:205](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L205)

___

### clear

▸ **clear**(`writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.clear

#### Defined in

[UnixTerminalEmulator.ts:133](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L133)

___

### echo

▸ **echo**(`text`, `writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.echo

#### Defined in

[UnixTerminalEmulator.ts:115](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L115)

___

### eraseFromStdout

▸ **eraseFromStdout**(`n`, `speed`, `pauseAfter?`): `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `speed` | `number` \| ``"neutral"`` |
| `pauseAfter?` | `number` |

#### Returns

`default`

#### Implementation of

TerminalEmulator.eraseFromStdout

#### Defined in

[UnixTerminalEmulator.ts:81](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L81)

___

### getHistoryOutput

▸ `Private` **getHistoryOutput**(): `string`

Gets the output for the history command

#### Returns

`string`

a string to be used as the history commands output

#### Defined in

[UnixTerminalEmulator.ts:359](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L359)

___

### history

▸ **history**(`writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.history

#### Defined in

[UnixTerminalEmulator.ts:124](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L124)

___

### mkdir

▸ **mkdir**(`dirNames`, `writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dirNames` | `string` | `undefined` |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.mkdir

#### Defined in

[UnixTerminalEmulator.ts:161](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L161)

___

### pause

▸ **pause**(`ms`): [`default`](default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.pause

#### Defined in

[UnixTerminalEmulator.ts:102](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L102)

___

### pwd

▸ **pwd**(`writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.pwd

#### Defined in

[UnixTerminalEmulator.ts:196](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L196)

___

### run

▸ **run**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Implementation of

TerminalEmulator.run

#### Defined in

[UnixTerminalEmulator.ts:282](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L282)

___

### touch

▸ **touch**(`fileName`, `writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fileName` | `string` | `undefined` |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.touch

#### Defined in

[UnixTerminalEmulator.ts:147](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L147)

___

### useradd

▸ **useradd**(`user`, `writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `user` | `default` | `undefined` |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.useradd

#### Defined in

[UnixTerminalEmulator.ts:180](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L180)

___

### vim

▸ **vim**(`fileName`, `writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fileName` | `string` | `undefined` |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.vim

#### Defined in

[UnixTerminalEmulator.ts:221](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L221)

___

### vimInsert

▸ **vimInsert**(`text`, `writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.vimInsert

#### Defined in

[UnixTerminalEmulator.ts:235](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L235)

___

### vimQuit

▸ **vimQuit**(`writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Defined in

[UnixTerminalEmulator.ts:258](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L258)

___

### vimWrite

▸ **vimWrite**(`writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Defined in

[UnixTerminalEmulator.ts:246](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L246)

___

### vimWriteQuit

▸ **vimWriteQuit**(`writeSpeed?`, `pauseBeforeOutput?`): [`default`](default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `writeSpeed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput?` | `number` | `undefined` |

#### Returns

[`default`](default.md)

#### Defined in

[UnixTerminalEmulator.ts:270](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L270)

___

### writeCommand

▸ **writeCommand**(`command`): [`default`](default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `default` |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.writeCommand

#### Defined in

[UnixTerminalEmulator.ts:92](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L92)

___

### writeCommands

▸ **writeCommands**(`commands`): [`default`](default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `default`[] |

#### Returns

[`default`](default.md)

#### Implementation of

TerminalEmulator.writeCommands

#### Defined in

[UnixTerminalEmulator.ts:96](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L96)

___

### writeLineBreakToStdout

▸ `Private` **writeLineBreakToStdout**(`callback`): `void`

Writes "<br>" to the stdout

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[UnixTerminalEmulator.ts:408](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L408)

___

### writeNewInputLineToStdout

▸ `Private` **writeNewInputLineToStdout**(`callback`): `void`

Writes a complete new empty input line to stdout:
``` "username@hostname:~$ " ```

Removes the cursor before and appends it afterwards

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[UnixTerminalEmulator.ts:393](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L393)

___

### writeToStdout

▸ **writeToStdout**(`text`, `writeSpeed`, `pauseAfter?`): `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `writeSpeed` | `number` \| ``"neutral"`` |
| `pauseAfter?` | `number` |

#### Returns

`default`

#### Implementation of

TerminalEmulator.writeToStdout

#### Defined in

[UnixTerminalEmulator.ts:70](https://github.com/LucEnden/unix-terminal-emulator/blob/fb27279/src/UnixTerminalEmulator.ts#L70)
