# Class: UnixVimEmulator

[core/UnixVimEmulator](../wiki/core.UnixVimEmulator).UnixVimEmulator

Emulates vim by allowing for writing of text, use basic vim commands and updateing the vim bar accordingly.
[https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixVimEmulator.UnixVimEmulator](https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixVimEmulator.UnixVimEmulator)

## Implements

- [`VimEmulator`](../wiki/types.VimEmulator.VimEmulator)

## Table of contents

### Constructors

- [constructor](../wiki/core.UnixVimEmulator.UnixVimEmulator#constructor)

### Properties

- [allElement](../wiki/core.UnixVimEmulator.UnixVimEmulator#allelement)
- [cursorPositionElement](../wiki/core.UnixVimEmulator.UnixVimEmulator#cursorpositionelement)
- [fileLineCountElement](../wiki/core.UnixVimEmulator.UnixVimEmulator#filelinecountelement)
- [fileNameElement](../wiki/core.UnixVimEmulator.UnixVimEmulator#filenameelement)
- [fileSizeElement](../wiki/core.UnixVimEmulator.UnixVimEmulator#filesizeelement)
- [options](../wiki/core.UnixVimEmulator.UnixVimEmulator#options)
- [vimBar](../wiki/core.UnixVimEmulator.UnixVimEmulator#vimbar)
- [wrapperElement](../wiki/core.UnixVimEmulator.UnixVimEmulator#wrapperelement)

### Methods

- [escape](../wiki/core.UnixVimEmulator.UnixVimEmulator#escape)
- [insert](../wiki/core.UnixVimEmulator.UnixVimEmulator#insert)
- [openFile](../wiki/core.UnixVimEmulator.UnixVimEmulator#openfile)
- [quit](../wiki/core.UnixVimEmulator.UnixVimEmulator#quit)
- [write](../wiki/core.UnixVimEmulator.UnixVimEmulator#write)
- [writeQuit](../wiki/core.UnixVimEmulator.UnixVimEmulator#writequit)

## Constructors

### constructor

• **new UnixVimEmulator**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`VimOptions`](../wiki/types.VimOptions.VimOptions) |

#### Defined in

[src/core/UnixVimEmulator.ts:20](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L20)

## Properties

### allElement

• `Readonly` **allElement**: `HTMLElement`

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[allElement](../wiki/types.VimEmulator.VimEmulator#allelement)

#### Defined in

[src/core/UnixVimEmulator.ts:68](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L68)

___

### cursorPositionElement

• `Readonly` **cursorPositionElement**: `HTMLElement`

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[cursorPositionElement](../wiki/types.VimEmulator.VimEmulator#cursorpositionelement)

#### Defined in

[src/core/UnixVimEmulator.ts:67](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L67)

___

### fileLineCountElement

• `Readonly` **fileLineCountElement**: `HTMLElement`

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[fileLineCountElement](../wiki/types.VimEmulator.VimEmulator#filelinecountelement)

#### Defined in

[src/core/UnixVimEmulator.ts:65](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L65)

___

### fileNameElement

• `Readonly` **fileNameElement**: `HTMLElement`

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[fileNameElement](../wiki/types.VimEmulator.VimEmulator#filenameelement)

#### Defined in

[src/core/UnixVimEmulator.ts:64](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L64)

___

### fileSizeElement

• `Readonly` **fileSizeElement**: `HTMLElement`

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[fileSizeElement](../wiki/types.VimEmulator.VimEmulator#filesizeelement)

#### Defined in

[src/core/UnixVimEmulator.ts:66](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L66)

___

### options

• `Readonly` **options**: [`VimOptions`](../wiki/types.VimOptions.VimOptions)

The options this vim emulator uses.

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[options](../wiki/types.VimEmulator.VimEmulator#options)

#### Defined in

[src/core/UnixVimEmulator.ts:56](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L56)

___

### vimBar

• `Readonly` **vimBar**: `HTMLElement`

**`Param`**

The bottom bar for this vim instance.

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[vimBar](../wiki/types.VimEmulator.VimEmulator#vimbar)

#### Defined in

[src/core/UnixVimEmulator.ts:63](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L63)

___

### wrapperElement

• `Readonly` **wrapperElement**: `HTMLElement`

**`Param`**

The wrapper element for this vim instance.

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[wrapperElement](../wiki/types.VimEmulator.VimEmulator#wrapperelement)

#### Defined in

[src/core/UnixVimEmulator.ts:62](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L62)

## Methods

### escape

▸ **escape**(): `void`

#### Returns

`void`

#### Defined in

[src/core/UnixVimEmulator.ts:122](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L122)

___

### insert

▸ **insert**(`stdout`, `fileSystem`, `content`, `speed`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stdout` | [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator) |
| `fileSystem` | [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator) |
| `content` | `string` |
| `speed` | `number` \| ``"neutral"`` |
| `callback` | () => `void` |

#### Returns

`void`

#### Implementation of

VimEmulator.insert

#### Defined in

[src/core/UnixVimEmulator.ts:106](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L106)

___

### openFile

▸ **openFile**(`wrapper`, `stdout`, `fileSystem`, `fileName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrapper` | `HTMLElement` |
| `stdout` | [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator) |
| `fileSystem` | [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator) |
| `fileName` | `string` |

#### Returns

`void`

#### Implementation of

VimEmulator.openFile

#### Defined in

[src/core/UnixVimEmulator.ts:70](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L70)

___

### quit

▸ **quit**(`stdout`, `fileSystem`, `speed?`, `pauseBeforeOutput?`, `callback`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `stdout` | [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator) | `undefined` |
| `fileSystem` | [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator) | `undefined` |
| `speed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput` | `number` | `0` |
| `callback` | () => `void` | `undefined` |

#### Returns

`void`

#### Implementation of

VimEmulator.quit

#### Defined in

[src/core/UnixVimEmulator.ts:142](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L142)

___

### write

▸ **write**(`stdout`, `fileSystem`, `speed?`, `pauseBeforeOutput?`, `callback`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `stdout` | [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator) | `undefined` |
| `fileSystem` | [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator) | `undefined` |
| `speed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput` | `number` | `0` |
| `callback` | () => `void` | `undefined` |

#### Returns

`void`

#### Implementation of

VimEmulator.write

#### Defined in

[src/core/UnixVimEmulator.ts:127](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L127)

___

### writeQuit

▸ **writeQuit**(`stdout`, `fileSystem`, `speed?`, `pauseBeforeOutput?`, `callback`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `stdout` | [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator) | `undefined` |
| `fileSystem` | [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator) | `undefined` |
| `speed` | `number` \| ``"neutral"`` | `"neutral"` |
| `pauseBeforeOutput` | `number` | `0` |
| `callback` | () => `void` | `undefined` |

#### Returns

`void`

#### Implementation of

VimEmulator.writeQuit

#### Defined in

[src/core/UnixVimEmulator.ts:150](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixVimEmulator.ts#L150)
