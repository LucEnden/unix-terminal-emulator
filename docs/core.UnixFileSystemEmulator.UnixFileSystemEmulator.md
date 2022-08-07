# Class: UnixFileSystemEmulator

[core/UnixFileSystemEmulator](../wiki/core.UnixFileSystemEmulator).UnixFileSystemEmulator

Emulates a Unix filesystem via methods for managing files and folders, as wel as managing users for permision perposes.
[https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator](https://github.com/LucEnden/unix-terminal-emulator/wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator)

## Implements

- [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator)

## Table of contents

### Constructors

- [constructor](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#constructor)

### Properties

- [fileSystemType](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#filesystemtype)
- [groups](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#groups)
- [homeDir](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#homedir)
- [rootDir](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#rootdir)
- [rootUsr](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#rootusr)
- [users](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#users)

### Methods

- [cd](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#cd)
- [fileHasContent](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#filehascontent)
- [getCurrentDirectory](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#getcurrentdirectory)
- [getFileContent](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#getfilecontent)
- [isDirectory](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#isdirectory)
- [mkdir](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#mkdir)
- [pathExists](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#pathexists)
- [pwd](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#pwd)
- [setFileContent](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#setfilecontent)
- [touch](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#touch)
- [useradd](../wiki/core.UnixFileSystemEmulator.UnixFileSystemEmulator#useradd)

## Constructors

### constructor

• **new UnixFileSystemEmulator**(`user?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user?` | [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser) |

#### Defined in

[src/core/UnixFileSystemEmulator.ts:22](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L22)

## Properties

### fileSystemType

• `Readonly` **fileSystemType**: [`FileSystemType`](../wiki/types.FileSystemType.FileSystemType)

**`Param`**

The type of file system to use

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[fileSystemType](../wiki/types.FileSystemEmulator.FileSystemEmulator#filesystemtype)

#### Defined in

[src/core/UnixFileSystemEmulator.ts:58](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L58)

___

### groups

• `Readonly` **groups**: [`FileSystemGroup`](../wiki/types.FileSystemGroup.FileSystemGroup)[]

**`Param`**

The groups within this file system instance

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[groups](../wiki/types.FileSystemEmulator.FileSystemEmulator#groups)

#### Defined in

[src/core/UnixFileSystemEmulator.ts:57](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L57)

___

### homeDir

• `Readonly` **homeDir**: ``"/home/"``

**`Param`**

The home directory "/home/"

**`Constant`**

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[homeDir](../wiki/types.FileSystemEmulator.FileSystemEmulator#homedir)

#### Defined in

[src/core/UnixFileSystemEmulator.ts:50](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L50)

___

### rootDir

• `Readonly` **rootDir**: ``"/"``

**`Param`**

The root directory "/"

**`Constant`**

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[rootDir](../wiki/types.FileSystemEmulator.FileSystemEmulator#rootdir)

#### Defined in

[src/core/UnixFileSystemEmulator.ts:49](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L49)

___

### rootUsr

• `Readonly` **rootUsr**: [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser)

**`Param`**

The root user, which is the default user of the file system

**`Default`**

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[rootUsr](../wiki/types.FileSystemEmulator.FileSystemEmulator#rootusr)

#### Defined in

[src/core/UnixFileSystemEmulator.ts:51](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L51)

___

### users

• `Readonly` **users**: [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser)[]

**`Param`**

The users within this file system instance

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[users](../wiki/types.FileSystemEmulator.FileSystemEmulator#users)

#### Defined in

[src/core/UnixFileSystemEmulator.ts:56](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L56)

## Methods

### cd

▸ **cd**(`dir`): `string` \| `RangeError`

Emulates the cd command.
https://ss64.com/bash/cd.html

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`string` \| `RangeError`

If the directory exists, returns the new working directory, RangeError otherwise

#### Implementation of

FileSystemEmulator.cd

#### Defined in

[src/core/UnixFileSystemEmulator.ts:178](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L178)

___

### fileHasContent

▸ **fileHasContent**(`file`): `boolean` \| `TypeError`

Checks if a given file has content

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | The file to check if it has content |

#### Returns

`boolean` \| `TypeError`

TypeError if the given file doesnt exist or if ```file``` is a directory, otherwise a boolean value indicating if the file is emtpy.

#### Implementation of

FileSystemEmulator.fileHasContent

#### Defined in

[src/core/UnixFileSystemEmulator.ts:71](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L71)

___

### getCurrentDirectory

▸ **getCurrentDirectory**(): `string`

Gets the current directory, with respect to the users home directory (eg: "~")

#### Returns

`string`

The absolute path to the current directory. If the current directory
is inside the current users home folder, the start of the directory is
replaced with "~".

#### Implementation of

FileSystemEmulator.getCurrentDirectory

#### Defined in

[src/core/UnixFileSystemEmulator.ts:68](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L68)

___

### getFileContent

▸ **getFileContent**(`file`): `string` \| `TypeError`

Gets a given files content

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | The file to get the contents of |

#### Returns

`string` \| `TypeError`

TypeError if the given file doesnt exist, otherwise a string containing the files content.

#### Implementation of

FileSystemEmulator.getFileContent

#### Defined in

[src/core/UnixFileSystemEmulator.ts:84](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L84)

___

### isDirectory

▸ **isDirectory**(`path`): `boolean`

Checks if the given path is a directory (eg: ends with /)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to check |

#### Returns

`boolean`

True if path ends with /, false otherwise

#### Implementation of

FileSystemEmulator.isDirectory

#### Defined in

[src/core/UnixFileSystemEmulator.ts:60](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L60)

___

### mkdir

▸ **mkdir**(`dirNames`): `Error`[]

Emulates the mkdir command.
https://ss64.com/bash/mkdir.html

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dirNames` | `string` | A space delimited string of directories to create |

#### Returns

`Error`[]

An array of errors that occured during the creation of the directories

#### Implementation of

FileSystemEmulator.mkdir

#### Defined in

[src/core/UnixFileSystemEmulator.ts:123](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L123)

___

### pathExists

▸ **pathExists**(`path`): `boolean`

Checks if the path string exists as a node in the filesystem graph

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to check if it exsits |

#### Returns

`boolean`

```true``` if the path string exists as a node in the filesystem graph, ```false``` otherwise

#### Implementation of

FileSystemEmulator.pathExists

#### Defined in

[src/core/UnixFileSystemEmulator.ts:63](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L63)

___

### pwd

▸ **pwd**(): `string`

Emulates the pwd command.
https://ss64.com/bash/pwd.html

#### Returns

`string`

The full absolute path to the current working directory

#### Implementation of

FileSystemEmulator.pwd

#### Defined in

[src/core/UnixFileSystemEmulator.ts:175](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L175)

___

### setFileContent

▸ **setFileContent**(`file`, `content`): `void` \| `TypeError`

Writes the specified content to the given file. Creates the file if it doesnt exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | The file to write the content to. |
| `content` | `string` | The content to write to the file. |

#### Returns

`void` \| `TypeError`

TypeError if the given file was actualy a directory, void if writing the content was succesfull.

#### Implementation of

FileSystemEmulator.setFileContent

#### Defined in

[src/core/UnixFileSystemEmulator.ts:93](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L93)

___

### touch

▸ **touch**(`file`): `void`

Emulates the touch command.
https://ss64.com/bash/touch.html

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | the file to touch |

#### Returns

`void`

#### Implementation of

FileSystemEmulator.touch

#### Defined in

[src/core/UnixFileSystemEmulator.ts:110](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L110)

___

### useradd

▸ **useradd**(`user`): `string` \| `RangeError`

Emulates the useradd command.
https://ss64.com/bash/useradd.html

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser) | The user to add to the filesystem |

#### Returns

`string` \| `RangeError`

Range error if the user already exists, else the full path to the users home directory

#### Implementation of

FileSystemEmulator.useradd

#### Defined in

[src/core/UnixFileSystemEmulator.ts:156](https://github.com/LucEnden/unix-terminal-emulator/blob/604a97a/src/core/UnixFileSystemEmulator.ts#L156)
