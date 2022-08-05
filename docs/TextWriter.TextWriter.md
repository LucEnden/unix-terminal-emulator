# Class: TextWriter

[TextWriter](../wiki/TextWriter).TextWriter

## Table of contents

### Constructors

- [constructor](../wiki/TextWriter.TextWriter#constructor)

### Methods

- [eraseFromElement](../wiki/TextWriter.TextWriter#erasefromelement)
- [writeToElement](../wiki/TextWriter.TextWriter#writetoelement)

## Constructors

### constructor

• **new TextWriter**()

## Methods

### eraseFromElement

▸ **eraseFromElement**(`e`, `n`, `s?`, `beforeChar?`, `afterChar?`, `callback?`, `i?`): `void`

Erases N characters from the end of an HTML element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `e` | `HTMLElement` | `undefined` | the element to erase the characters from |
| `n` | `number` | `undefined` | the amount of charecters to erase |
| `s` | `number` \| ``"neutral"`` | `"neutral"` | the speed at which to erase the charecters |
| `beforeChar?` | () => `void` | `undefined` | if not undefined, gets called before erasing any character |
| `afterChar?` | () => `void` | `undefined` | if not undefined, gets called after erasing any character |
| `callback?` | () => `void` | `undefined` | if not undefined, gets called when done erasing |
| `i` | `number` | `0` | for recursive perposes, should not be set manualy |

#### Returns

`void`

#### Defined in

[TextWriter.ts:15](https://github.com/LucEnden/unix-terminal-emulator/blob/f00e612/src/TextWriter.ts#L15)

___

### writeToElement

▸ **writeToElement**(`e`, `t`, `s?`, `beforeChar?`, `afterChar?`, `callback?`, `i?`): `void`

Writes text to the end of an HTML element. Supports plain text, smileys and HTML entities.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `e` | `HTMLElement` | `undefined` | element to write to |
| `t` | `string` | `undefined` | the text to write |
| `s` | `number` \| ``"neutral"`` | `"neutral"` | the speed at which to write each character in miliseconds, where "neutral" is a random integer between 80 and 120 and 0 is instantly |
| `beforeChar?` | () => `void` | `undefined` | if not undefined, gets called before writing any character |
| `afterChar?` | () => `void` | `undefined` | if not undefined, gets called after writing any character |
| `callback?` | () => `void` | `undefined` | if not undefined, gets called when done writing |
| `i` | `number` | `0` | for recursive perposes, should not be set manualy |

#### Returns

`void`

#### Defined in

[TextWriter.ts:45](https://github.com/LucEnden/unix-terminal-emulator/blob/f00e612/src/TextWriter.ts#L45)
