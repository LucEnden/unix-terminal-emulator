# Interface: TerminalEvent

[types/TerminalEvent](../wiki/types.TerminalEvent).TerminalEvent

To be internaly used by the terminal emulator. Used during creation and clearing of the event sequence.

## Table of contents

### Properties

- [delayAfter](../wiki/types.TerminalEvent.TerminalEvent#delayafter)
- [fn](../wiki/types.TerminalEvent.TerminalEvent#fn)
- [fnAfter](../wiki/types.TerminalEvent.TerminalEvent#fnafter)

## Properties

### delayAfter

• **delayAfter**: `number`

Time in ms to wait afters the event

#### Defined in

[types/TerminalEvent.ts:12](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/types/TerminalEvent.ts#L12)

___

### fn

• **fn**: (`callback`: () => `void`) => `void`

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

##### Returns

`void`

#### Defined in

[types/TerminalEvent.ts:7](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/types/TerminalEvent.ts#L7)

___

### fnAfter

• **fnAfter**: (`callback`: () => `void`) => `void`

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

##### Returns

`void`

#### Defined in

[types/TerminalEvent.ts:8](https://github.com/LucEnden/unix-terminal-emulator/blob/aabb3e8/src/types/TerminalEvent.ts#L8)
