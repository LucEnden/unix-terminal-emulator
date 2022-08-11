# Interface: TerminalEmulatorOptions

[types/TerminalEmulatorOptions](../wiki/types.TerminalEmulatorOptions).TerminalEmulatorOptions

Options that allow customization for the TerminalEmulator instance

## Hierarchy

- [`WrapperElementOptions`](../wiki/types.WrapperElementOptions.WrapperElementOptions)

- [`CursorElementOptions`](../wiki/types.CursorElementOptions.CursorElementOptions)

- [`StdoutEmulatorOptions`](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions)

- [`VimOptions`](../wiki/types.VimOptions.VimOptions)

  ↳ **`TerminalEmulatorOptions`**

## Table of contents

### Properties

- [cursorChar](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions#cursorchar)
- [cursorCss](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions#cursorcss)
- [environment](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions#environment)
- [stdoutCss](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions#stdoutcss)
- [vimBarCss](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions#vimbarcss)
- [vimBarLeftCss](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions#vimbarleftcss)
- [vimBarRightCss](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions#vimbarrightcss)
- [vimCss](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions#vimcss)
- [wrapperCss](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions#wrappercss)
- [wrapperId](../wiki/types.TerminalEmulatorOptions.TerminalEmulatorOptions#wrapperid)

## Properties

### cursorChar

• **cursorChar**: `string`

The charecter(s) to use as the cursor

**`Default`**

"|"

#### Inherited from

[StdoutEmulatorOptions](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions).[cursorChar](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions#cursorchar)

#### Defined in

[src/types/CursorElementOptions.ts:9](https://github.com/LucEnden/unix-terminal-emulator/blob/70224fc/src/types/CursorElementOptions.ts#L9)

___

### cursorCss

• **cursorCss**: `string`

The css class to give to the cursor element. There are 2 css classes shipped with this package which animate the cursor:  
```"terminal___cursor___static"```: makes it blink instantly  
```"terminal___cursor___fluid"```: makes it oscilate gradually

**`Default`**

"terminal___cursor___static"

#### Inherited from

[StdoutEmulatorOptions](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions).[cursorCss](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions#cursorcss)

#### Defined in

[src/types/CursorElementOptions.ts:16](https://github.com/LucEnden/unix-terminal-emulator/blob/70224fc/src/types/CursorElementOptions.ts#L16)

___

### environment

• `Optional` **environment**: [`EnvironmentOptions`](../wiki/types.EnvironmentOptions.EnvironmentOptions)

#### Defined in

[src/types/TerminalEmulatorOptions.ts:11](https://github.com/LucEnden/unix-terminal-emulator/blob/70224fc/src/types/TerminalEmulatorOptions.ts#L11)

___

### stdoutCss

• **stdoutCss**: `string`

The CSS class to give to the generated stdout element

**`Default`**

"terminal___emulator___stdout"

#### Inherited from

[StdoutEmulatorOptions](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions).[stdoutCss](../wiki/types.StdoutEmulatorOptions.StdoutEmulatorOptions#stdoutcss)

#### Defined in

[src/types/StdoutEmulatorOptions.ts:11](https://github.com/LucEnden/unix-terminal-emulator/blob/70224fc/src/types/StdoutEmulatorOptions.ts#L11)

___

### vimBarCss

• `Readonly` **vimBarCss**: ``"vim___emulator___bar"``

The CSS to apply to the vim commandbar wrapper element

**`Constant`**

#### Inherited from

[VimOptions](../wiki/types.VimOptions.VimOptions).[vimBarCss](../wiki/types.VimOptions.VimOptions#vimbarcss)

#### Defined in

[src/types/VimCommandBarOptions.ts:6](https://github.com/LucEnden/unix-terminal-emulator/blob/70224fc/src/types/VimCommandBarOptions.ts#L6)

___

### vimBarLeftCss

• `Readonly` **vimBarLeftCss**: ``"vim___emulator___bar___left"``

The CSS to apply to the left inner elements of the vim commandba element

**`Constant`**

#### Inherited from

[VimOptions](../wiki/types.VimOptions.VimOptions).[vimBarLeftCss](../wiki/types.VimOptions.VimOptions#vimbarleftcss)

#### Defined in

[src/types/VimCommandBarOptions.ts:11](https://github.com/LucEnden/unix-terminal-emulator/blob/70224fc/src/types/VimCommandBarOptions.ts#L11)

___

### vimBarRightCss

• `Readonly` **vimBarRightCss**: ``"vim___emulator___bar___right"``

The CSS to apply to the right inner elements of the vim commandba element

**`Constant`**

#### Inherited from

[VimOptions](../wiki/types.VimOptions.VimOptions).[vimBarRightCss](../wiki/types.VimOptions.VimOptions#vimbarrightcss)

#### Defined in

[src/types/VimCommandBarOptions.ts:16](https://github.com/LucEnden/unix-terminal-emulator/blob/70224fc/src/types/VimCommandBarOptions.ts#L16)

___

### vimCss

• `Readonly` **vimCss**: ``"vim___emulator___wrapper"``

The CSS to apply to the vim element

**`Constant`**

#### Inherited from

[VimOptions](../wiki/types.VimOptions.VimOptions).[vimCss](../wiki/types.VimOptions.VimOptions#vimcss)

#### Defined in

[src/types/VimOptions.ts:14](https://github.com/LucEnden/unix-terminal-emulator/blob/70224fc/src/types/VimOptions.ts#L14)

___

### wrapperCss

• **wrapperCss**: `string`

The CSS class to give to the wrapper element

**`Default`**

"terminal___emulator___wrapper"

#### Inherited from

[WrapperElementOptions](../wiki/types.WrapperElementOptions.WrapperElementOptions).[wrapperCss](../wiki/types.WrapperElementOptions.WrapperElementOptions#wrappercss)

#### Defined in

[src/types/WrapperElementOptions.ts:14](https://github.com/LucEnden/unix-terminal-emulator/blob/70224fc/src/types/WrapperElementOptions.ts#L14)

___

### wrapperId

• **wrapperId**: `string`

The ID to give to the wrapper element

**`Default`**

"terminal___emulator___wrapper"

#### Inherited from

[WrapperElementOptions](../wiki/types.WrapperElementOptions.WrapperElementOptions).[wrapperId](../wiki/types.WrapperElementOptions.WrapperElementOptions#wrapperid)

#### Defined in

[src/types/WrapperElementOptions.ts:9](https://github.com/LucEnden/unix-terminal-emulator/blob/70224fc/src/types/WrapperElementOptions.ts#L9)
