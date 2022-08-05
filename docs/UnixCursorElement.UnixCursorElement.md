# Class: UnixCursorElement

[UnixCursorElement](../wiki/UnixCursorElement).UnixCursorElement

Emulates a cursor (like a blinking straight line) inside the browser

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

[UnixCursorElement.ts:9](https://github.com/LucEnden/unix-terminal-emulator/blob/f00e612/src/UnixCursorElement.ts#L9)

## Properties

### options

• `Readonly` **options**: [`CursorElementOptions`](../wiki/types.CursorElementOptions.CursorElementOptions)

**`Property`**

options for this cursor element instance

#### Implementation of

[CursorElement](../wiki/types.CursorElement.CursorElement).[options](../wiki/types.CursorElement.CursorElement#options)

#### Defined in

[UnixCursorElement.ts:25](https://github.com/LucEnden/unix-terminal-emulator/blob/f00e612/src/UnixCursorElement.ts#L25)

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

[UnixCursorElement.ts:40](https://github.com/LucEnden/unix-terminal-emulator/blob/f00e612/src/UnixCursorElement.ts#L40)

___

### remove

▸ **remove**(): `void`

Removes the cursor from the wrapper document

#### Returns

`void`

#### Implementation of

CursorElement.remove

#### Defined in

[UnixCursorElement.ts:33](https://github.com/LucEnden/unix-terminal-emulator/blob/f00e612/src/UnixCursorElement.ts#L33)
