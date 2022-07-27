// import StdoutEmulator from "./UnixStdoutEmulator"
// import { nanoid } from 'nanoid'
// import CursorElement from "./UnixCursorElement"

// class UnixVimEmulator {
//     private fileRows: string[]
// 	private stdout: StdoutEmulator
//     private fileContentElement: StdoutChildElement
//     private cursorElement: CursorElement

//     private options: VimOptions = {
//         fileCss: "vim___emulator___file",
//         cursor: "|",
//         cursorId: "vim___cursor___element",
//         cursorCss: "vim___cursor___element"
//     }

//     constructor(fileName: string, options?: VimOptions, fileContent?: string[]) {
//         if (options) {
// 			this.options = {
// 				...this.options,
// 				...options,
// 			}
// 		}

//         this.fileContentElement = {
//             id: randomUUID() + "-" + fileName
//         }
//         this.cursorElement = new CursorElement(this.options.cursor!, this.options.cursorId!, this.options.cursorCss!)
//         this.stdout = new StdoutEmulator(this.fileContentElement, this.cursorElement)
//         this.fileRows = fileContent === undefined ? [] : fileContent
        
//     }

//     public insert = (content: string[] = this.fileRows) => {
//         for(var i = 0; i < content.length; i++) {

//         }
//     }

//     private writeRow = (text: string, speed: "neutral" | number, callback: () => void, i: number = 0) => {
// 	}
// }

// export default UnixVimEmulator