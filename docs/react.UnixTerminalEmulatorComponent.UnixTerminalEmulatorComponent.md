# Class: UnixTerminalEmulatorComponent

[react/UnixTerminalEmulatorComponent](../wiki/react.UnixTerminalEmulatorComponent).UnixTerminalEmulatorComponent

Emulates a unix terminal by building an event sequence of commands and timings which gets executed when the run method is called.
[https://github.com/LucEnden/unix-terminal-emulator/wiki/react.UnixTerminalEmulator.UnixTerminalEmulator](https://github.com/LucEnden/unix-terminal-emulator/wiki/react.UnixTerminalEmulator.UnixTerminalEmulator)

## Hierarchy

- `Component`<[`Props`](../wiki/react.Props.Props)\>

  ↳ **`UnixTerminalEmulatorComponent`**

## Table of contents

### Constructors

- [constructor](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#constructor)

### Properties

- [context](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#context)
- [props](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#props)
- [refs](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#refs)
- [state](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#state)
- [contextType](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#contexttype)

### Methods

- [UNSAFE\_componentWillMount](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#unsafe_componentwillupdate)
- [componentDidCatch](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#componentdidcatch)
- [componentDidMount](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#componentdidmount)
- [componentDidUpdate](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#componentdidupdate)
- [componentWillMount](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#componentwillmount)
- [componentWillReceiveProps](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#componentwillreceiveprops)
- [componentWillUnmount](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#componentwillunmount)
- [componentWillUpdate](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#componentwillupdate)
- [forceUpdate](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#forceupdate)
- [getSnapshotBeforeUpdate](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#getsnapshotbeforeupdate)
- [render](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#render)
- [setState](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#setstate)
- [shouldComponentUpdate](../wiki/react.UnixTerminalEmulatorComponent.UnixTerminalEmulatorComponent#shouldcomponentupdate)

## Constructors

### constructor

• **new UnixTerminalEmulatorComponent**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Props`](../wiki/react.Props.Props) \| `Readonly`<[`Props`](../wiki/react.Props.Props)\> |

#### Inherited from

React.Component<Props\>.constructor

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:451

• **new UnixTerminalEmulatorComponent**(`props`, `context`)

**`Deprecated`**

**`See`**

https://legacy.reactjs.org/docs/legacy-context.html

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Props`](../wiki/react.Props.Props) |
| `context` | `any` |

#### Inherited from

React.Component<Props\>.constructor

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:456

## Properties

### context

• **context**: `unknown`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`See`**

https://react.dev/reference/react/Component#context

#### Inherited from

React.Component.context

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:449

___

### props

• `Readonly` **props**: `Readonly`<[`Props`](../wiki/react.Props.Props)\>

#### Inherited from

React.Component.props

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:469

___

### refs

• **refs**: `Object`

**`Deprecated`**

https://legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: `ReactInstance`

#### Inherited from

React.Component.refs

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:475

___

### state

• **state**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `instance` | `undefined` \| [`TerminalEmulator`](../wiki/types.TerminalEmulator.TerminalEmulator) |

#### Overrides

React.Component.state

#### Defined in

src/react/UnixTerminalEmulatorComponent.tsx:11

___

### contextType

▪ `Static` `Optional` **contextType**: `Context`<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`See`**

https://react.dev/reference/react/Component#static-contexttype

#### Inherited from

React.Component.contextType

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:432

## Methods

### UNSAFE\_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use componentDidMount or the constructor instead

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillMount

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:666

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use static getDerivedStateFromProps instead

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<[`Props`](../wiki/react.Props.Props)\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillReceiveProps

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:698

___

### UNSAFE\_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use getSnapshotBeforeUpdate instead

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<[`Props`](../wiki/react.Props.Props)\> |
| `nextState` | `Readonly`<{}\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillUpdate

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:726

___

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

React.Component.componentDidCatch

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:595

___

### componentDidMount

▸ **componentDidMount**(): `void`

#### Returns

`void`

#### Overrides

React.Component.componentDidMount

#### Defined in

src/react/UnixTerminalEmulatorComponent.tsx:16

___

### componentDidUpdate

▸ **componentDidUpdate**(`prevProps`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | [`Props`](../wiki/react.Props.Props) |

#### Returns

`void`

#### Overrides

React.Component.componentDidUpdate

#### Defined in

src/react/UnixTerminalEmulatorComponent.tsx:26

___

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.componentWillMount

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:652

___

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<[`Props`](../wiki/react.Props.Props)\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentWillReceiveProps

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:681

___

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

React.Component.componentWillUnmount

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:590

___

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<[`Props`](../wiki/react.Props.Props)\> |
| `nextState` | `Readonly`<{}\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentWillUpdate

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:711

___

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.Component.forceUpdate

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:466

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<[`Props`](../wiki/react.Props.Props)\> |
| `prevState` | `Readonly`<{}\> |

#### Returns

`any`

#### Inherited from

React.Component.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:631

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

React.Component.render

#### Defined in

src/react/UnixTerminalEmulatorComponent.tsx:38

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | ``null`` \| {} \| (`prevState`: `Readonly`<{}\>, `props`: `Readonly`<[`Props`](../wiki/react.Props.Props)\>) => ``null`` \| {} \| `Pick`<{}, `K`\> \| `Pick`<{}, `K`\> |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.Component.setState

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:461

___

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<[`Props`](../wiki/react.Props.Props)\> |
| `nextState` | `Readonly`<{}\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

React.Component.shouldComponentUpdate

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:585
