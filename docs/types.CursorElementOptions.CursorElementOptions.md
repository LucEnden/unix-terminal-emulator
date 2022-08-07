# Interface: CursorElementOptions

[types/CursorElementOptions](../wiki/types.CursorElementOptions).CursorElementOptions

Options for customizing the cursor element

## Hierarchy

- **`CursorElementOptions`**

  ↳ [`StdoutEmulatorOptions`](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions)

  ↳ [`TerminalEmulatorOptions`](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions)

## Table of contents

### Properties

- [cursorChar](../wiki/types.CursorElementOptions.CursorElementOptions#cursorchar)
- [cursorCss](../wiki/types.CursorElementOptions.CursorElementOptions#cursorcss)

## Properties

### cursorChar

• **cursorChar**: `string`

The charecter(s) to use as the cursor

**`Default`**

"|"

#### Defined in

[src/types/CursorElementOptions.ts:9](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/types/CursorElementOptions.ts#L9)

___

### cursorCss

• **cursorCss**: `string`

The css class to give to the cursor element. There are 2 css classes shipped with this package which animate the cursor:  
```"terminal___cursor___static"```: makes it blink instantly  
```"terminal___cursor___fluid"```: makes it oscilate gradually

**`Default`**

"terminal___cursor___static"

#### Defined in

[src/types/CursorElementOptions.ts:16](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/types/CursorElementOptions.ts#L16)
