# Class: UnixVimEmulator

[UnixVimEmulator](../wiki/UnixVimEmulator).UnixVimEmulator

Emulates vim behaviour inside the browser.

## Implements

- [`VimEmulator`](../wiki/types.VimEmulator.VimEmulator)

## Table of contents

### Constructors

- [constructor](../wiki/UnixVimEmulator.UnixVimEmulator#constructor)

### Properties

- [allElement](../wiki/UnixVimEmulator.UnixVimEmulator#allelement)
- [cursorPositionElement](../wiki/UnixVimEmulator.UnixVimEmulator#cursorpositionelement)
- [fileLineCountElement](../wiki/UnixVimEmulator.UnixVimEmulator#filelinecountelement)
- [fileNameElement](../wiki/UnixVimEmulator.UnixVimEmulator#filenameelement)
- [fileSizeElement](../wiki/UnixVimEmulator.UnixVimEmulator#filesizeelement)
- [options](../wiki/UnixVimEmulator.UnixVimEmulator#options)
- [vimBar](../wiki/UnixVimEmulator.UnixVimEmulator#vimbar)
- [wrapperElement](../wiki/UnixVimEmulator.UnixVimEmulator#wrapperelement)

### Methods

- [escape](../wiki/UnixVimEmulator.UnixVimEmulator#escape)
- [insert](../wiki/UnixVimEmulator.UnixVimEmulator#insert)
- [openFile](../wiki/UnixVimEmulator.UnixVimEmulator#openfile)
- [quit](../wiki/UnixVimEmulator.UnixVimEmulator#quit)
- [write](../wiki/UnixVimEmulator.UnixVimEmulator#write)
- [writeQuit](../wiki/UnixVimEmulator.UnixVimEmulator#writequit)

## Constructors

### constructor

• **new UnixVimEmulator**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`VimOptions`](../wiki/types.VimOptions.VimOptions) |

#### Defined in

[UnixVimEmulator.ts:17](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L17)

## Properties

### allElement

• `Readonly` **allElement**: `HTMLElement`

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[allElement](../wiki/types.VimEmulator.VimEmulator#allelement)

#### Defined in

[UnixVimEmulator.ts:65](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L65)

___

### cursorPositionElement

• `Readonly` **cursorPositionElement**: `HTMLElement`

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[cursorPositionElement](../wiki/types.VimEmulator.VimEmulator#cursorpositionelement)

#### Defined in

[UnixVimEmulator.ts:64](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L64)

___

### fileLineCountElement

• `Readonly` **fileLineCountElement**: `HTMLElement`

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[fileLineCountElement](../wiki/types.VimEmulator.VimEmulator#filelinecountelement)

#### Defined in

[UnixVimEmulator.ts:62](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L62)

___

### fileNameElement

• `Readonly` **fileNameElement**: `HTMLElement`

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[fileNameElement](../wiki/types.VimEmulator.VimEmulator#filenameelement)

#### Defined in

[UnixVimEmulator.ts:61](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L61)

___

### fileSizeElement

• `Readonly` **fileSizeElement**: `HTMLElement`

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[fileSizeElement](../wiki/types.VimEmulator.VimEmulator#filesizeelement)

#### Defined in

[UnixVimEmulator.ts:63](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L63)

___

### options

• `Readonly` **options**: [`VimOptions`](../wiki/types.VimOptions.VimOptions)

The options this vim emulator uses.

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[options](../wiki/types.VimEmulator.VimEmulator#options)

#### Defined in

[UnixVimEmulator.ts:53](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L53)

___

### vimBar

• `Readonly` **vimBar**: `HTMLElement`

**`Param`**

The bottom bar for this vim instance.

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[vimBar](../wiki/types.VimEmulator.VimEmulator#vimbar)

#### Defined in

[UnixVimEmulator.ts:60](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L60)

___

### wrapperElement

• `Readonly` **wrapperElement**: `HTMLElement`

**`Param`**

The wrapper element for this vim instance.

#### Implementation of

[VimEmulator](../wiki/types.VimEmulator.VimEmulator).[wrapperElement](../wiki/types.VimEmulator.VimEmulator#wrapperelement)

#### Defined in

[UnixVimEmulator.ts:59](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L59)

## Methods

### escape

▸ **escape**(): `void`

#### Returns

`void`

#### Defined in

[UnixVimEmulator.ts:119](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L119)

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

[UnixVimEmulator.ts:103](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L103)

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

[UnixVimEmulator.ts:67](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L67)

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

[UnixVimEmulator.ts:139](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L139)

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

[UnixVimEmulator.ts:124](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L124)

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

[UnixVimEmulator.ts:147](https://github.com/LucEnden/unix-terminal-emulator/blob/8f4f902/src/UnixVimEmulator.ts#L147)
