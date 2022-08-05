# Class: UnixFileSystemEmulator

[UnixFileSystemEmulator](../wiki/UnixFileSystemEmulator).UnixFileSystemEmulator

Emulates a Unix filesystem via methods for managing files and folders, as wel as managing users for permision perposes.
[https://github.com/LucEnden/unix-terminal-emulator/wiki/UnixFileSystemEmulator.UnixFileSystemEmulator](https://github.com/LucEnden/unix-terminal-emulator/wiki/UnixFileSystemEmulator.UnixFileSystemEmulator)

## Implements

- [`FileSystemEmulator`](../wiki/types.FileSystemEmulator.FileSystemEmulator)

## Table of contents

### Constructors

- [constructor](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#constructor)

### Properties

- [fileSystemType](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#filesystemtype)
- [groups](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#groups)
- [homeDir](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#homedir)
- [rootDir](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#rootdir)
- [rootUsr](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#rootusr)
- [users](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#users)

### Methods

- [cd](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#cd)
- [fileHasContent](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#filehascontent)
- [getCurrentDirectory](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#getcurrentdirectory)
- [getFileContent](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#getfilecontent)
- [isDirectory](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#isdirectory)
- [mkdir](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#mkdir)
- [pathExists](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#pathexists)
- [pwd](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#pwd)
- [setFileContent](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#setfilecontent)
- [touch](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#touch)
- [useradd](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator#useradd)

## Constructors

### constructor

• **new UnixFileSystemEmulator**(`user?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user?` | [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser) |

#### Defined in

[UnixFileSystemEmulator.ts:22](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L22)

## Properties

### fileSystemType

• `Readonly` **fileSystemType**: [`FileSystemType`](../wiki/types.FileSystemType.FileSystemType)

**`Param`**

The type of file system to use

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[fileSystemType](../wiki/types.FileSystemEmulator.FileSystemEmulator#filesystemtype)

#### Defined in

[UnixFileSystemEmulator.ts:58](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L58)

___

### groups

• `Readonly` **groups**: [`FileSystemGroup`](../wiki/types.FileSystemGroup.FileSystemGroup)[]

**`Param`**

The groups within this file system instance

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[groups](../wiki/types.FileSystemEmulator.FileSystemEmulator#groups)

#### Defined in

[UnixFileSystemEmulator.ts:57](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L57)

___

### homeDir

• `Readonly` **homeDir**: ``"/home/"``

**`Param`**

The home directory "/home/"

**`Constant`**

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[homeDir](../wiki/types.FileSystemEmulator.FileSystemEmulator#homedir)

#### Defined in

[UnixFileSystemEmulator.ts:50](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L50)

___

### rootDir

• `Readonly` **rootDir**: ``"/"``

**`Param`**

The root directory "/"

**`Constant`**

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[rootDir](../wiki/types.FileSystemEmulator.FileSystemEmulator#rootdir)

#### Defined in

[UnixFileSystemEmulator.ts:49](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L49)

___

### rootUsr

• `Readonly` **rootUsr**: [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser)

**`Param`**

The root user, which is the default user of the file system

**`Default`**

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[rootUsr](../wiki/types.FileSystemEmulator.FileSystemEmulator#rootusr)

#### Defined in

[UnixFileSystemEmulator.ts:51](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L51)

___

### users

• `Readonly` **users**: [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser)[]

**`Param`**

The users within this file system instance

#### Implementation of

[FileSystemEmulator](../wiki/types.FileSystemEmulator.FileSystemEmulator).[users](../wiki/types.FileSystemEmulator.FileSystemEmulator#users)

#### Defined in

[UnixFileSystemEmulator.ts:56](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L56)

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

[UnixFileSystemEmulator.ts:178](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L178)

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

[UnixFileSystemEmulator.ts:71](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L71)

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

[UnixFileSystemEmulator.ts:68](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L68)

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

[UnixFileSystemEmulator.ts:84](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L84)

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

[UnixFileSystemEmulator.ts:60](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L60)

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

[UnixFileSystemEmulator.ts:123](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L123)

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

[UnixFileSystemEmulator.ts:63](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L63)

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

[UnixFileSystemEmulator.ts:175](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L175)

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

[UnixFileSystemEmulator.ts:93](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L93)

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

[UnixFileSystemEmulator.ts:110](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L110)

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

[UnixFileSystemEmulator.ts:156](https://github.com/LucEnden/unix-terminal-emulator/blob/4d05a56/src/UnixFileSystemEmulator.ts#L156)
