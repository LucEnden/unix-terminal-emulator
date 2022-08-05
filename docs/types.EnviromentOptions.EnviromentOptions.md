# Interface: EnviromentOptions

[types/EnviromentOptions](../wiki/types.EnviromentOptions).EnviromentOptions

Customization options for the enviroment to be used within the terminal emulator

## Table of contents

### Properties

- [hostname](../wiki/types.EnviromentOptions.EnviromentOptions#hostname)
- [print](../wiki/types.EnviromentOptions.EnviromentOptions#print)
- [user](../wiki/types.EnviromentOptions.EnviromentOptions#user)

## Properties

### hostname

• **hostname**: `string`

**`Param`**

The hostname for this terminal emulator

#### Defined in

[types/EnviromentOptions.ts:10](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/EnviromentOptions.ts#L10)

___

### print

• **print**: () => `string`

#### Type declaration

▸ (): `string`

Returns the enviroment line to be use at the start of a new empty terminal input line

##### Returns

`string`

A formated string: ```username@hostname:```

#### Defined in

[types/EnviromentOptions.ts:19](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/EnviromentOptions.ts#L19)

___

### user

• **user**: [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser)

**`Param`**

The user for this terminal emulator. When specified, this user will be added to the filesystem

#### Defined in

[types/EnviromentOptions.ts:14](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/EnviromentOptions.ts#L14)
