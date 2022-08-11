import FileSystemUser from "../../src/types/FileSystemUser"
import UnixFileSystemEmulator from "../../src/core/UnixFileSystemEmulator"

test("useradd => should return an error if adding root user", () => {
	const fs = new UnixFileSystemEmulator()
	const secondRootUser: FileSystemUser = {
		name: "root",
		password: "",
		homeDir: ""
	}

	const adduserOutput = fs.useradd(secondRootUser)

	expect(adduserOutput).toBeInstanceOf(RangeError)
})

test("pwd => expect working directory to be /home/root/ after instanciating without a user specified, or /home/{user}/ if user is specified with homeDir = undefined", () => {
	const fsWithoutUser = new UnixFileSystemEmulator()
	const user: FileSystemUser = {
		name: "user",
		password: "",
		homeDir: undefined
	}
	const fsWithUser = new UnixFileSystemEmulator(user)

	const rootPwd = fsWithoutUser.pwd()
	const userPwd = fsWithUser.pwd()

	expect(rootPwd).toBe("/home/root/")
	expect(userPwd).toBe("/home/" + user.name + "/")
})

test("cd => shoulld return range error when switching to a non existing directory", () => {
	const fs = new UnixFileSystemEmulator()
	const noneExistingDirectory = "NON/EXISTING/DIRECTORY"

	const cdOutput = fs.cd(noneExistingDirectory)

	expect(cdOutput).toBeInstanceOf(RangeError)
})

test("cd + pwd => test different relative paths", () => {
	const fs = new UnixFileSystemEmulator()
	const pathShouldEndInRootHomeDir = "./"
	const pathShouldEndInHomeDir = "../"
	const pathShouldEndInRootDir = "../../"

	const initialPath = fs.pwd()
	fs.cd(pathShouldEndInRootHomeDir)
	const afterCd_pathShouldEndInRootHomeDir = fs.pwd()
	fs.cd(initialPath)
	const backToInitialPath = fs.pwd()
	fs.cd(pathShouldEndInHomeDir)
	const afterCd_pathShouldEndInHomeDir = fs.pwd()
	fs.cd(initialPath)
	fs.cd(pathShouldEndInRootDir)
	const afterCd_pathShouldEndInRootDir = fs.pwd()

	expect(initialPath).toBe("/home/root/")
	expect(backToInitialPath).toBe(initialPath)
	expect(afterCd_pathShouldEndInRootHomeDir).toBe("/home/root/")
	expect(afterCd_pathShouldEndInRootHomeDir).toBe("/home/root/")
	expect(afterCd_pathShouldEndInHomeDir).toBe("/home/")
	expect(afterCd_pathShouldEndInRootDir).toBe("/")
})

test("mkdir => create N invalid directories and expect the output to contain N errors", () => {
	const fs = new UnixFileSystemEmulator()
	const invalidDir1 = "/home/root/INVALID/DIR/1"
	const invalidDir2 = "/INVALID/DIR/2"
	const invalidDir3 = "/home/INVALID/DIR/3"
	const invalidDir4 = "./INVALID/DIR/4"
	const invalidDir5 = "../INVALID/DIR/5"
	const invalidDirs = [invalidDir1, invalidDir2, invalidDir3, invalidDir4, invalidDir5]

	const mkdirOutput = fs.mkdir(invalidDirs.join(" "))

	expect(mkdirOutput.length).toEqual(invalidDirs.length)
})

test("mkdir => create N valid directories and expect the output to contain 0 errors", () => {
	const fs = new UnixFileSystemEmulator()
	const validDir1 = "/home/root/VALID_DIR_1"
	const validDir2 = "/VALID_DIR_2"
	const validDir3 = "/home/VALID_DIR_3"
	const validDir4 = "./VALID_DIR_4"
	const validDir5 = "../VALID_DIR_5"
	const validDirs = [validDir1, validDir2, validDir3, validDir4, validDir5]

	const mkdirOutput = fs.mkdir(validDirs.join(" "))

	expect(mkdirOutput.length).toEqual(0)
})

test("touch => test relative and absolute file paths", () => {
	const fs = new UnixFileSystemEmulator()
	const relativeFile = "relativeFile"
	const absoluteFile = "/absoluteFile"

	fs.touch(relativeFile)
	fs.touch(absoluteFile)
})

test("touch + pathExists => expect fille to be created if it doesn't exist, else only the timestamp should be updated", () => {
	const fs = new UnixFileSystemEmulator()
	const fileToBeCreate = "/home/root/textfile"

	var fileShouldNotExist = fs.pathExists(fileToBeCreate)
	fs.touch(fileToBeCreate)
	var fileShouldExist = fs.pathExists(fileToBeCreate)

	expect(fileShouldNotExist).toBeFalsy()
	expect(fileShouldExist).toBeTruthy()
})

test("setFileContent + fileHasContent => expect TypeError for non existing file and directory string, false for existing empty file and true for existing non empty file", () => {
	const fs = new UnixFileSystemEmulator()
	const nonExistingFile = "NON/EXISTING/FILE"
	const directoryString = "/home/"
	const existingFileWithContent = "/home/root/fileWithContent"
	const existingFileWithoutContent = "/home/root/fileWithoutContent"
	const contentToWrite = "content"

	fs.setFileContent(existingFileWithContent, contentToWrite)
	fs.touch(existingFileWithoutContent)

	expect(fs.fileHasContent(nonExistingFile)).toBeInstanceOf(TypeError)
	expect(fs.setFileContent(directoryString, contentToWrite)).toBeInstanceOf(TypeError)
	expect(fs.fileHasContent(directoryString)).toBeInstanceOf(TypeError)
	expect(fs.fileHasContent(existingFileWithContent)).toBeTruthy()
	expect(fs.fileHasContent(existingFileWithoutContent)).toBeFalsy()
})

test("touch + getFileContent => expect TypeError for non existing file, text content for existing files", () => {
	const fs = new UnixFileSystemEmulator()
	const nonExistingFile = "NON/EXISTING/FILE"
	const existingFileWithContent = "/home/root/fileWithContent"
	const existingFileWithoutContent = "/home/root/fileWithoutContent"
	const contentWithText = "content"
	const contentWithoutText = ""

	fs.touch(existingFileWithContent)
	fs.setFileContent(existingFileWithContent, contentWithText)
	fs.touch(existingFileWithoutContent)

	expect(fs.getFileContent(nonExistingFile)).toBeInstanceOf(TypeError)
	expect(fs.getFileContent(existingFileWithContent)).toBe(contentWithText)
	expect(fs.getFileContent(existingFileWithoutContent)).toBe(contentWithoutText)
})

test("touch + ls => expect output to contain equal amount of items as files created with touch", () => {
	const fs = new UnixFileSystemEmulator()
	const filesToCreate = "a b c d e f g"

	fs.touch(filesToCreate)
	const lsOutput = fs.ls()

	expect(lsOutput.length).toEqual(filesToCreate.split(" ").length)
})