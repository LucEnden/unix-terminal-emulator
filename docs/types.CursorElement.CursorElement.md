# Interface: CursorElement

[types/CursorElement](../wiki/types.CursorElement).CursorElement

Emulates a cursor (like a blinking straight line) inside the browser

## Implemented by

- [`UnixCursorElement`](../wiki/core.UnixCursorElement.UnixCursorElement)

## Table of contents

### Properties

- [append](../wiki/types.CursorElement.CursorElement#append)
- [options](../wiki/types.CursorElement.CursorElement#options)
- [remove](../wiki/types.CursorElement.CursorElement#remove)

## Properties

### append

• **append**: (`parent`: `HTMLElement`) => `void`

#### Type declaration

▸ (`parent`): `void`

Appends the cursor element to ```parent```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | `HTMLElement` | The parent to append the cursor element to |

##### Returns

`void`

#### Defined in

[src/types/CursorElement.ts:19](https://github.com/LucEnden/unix-terminal-emulator/blob/1afca6c/src/types/CursorElement.ts#L19)

___

### options

• `Readonly` **options**: [`CursorElementOptions`](../wiki/types.CursorElementOptions.CursorElementOptions)

**`Property`**

options for this cursor element instance

#### Defined in

[src/types/CursorElement.ts:10](https://github.com/LucEnden/unix-terminal-emulator/blob/1afca6c/src/types/CursorElement.ts#L10)

___

### remove

• **remove**: () => `void`

#### Type declaration

▸ (): `void`

Removes the cursor from the document

##### Returns

`void`

#### Defined in

[src/types/CursorElement.ts:14](https://github.com/LucEnden/unix-terminal-emulator/blob/1afca6c/src/types/CursorElement.ts#L14)
