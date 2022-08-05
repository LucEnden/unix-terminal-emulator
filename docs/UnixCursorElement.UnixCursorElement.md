# Class: UnixCursorElement

[UnixCursorElement](../wiki/UnixCursorElement).UnixCursorElement

Emulates a stdout cursor (eg: a blinking character, which defaults to |).
[https://github.com/LucEnden/unix-terminal-emulator/wiki/UnixCursorElement.UnixCursorElement](https://github.com/LucEnden/unix-terminal-emulator/wiki/UnixCursorElement.UnixCursorElement)

## Implements

- [`CursorElement`](../wiki/types.CursorElement.CursorElement)

## Table of contents

### Constructors

- [constructor](../wiki/UnixCursorElement.UnixCursorElement#constructor)

### Properties

- [options](../wiki/UnixCursorElement.UnixCursorElement#options)

### Methods

- [append](../wiki/UnixCursorElement.UnixCursorElement#append)
- [remove](../wiki/UnixCursorElement.UnixCursorElement#remove)

## Constructors

### constructor

• **new UnixCursorElement**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`CursorElementOptions`](../wiki/types.CursorElementOptions.CursorElementOptions) |

#### Defined in

[UnixCursorElement.ts:13](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/UnixCursorElement.ts#L13)

## Properties

### options

• `Readonly` **options**: [`CursorElementOptions`](../wiki/types.CursorElementOptions.CursorElementOptions)

**`Property`**

options for this cursor element instance

#### Implementation of

[CursorElement](../wiki/types.CursorElement.CursorElement).[options](../wiki/types.CursorElement.CursorElement#options)

#### Defined in

[UnixCursorElement.ts:29](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/UnixCursorElement.ts#L29)

## Methods

### append

▸ **append**(`parent`): `void`

Appends the cursor element to the wrapper element

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLElement` |

#### Returns

`void`

#### Implementation of

CursorElement.append

#### Defined in

[UnixCursorElement.ts:44](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/UnixCursorElement.ts#L44)

___

### remove

▸ **remove**(): `void`

Removes the cursor from the wrapper document

#### Returns

`void`

#### Implementation of

CursorElement.remove

#### Defined in

[UnixCursorElement.ts:37](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/UnixCursorElement.ts#L37)
