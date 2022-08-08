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

[src/core/UnixStdoutEmulator.ts:16](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixStdoutEmulator.ts#L16)

## Properties

### element

• `Readonly` **element**: `HTMLElement`

**`Param`**

The stdout HTML element

#### Implementation of

[StdoutEmulator](../wiki/types.StdoutEmulator.StdoutEmulator).[element](../wiki/types.StdoutEmulator.StdoutEmulator#element)

#### Defined in

[src/core/UnixStdoutEmulator.ts:37](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixStdoutEmulator.ts#L37)

___

### options

• `Readonly` **options**: [`StdoutEmulatorOptions`](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions)

**`Param`**

Options to customize the stdout element

#### Implementation of

[StdoutEmulator](../wiki/types.StdoutEmulator.StdoutEmulator).[options](../wiki/types.StdoutEmulator.StdoutEmulator#options)

#### Defined in

[src/core/UnixStdoutEmulator.ts:31](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixStdoutEmulator.ts#L31)

## Methods

### appendCursor

▸ **appendCursor**(): `void`

Appends the cursor element to the stdout element

#### Returns

`void`

#### Implementation of

StdoutEmulator.appendCursor

#### Defined in

[src/core/UnixStdoutEmulator.ts:49](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixStdoutEmulator.ts#L49)

___

### clear

▸ **clear**(): `void`

Clears the text in the stdout element

#### Returns

`void`

#### Implementation of

StdoutEmulator.clear

#### Defined in

[src/core/UnixStdoutEmulator.ts:39](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixStdoutEmulator.ts#L39)

___

### removeCursor

▸ **removeCursor**(): `void`

Removes the cursor element from the stdout element

#### Returns

`void`

#### Implementation of

StdoutEmulator.removeCursor

#### Defined in

[src/core/UnixStdoutEmulator.ts:45](https://github.com/LucEnden/unix-terminal-emulator/blob/45db79d/src/core/UnixStdoutEmulator.ts#L45)
