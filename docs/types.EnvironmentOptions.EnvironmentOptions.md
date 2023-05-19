# Interface: EnvironmentOptions

[types/EnvironmentOptions](../wiki/types.EnvironmentOptions).EnvironmentOptions

Customization options for the environment to be used within the terminal emulator

## Table of contents

### Properties

- [hostname](../wiki/types.EnvironmentOptions.EnvironmentOptions#hostname)
- [print](../wiki/types.EnvironmentOptions.EnvironmentOptions#print)
- [user](../wiki/types.EnvironmentOptions.EnvironmentOptions#user)

## Properties

### hostname

• **hostname**: `string`

**`Param`**

The hostname for this terminal emulator

#### Defined in

[src/types/EnvironmentOptions.ts:10](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/EnvironmentOptions.ts#L10)

___

### print

• **print**: () => `string`

#### Type declaration

▸ (): `string`

Returns the environment line to be use at the start of a new empty terminal input line

##### Returns

`string`

A formated string: ```username@hostname:```

#### Defined in

[src/types/EnvironmentOptions.ts:19](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/EnvironmentOptions.ts#L19)

___

### user

• **user**: [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser)

**`Param`**

The user for this terminal emulator. When specified, this user will be added to the filesystem

#### Defined in

[src/types/EnvironmentOptions.ts:14](https://github.com/LucEnden/unix-terminal-emulator/blob/6b6ca89/src/types/EnvironmentOptions.ts#L14)
