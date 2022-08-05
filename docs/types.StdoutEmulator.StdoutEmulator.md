# Interface: StdoutEmulator

[types/StdoutEmulator](../wiki/types.StdoutEmulator).StdoutEmulator

Emulates the behaviour of stdout by writing text to an HTML element

## Implemented by

- [`UnixStdoutEmulator`](../wiki/UnixStdoutEmulator.UnixStdoutEmulator)

## Table of contents

### Properties

- [appendCursor](../wiki/types.StdoutEmulator.StdoutEmulator#appendcursor)
- [clear](../wiki/types.StdoutEmulator.StdoutEmulator#clear)
- [element](../wiki/types.StdoutEmulator.StdoutEmulator#element)
- [options](../wiki/types.StdoutEmulator.StdoutEmulator#options)
- [removeCursor](../wiki/types.StdoutEmulator.StdoutEmulator#removecursor)

## Properties

### appendCursor

• **appendCursor**: () => `void`

#### Type declaration

▸ (): `void`

Appends the cursor element to the stdout element

##### Returns

`void`

#### Defined in

[types/StdoutEmulator.ts:34](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/StdoutEmulator.ts#L34)

___

### clear

• **clear**: () => `void`

#### Type declaration

▸ (): `void`

Clears the text in the stdout element

##### Returns

`void`

#### Defined in

[types/StdoutEmulator.ts:26](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/StdoutEmulator.ts#L26)

___

### element

• `Readonly` **element**: `HTMLElement`

**`Param`**

The stdout HTML element

#### Defined in

[types/StdoutEmulator.ts:15](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/StdoutEmulator.ts#L15)

___

### options

• `Readonly` **options**: [`StdoutEmulatorOptions`](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions)

**`Param`**

Options to customize the stdout element

#### Defined in

[types/StdoutEmulator.ts:11](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/StdoutEmulator.ts#L11)

___

### removeCursor

• **removeCursor**: () => `void`

#### Type declaration

▸ (): `void`

Removes the cursor element from the stdout element

##### Returns

`void`

#### Defined in

[types/StdoutEmulator.ts:30](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/StdoutEmulator.ts#L30)
