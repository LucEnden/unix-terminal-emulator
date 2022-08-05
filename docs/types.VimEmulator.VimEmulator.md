# Interface: VimEmulator

[types/VimEmulator](../wiki/types.VimEmulator).VimEmulator

Emulates vim behaviour inside the browser.

## Implemented by

- [`UnixVimEmulator`](../wiki/UnixVimEmulator.UnixVimEmulator)

## Table of contents

### Properties

- [allElement](../wiki/types.VimEmulator.VimEmulator#allelement)
- [cursorPositionElement](../wiki/types.VimEmulator.VimEmulator#cursorpositionelement)
- [fileLineCountElement](../wiki/types.VimEmulator.VimEmulator#filelinecountelement)
- [fileNameElement](../wiki/types.VimEmulator.VimEmulator#filenameelement)
- [fileSizeElement](../wiki/types.VimEmulator.VimEmulator#filesizeelement)
- [insert](../wiki/types.VimEmulator.VimEmulator#insert)
- [openFile](../wiki/types.VimEmulator.VimEmulator#openfile)
- [options](../wiki/types.VimEmulator.VimEmulator#options)
- [quit](../wiki/types.VimEmulator.VimEmulator#quit)
- [vimBar](../wiki/types.VimEmulator.VimEmulator#vimbar)
- [wrapperElement](../wiki/types.VimEmulator.VimEmulator#wrapperelement)
- [write](../wiki/types.VimEmulator.VimEmulator#write)
- [writeQuit](../wiki/types.VimEmulator.VimEmulator#writequit)

## Properties

### allElement

• `Readonly` **allElement**: `HTMLElement`

#### Defined in

[types/VimEmulator.ts:26](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L26)

___

### cursorPositionElement

• `Readonly` **cursorPositionElement**: `HTMLElement`

#### Defined in

[types/VimEmulator.ts:25](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L25)

___

### fileLineCountElement

• `Readonly` **fileLineCountElement**: `HTMLElement`

#### Defined in

[types/VimEmulator.ts:23](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L23)

___

### fileNameElement

• `Readonly` **fileNameElement**: `HTMLElement`

#### Defined in

[types/VimEmulator.ts:22](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L22)

___

### fileSizeElement

• `Readonly` **fileSizeElement**: `HTMLElement`

#### Defined in

[types/VimEmulator.ts:24](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L24)

___

### insert

• **insert**: (`stdout`: [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator), `fileSystem`: [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator), `content`: `string`, `speed`: `number` \| ``"neutral"``, `callback`: () => `void`) => `void`

#### Type declaration

▸ (`stdout`, `fileSystem`, `content`, `speed`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `stdout` | [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator) |
| `fileSystem` | [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator) |
| `content` | `string` |
| `speed` | `number` \| ``"neutral"`` |
| `callback` | () => `void` |

##### Returns

`void`

#### Defined in

[types/VimEmulator.ts:29](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L29)

___

### openFile

• **openFile**: (`wrapper`: `HTMLElement`, `stdout`: [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator), `fileSystem`: [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator), `fileName`: `string`) => `void`

#### Type declaration

▸ (`wrapper`, `stdout`, `fileSystem`, `fileName`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `wrapper` | `HTMLElement` |
| `stdout` | [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator) |
| `fileSystem` | [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator) |
| `fileName` | `string` |

##### Returns

`void`

#### Defined in

[types/VimEmulator.ts:28](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L28)

___

### options

• `Readonly` **options**: [`VimOptions`](../wiki/types.VimOptions.VimOptions)

The options this vim emulator uses.

#### Defined in

[types/VimEmulator.ts:13](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L13)

___

### quit

• **quit**: (`stdout`: [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator), `fileSystem`: [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator), `speed`: `number` \| ``"neutral"``, `pauseBeforeOutput`: `number`, `callback`: () => `void`) => `void`

#### Type declaration

▸ (`stdout`, `fileSystem`, `speed`, `pauseBeforeOutput`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `stdout` | [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator) |
| `fileSystem` | [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator) |
| `speed` | `number` \| ``"neutral"`` |
| `pauseBeforeOutput` | `number` |
| `callback` | () => `void` |

##### Returns

`void`

#### Defined in

[types/VimEmulator.ts:31](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L31)

___

### vimBar

• `Readonly` **vimBar**: `HTMLElement`

**`Param`**

The bottom bar for this vim instance.

#### Defined in

[types/VimEmulator.ts:21](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L21)

___

### wrapperElement

• `Readonly` **wrapperElement**: `HTMLElement`

**`Param`**

The wrapper element for this vim instance.

#### Defined in

[types/VimEmulator.ts:17](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L17)

___

### write

• **write**: (`stdout`: [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator), `fileSystem`: [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator), `speed`: `number` \| ``"neutral"``, `pauseBeforeOutput`: `number`, `callback`: () => `void`) => `void`

#### Type declaration

▸ (`stdout`, `fileSystem`, `speed`, `pauseBeforeOutput`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `stdout` | [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator) |
| `fileSystem` | [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator) |
| `speed` | `number` \| ``"neutral"`` |
| `pauseBeforeOutput` | `number` |
| `callback` | () => `void` |

##### Returns

`void`

#### Defined in

[types/VimEmulator.ts:30](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L30)

___

### writeQuit

• **writeQuit**: (`stdout`: [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator), `fileSystem`: [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator), `speed`: `number` \| ``"neutral"``, `pauseBeforeOutput`: `number`, `callback`: () => `void`) => `void`

#### Type declaration

▸ (`stdout`, `fileSystem`, `speed`, `pauseBeforeOutput`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `stdout` | [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator) |
| `fileSystem` | [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator) |
| `speed` | `number` \| ``"neutral"`` |
| `pauseBeforeOutput` | `number` |
| `callback` | () => `void` |

##### Returns

`void`

#### Defined in

[types/VimEmulator.ts:32](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/types/VimEmulator.ts#L32)
