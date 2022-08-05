# Class: UnixStdoutEmulator

[UnixStdoutEmulator](../wiki/UnixStdoutEmulator).UnixStdoutEmulator

Emulates the behaviour of stdout by writing text to an HTML element

## Implements

- [`StdoutEmulator`](../wiki/types.StdoutEmulator.StdoutEmulator)

## Table of contents

### Constructors

- [constructor](../wiki/UnixStdoutEmulator.UnixStdoutEmulator#constructor)

### Properties

- [element](../wiki/UnixStdoutEmulator.UnixStdoutEmulator#element)
- [options](../wiki/UnixStdoutEmulator.UnixStdoutEmulator#options)

### Methods

- [appendCursor](../wiki/UnixStdoutEmulator.UnixStdoutEmulator#appendcursor)
- [clear](../wiki/UnixStdoutEmulator.UnixStdoutEmulator#clear)
- [removeCursor](../wiki/UnixStdoutEmulator.UnixStdoutEmulator#removecursor)

## Constructors

### constructor

• **new UnixStdoutEmulator**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLElement` |
| `options?` | [`StdoutEmulatorOptions`](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions) |

#### Defined in

[UnixStdoutEmulator.ts:9](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixStdoutEmulator.ts#L9)

## Properties

### element

• `Readonly` **element**: `HTMLElement`

**`Param`**

The stdout HTML element

#### Implementation of

[StdoutEmulator](../wiki/types.StdoutEmulator.StdoutEmulator).[element](../wiki/types.StdoutEmulator.StdoutEmulator#element)

#### Defined in

[UnixStdoutEmulator.ts:30](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixStdoutEmulator.ts#L30)

___

### options

• `Readonly` **options**: [`StdoutEmulatorOptions`](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions)

**`Param`**

Options to customize the stdout element

#### Implementation of

[StdoutEmulator](../wiki/types.StdoutEmulator.StdoutEmulator).[options](../wiki/types.StdoutEmulator.StdoutEmulator#options)

#### Defined in

[UnixStdoutEmulator.ts:24](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixStdoutEmulator.ts#L24)

## Methods

### appendCursor

▸ **appendCursor**(): `void`

Appends the cursor element to the stdout element

#### Returns

`void`

#### Implementation of

StdoutEmulator.appendCursor

#### Defined in

[UnixStdoutEmulator.ts:42](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixStdoutEmulator.ts#L42)

___

### clear

▸ **clear**(): `void`

Clears the text in the stdout element

#### Returns

`void`

#### Implementation of

StdoutEmulator.clear

#### Defined in

[UnixStdoutEmulator.ts:32](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixStdoutEmulator.ts#L32)

___

### removeCursor

▸ **removeCursor**(): `void`

Removes the cursor element from the stdout element

#### Returns

`void`

#### Implementation of

StdoutEmulator.removeCursor

#### Defined in

[UnixStdoutEmulator.ts:38](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/UnixStdoutEmulator.ts#L38)
