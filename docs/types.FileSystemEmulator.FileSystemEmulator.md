# Interface: FileSystemEmulator

[types/FileSystemEmulator](../wiki/types.FileSystemEmulator).FileSystemEmulator

Emulates file systems behaviour

## Implemented by

- [`UnixFileSystemEmulator`](../wiki/UnixFileSystemEmulator.UnixFileSystemEmulator)

## Table of contents

### Properties

- [cd](../wiki/types.FileSystemEmulator.FileSystemEmulator#cd)
- [fileHasContent](../wiki/types.FileSystemEmulator.FileSystemEmulator#filehascontent)
- [fileSystemType](../wiki/types.FileSystemEmulator.FileSystemEmulator#filesystemtype)
- [getCurrentDirectory](../wiki/types.FileSystemEmulator.FileSystemEmulator#getcurrentdirectory)
- [getFileContent](../wiki/types.FileSystemEmulator.FileSystemEmulator#getfilecontent)
- [groups](../wiki/types.FileSystemEmulator.FileSystemEmulator#groups)
- [homeDir](../wiki/types.FileSystemEmulator.FileSystemEmulator#homedir)
- [isDirectory](../wiki/types.FileSystemEmulator.FileSystemEmulator#isdirectory)
- [mkdir](../wiki/types.FileSystemEmulator.FileSystemEmulator#mkdir)
- [pathExists](../wiki/types.FileSystemEmulator.FileSystemEmulator#pathexists)
- [pwd](../wiki/types.FileSystemEmulator.FileSystemEmulator#pwd)
- [rootDir](../wiki/types.FileSystemEmulator.FileSystemEmulator#rootdir)
- [rootUsr](../wiki/types.FileSystemEmulator.FileSystemEmulator#rootusr)
- [setFileContent](../wiki/types.FileSystemEmulator.FileSystemEmulator#setfilecontent)
- [touch](../wiki/types.FileSystemEmulator.FileSystemEmulator#touch)
- [useradd](../wiki/types.FileSystemEmulator.FileSystemEmulator#useradd)
- [users](../wiki/types.FileSystemEmulator.FileSystemEmulator#users)

## Properties

### cd

• **cd**: (`dir`: `string`) => `string` \| `RangeError`

#### Type declaration

▸ (`dir`): `string` \| `RangeError`

Emulates the cd command.
https://ss64.com/bash/cd.html

##### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

##### Returns

`string` \| `RangeError`

If the directory exists, returns the new working directory, RangeError otherwise

#### Defined in

[types/FileSystemEmulator.ts:110](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L110)

___

### fileHasContent

• **fileHasContent**: (`file`: `string`) => `boolean` \| `TypeError`

#### Type declaration

▸ (`file`): `boolean` \| `TypeError`

Checks if a given file has content

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | The file to check if it has content |

##### Returns

`boolean` \| `TypeError`

TypeError if the given file doesnt exist or if ```file``` is a directory, otherwise a boolean value indicating if the file is emtpy.

#### Defined in

[types/FileSystemEmulator.ts:65](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L65)

___

### fileSystemType

• `Readonly` **fileSystemType**: [`FileSystemType`](../wiki/types.FileSystemType.FileSystemType)

**`Param`**

The type of file system to use

#### Defined in

[types/FileSystemEmulator.ts:40](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L40)

___

### getCurrentDirectory

• **getCurrentDirectory**: () => `string`

#### Type declaration

▸ (): `string`

Gets the current directory, with respect to the users home directory (eg: "~")

##### Returns

`string`

The absolute path to the current directory. If the current directory
is inside the current users home folder, the start of the directory is
replaced with "~".

#### Defined in

[types/FileSystemEmulator.ts:47](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L47)

___

### getFileContent

• **getFileContent**: (`file`: `string`) => `string` \| `TypeError`

#### Type declaration

▸ (`file`): `string` \| `TypeError`

Gets a given files content

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | The file to get the contents of |

##### Returns

`string` \| `TypeError`

TypeError if the given file doesnt exist, otherwise a string containing the files content.

#### Defined in

[types/FileSystemEmulator.ts:71](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L71)

___

### groups

• `Readonly` **groups**: [`FileSystemGroup`](../wiki/types.FileSystemGroup.FileSystemGroup)[]

**`Param`**

The groups within this file system instance

#### Defined in

[types/FileSystemEmulator.ts:36](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L36)

___

### homeDir

• `Readonly` **homeDir**: ``"/home/"``

**`Param`**

The home directory "/home/"

**`Constant`**

#### Defined in

[types/FileSystemEmulator.ts:18](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L18)

___

### isDirectory

• **isDirectory**: (`path`: `string`) => `boolean`

#### Type declaration

▸ (`path`): `boolean`

Checks if the given path is a directory (eg: ends with /)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to check |

##### Returns

`boolean`

True if path ends with /, false otherwise

#### Defined in

[types/FileSystemEmulator.ts:59](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L59)

___

### mkdir

• **mkdir**: (`dirNames`: `string`) => `Error`[]

#### Type declaration

▸ (`dirNames`): `Error`[]

Emulates the mkdir command.
https://ss64.com/bash/mkdir.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dirNames` | `string` | A space delimited string of directories to create |

##### Returns

`Error`[]

An array of errors that occured during the creation of the directories

#### Defined in

[types/FileSystemEmulator.ts:91](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L91)

___

### pathExists

• **pathExists**: (`path`: `string`) => `boolean`

#### Type declaration

▸ (`path`): `boolean`

Checks if the path string exists as a node in the filesystem graph

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to check if it exsits |

##### Returns

`boolean`

```true``` if the path string exists as a node in the filesystem graph, ```false``` otherwise

#### Defined in

[types/FileSystemEmulator.ts:53](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L53)

___

### pwd

• **pwd**: () => `string`

#### Type declaration

▸ (): `string`

Emulates the pwd command.
https://ss64.com/bash/pwd.html

##### Returns

`string`

The full absolute path to the current working directory

#### Defined in

[types/FileSystemEmulator.ts:104](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L104)

___

### rootDir

• `Readonly` **rootDir**: ``"/"``

**`Param`**

The root directory "/"

**`Constant`**

#### Defined in

[types/FileSystemEmulator.ts:13](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L13)

___

### rootUsr

• `Readonly` **rootUsr**: [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser)

**`Param`**

The root user, which is the default user of the file system

**`Default`**

#### Defined in

[types/FileSystemEmulator.ts:28](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L28)

___

### setFileContent

• **setFileContent**: (`file`: `string`, `content`: `string`) => `void` \| `TypeError`

#### Type declaration

▸ (`file`, `content`): `void` \| `TypeError`

Writes the specified content to the given file. Creates the file if it doesnt exist.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | The file to write the content to. |
| `content` | `string` | The content to write to the file. |

##### Returns

`void` \| `TypeError`

TypeError if the given file was actualy a directory, void if writing the content was succesfull.

#### Defined in

[types/FileSystemEmulator.ts:78](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L78)

___

### touch

• **touch**: (`file`: `string`) => `void`

#### Type declaration

▸ (`file`): `void`

Emulates the touch command.
https://ss64.com/bash/touch.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | the file to touch |

##### Returns

`void`

#### Defined in

[types/FileSystemEmulator.ts:84](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L84)

___

### useradd

• **useradd**: (`user`: [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser)) => `string` \| `RangeError`

#### Type declaration

▸ (`user`): `string` \| `RangeError`

Emulates the useradd command.
https://ss64.com/bash/useradd.html

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser) | The user to add to the filesystem |

##### Returns

`string` \| `RangeError`

Range error if the user already exists, else the full path to the users home directory

#### Defined in

[types/FileSystemEmulator.ts:98](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L98)

___

### users

• `Readonly` **users**: [`FileSystemUser`](../wiki/types.FileSystemUser.FileSystemUser)[]

**`Param`**

The users within this file system instance

#### Defined in

[types/FileSystemEmulator.ts:32](https://github.com/LucEnden/unix-terminal-emulator/blob/9acf7af/src/types/FileSystemEmulator.ts#L32)
