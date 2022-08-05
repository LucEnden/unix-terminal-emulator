import TextWriter from "./TextWriter"
import FileSystemEmulator from "./types/FileSystemEmulator"
import StdoutEmulator from "./types/StdoutEmulator"
import VimEmulator from "./types/VimEmulator"
import VimOptions from "./types/VimOptions"
import { TextEncoder } from 'util';

/**
 * Emulates vim by allowing for writing of text, use basic vim commands and updateing the vim bar accordingly.
 * {@link https://github.com/LucEnden/unix-terminal-emulator/wiki/UnixVimEmulator.UnixVimEmulator}
 */
class UnixVimEmulator implements VimEmulator {
	private wrapper: HTMLElement | undefined
	private writer: TextWriter = new TextWriter()
	private prevStdoutContent: string = ""
	private currentFilename: string = ""
	private currentFileIsNew: boolean = false
	private cursorPosX: number = 0
	private cursorPosY: number = 0

	constructor(options?: VimOptions) {
		if (options) {
			this.options = {
				...this.options,
				...options,
			}
		}

		this.wrapperElement = document.createElement("div")
		this.wrapperElement.classList.add(this.options.vimCss)

		this.vimBar = document.createElement("div")
		this.vimBar.classList.add(this.options.vimBarCss)

		this.fileNameElement = document.createElement("span")
		this.fileNameElement.classList.add(this.options.vimBarLeftCss)
		this.vimBar.appendChild(this.fileNameElement)

		this.fileLineCountElement = document.createElement("span")
		this.fileLineCountElement.classList.add(this.options.vimBarLeftCss)
		this.vimBar.appendChild(this.fileLineCountElement)

		this.fileSizeElement = document.createElement("span")
		this.fileSizeElement.classList.add(this.options.vimBarLeftCss)
		this.vimBar.appendChild(this.fileSizeElement)

		this.allElement = document.createElement("span")
		this.allElement.classList.add(this.options.vimBarRightCss)
		this.allElement.innerHTML = "All"
		this.vimBar.appendChild(this.allElement)

		this.cursorPositionElement = document.createElement("span")
		this.cursorPositionElement.classList.add(this.options.vimBarRightCss)
		this.vimBar.appendChild(this.cursorPositionElement)
	}

	readonly options: VimOptions = {
		vimCss: "vim___emulator___wrapper",
		vimBarCss: "vim___emulator___bar",
		vimBarLeftCss: "vim___emulator___bar___left",
		vimBarRightCss: "vim___emulator___bar___right",
	}
	readonly wrapperElement: HTMLElement
	readonly vimBar: HTMLElement
	readonly fileNameElement: HTMLElement
	readonly fileLineCountElement: HTMLElement
	readonly fileSizeElement: HTMLElement
	readonly cursorPositionElement: HTMLElement
	readonly allElement: HTMLElement

	public openFile = (wrapper: HTMLElement, stdout: StdoutEmulator, fileSystem: FileSystemEmulator, fileName: string) => {
		// set fields
		this.currentFilename = fileName
		this.currentFileIsNew = !fileSystem.pathExists(this.currentFilename)
		this.wrapper = wrapper
		stdout.removeCursor()
		this.prevStdoutContent = stdout.element.innerHTML

		// set stdout before updating command bar
		stdout.element.remove()
		stdout.clear()
		var fileContent = fileSystem.getFileContent(fileName)
		if (!(typeof fileContent === "string")) {
			fileContent = ""
		}
		stdout.element.innerHTML = fileContent
		stdout.appendCursor()

		// if a file is new (eg: does not exist yet), no file size or line count should be shown
		this.updateFileLineCountElem(stdout)
		this.updateFileSizeElem(stdout)
		this.updateFileNameElem()
		this.updateCursorPosElem(stdout)
		this.updateAllElem()
		if (this.currentFileIsNew) {
			this.fileLineCountElement.innerHTML = ""
			this.fileSizeElement.innerHTML = ""
		}

		this.wrapperElement.appendChild(stdout.element)
		// double br needed to space the vim bar bellow stdout text
		this.wrapperElement.appendChild(document.createElement("br"))
		this.wrapperElement.appendChild(document.createElement("br"))
		this.wrapperElement.appendChild(this.vimBar)
		this.wrapper.appendChild(this.wrapperElement)
	}
	public insert = (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, content: string, speed: number | "neutral", callback: () => void) => {
		this.fileNameElement.innerHTML = "-- INSERT --"
		this.fileSizeElement.innerHTML = ""
		this.fileLineCountElement.innerHTML = ""
		this.writer.writeToElement(
			stdout.element,
			content,
			speed,
			stdout.removeCursor,
			() => {
				stdout.appendCursor()
				this.updateCursorPosElem(stdout)
			},
			callback
		)
	}
	public escape = () => {
		this.fileNameElement.innerHTML = ""
		this.fileSizeElement.innerHTML = ""
		this.fileLineCountElement.innerHTML = ""
	}
	public write = (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, speed: number | "neutral" = "neutral", pauseBeforeOutput: number = 0, callback: () => void) => {
		this.clearVimBar()
		this.writer.writeToElement(this.fileNameElement, ":w", speed, undefined, undefined, () => {
			setTimeout(() => {
				this.writeStdoutToFile(stdout, fileSystem)
				this.updateFileNameElem()
				this.updateFileLineCountElem(stdout)
				this.updateFileSizeElem(stdout)
				this.fileSizeElement.innerHTML += "&nbsp;written"
				this.updateCursorPosElem(stdout)
				this.updateAllElem()
				callback()
			}, pauseBeforeOutput)
		})
	}
	public quit = (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, speed: number | "neutral" = "neutral", pauseBeforeOutput: number = 0, callback: () => void) => {
		this.clearVimBar()
		this.writer.writeToElement(this.fileNameElement, ":q", speed, undefined, undefined, () => {
			setTimeout(() => {
				this.closeVim(stdout, callback)
			}, pauseBeforeOutput)
		})
	}
	public writeQuit = (stdout: StdoutEmulator, fileSystem: FileSystemEmulator, speed: number | "neutral" = "neutral", pauseBeforeOutput: number = 0, callback: () => void) => {
		this.clearVimBar()
		this.writer.writeToElement(this.fileNameElement, ":wq", speed, undefined, undefined, () => {
			setTimeout(() => {
				this.writeStdoutToFile(stdout, fileSystem)

				this.closeVim(stdout, callback)
			}, pauseBeforeOutput)
		})
	}

	private closeVim = (stdout: StdoutEmulator, callback: () => void) => {
		stdout.removeCursor()
		stdout.element.remove()
		stdout.element.innerHTML = this.prevStdoutContent
		stdout.appendCursor()
		this.wrapperElement.innerHTML = ""
		this.wrapperElement.remove()

		this.prevStdoutContent = ""
		this.currentFileIsNew = false
		this.currentFilename = ""
		this.cursorPosX = 0
		this.cursorPosY = 0

		this.wrapper!.appendChild(stdout.element)
		this.wrapper = undefined
		callback()
	}
	private writeStdoutToFile = (stdout: StdoutEmulator, fileSystem: FileSystemEmulator) => {
		// content should equal the stdout innerHTML, where BR elements are replaced with \n and any other opening/closing tag removed
		stdout.removeCursor()
		var content = stdout.element.innerHTML.replace("<br>", "\n").replace(/<\w*\s*[^>]*>/gm, "")
		fileSystem.setFileContent(this.currentFilename, content)
		stdout.appendCursor()
	}
	private updateFileNameElem = () => {
		this.fileNameElement.innerHTML = '"' + this.currentFilename + '"&nbsp;'
		if (this.currentFileIsNew) {
			this.fileNameElement.innerHTML += "[New]&nbsp;"
		}
	}
	private updateFileSizeElem = (stdout: StdoutEmulator) => {
		// var fileSize = new Blob([this.stdout.element.innerHTML.replace("<br>", "\n").replace(/<\w*\s*[^>]*>/, "")]).size
		var fileContent = stdout.element.innerHTML.replace("<br>", "\n").replace(/<\w*\s*[^>]*>/gm, "")
		fileContent = fileContent.slice(0, fileContent.lastIndexOf("|"))
		var enc = new TextEncoder()
		var fileSize = enc.encode(fileContent).length + 1
		var sizeUnit: string

		if (fileSize < 1000) {
			sizeUnit = "B"
		} else if (fileSize >= 1000 && fileSize < 1000000) {
			fileSize = fileSize / 1000
			sizeUnit = "KB"
		} else if (fileSize >= 1000000 && fileSize < 1000000000) {
			fileSize = fileSize / 1000000
			sizeUnit = "MB"
		} else {
			fileSize = fileSize / 1000000000
			sizeUnit = "GB"
		}
		this.fileSizeElement.innerHTML = fileSize.toString() + sizeUnit
	}
	private updateFileLineCountElem = (stdout: StdoutEmulator) => {
		this.fileLineCountElement.innerHTML = stdout.element.innerHTML.split("<br>").length.toString() + "L,&nbsp;"
	}
	private updateAllElem = () => {
		this.allElement.innerHTML = "All"
	}
	private updateCursorPosElem = (stdout: StdoutEmulator) => {
		var content: string[] = stdout.element.innerHTML.split("<br>")
		this.cursorPosX =
			content
				.reverse()
				.find(s => s.includes(stdout.options.cursorCss))!
				.replace(/<\w*\s*[^>]*>/gm, "")
				.lastIndexOf(stdout.options.cursorChar) + 1
		this.cursorPosY = content.length
		this.cursorPositionElement.innerHTML = this.cursorPosY + "," + this.cursorPosX + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
	}
	private clearVimBar = () => {
		this.fileLineCountElement.innerHTML = ""
		this.fileNameElement.innerHTML = ""
		this.fileLineCountElement.innerHTML = ""
		this.fileSizeElement.innerHTML = ""
		this.cursorPositionElement.innerHTML = ""
		this.allElement.innerHTML = ""
	}
}

export default UnixVimEmulator
