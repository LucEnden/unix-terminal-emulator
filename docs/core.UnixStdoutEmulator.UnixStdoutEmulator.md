# Class: UnixStdoutEmulator

[core/UnixStdoutEmulator](../wiki/core.UnixStdoutEmulator).UnixStdoutEmulator

Emulates stdout by allowing for writing and erasing of text to an HTML element. Also has methods for controlling a cursor like element.
[https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixStdoutEmulator.UnixStdoutEmulator](https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixStdoutEmulator.UnixStdoutEmulator)

## Implements

- [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator)

## Table of contents

### Constructors

- [constructor](../wiki/core.UnixStdoutEmulator.UnixStdoutEmulator#constructor)

### Properties

- [element](../wiki/core.UnixStdoutEmulator.UnixStdoutEmulator#element)
- [options](../wiki/core.UnixStdoutEmulator.UnixStdoutEmulator#options)

### Methods

- [appendCursor](../wiki/core.UnixStdoutEmulator.UnixStdoutEmulator#appendcursor)
- [clear](../wiki/core.UnixStdoutEmulator.UnixStdoutEmulator#clear)
- [removeCursor](../wiki/core.UnixStdoutEmulator.UnixStdoutEmulator#removecursor)

## Constructors

### constructor

• **new UnixStdoutEmulator**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLElement` |
| `options?` | [`StdoutEmulatorOptions`](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions) |

#### Defined in

[src/core/UnixStdoutEmulator.ts:18](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/core/UnixStdoutEmulator.ts#L18)

## Properties

### element

• `Readonly` **element**: `HTMLElement`

**`Param`**

The stdout HTML element

#### Implementation of

[StdoutEmulator](../wiki/types.StdoutEmulator.StdoutEmulator).[element](../wiki/types.StdoutEmulator.StdoutEmulator#element)

#### Defined in

[src/core/UnixStdoutEmulator.ts:39](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/core/UnixStdoutEmulator.ts#L39)

___

### options

• `Readonly` **options**: [`StdoutEmulatorOptions`](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions)

**`Param`**

Options to customize the stdout element

#### Implementation of

[StdoutEmulator](../wiki/types.StdoutEmulator.StdoutEmulator).[options](../wiki/types.StdoutEmulator.StdoutEmulator#options)

#### Defined in

[src/core/UnixStdoutEmulator.ts:33](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/core/UnixStdoutEmulator.ts#L33)

## Methods

### appendCursor

▸ **appendCursor**(): `void`

Appends the cursor element to the stdout element

#### Returns

`void`

#### Implementation of

StdoutEmulator.appendCursor

#### Defined in

[src/core/UnixStdoutEmulator.ts:51](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/core/UnixStdoutEmulator.ts#L51)

___

### clear

▸ **clear**(): `void`

Clears the text in the stdout element

#### Returns

`void`

#### Implementation of

StdoutEmulator.clear

#### Defined in

[src/core/UnixStdoutEmulator.ts:41](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/core/UnixStdoutEmulator.ts#L41)

___

### removeCursor

▸ **removeCursor**(): `void`

Removes the cursor element from the stdout element

#### Returns

`void`

#### Implementation of

StdoutEmulator.removeCursor

#### Defined in

[src/core/UnixStdoutEmulator.ts:47](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/core/UnixStdoutEmulator.ts#L47)
