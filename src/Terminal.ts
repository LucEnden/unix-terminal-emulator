import { 
    Command, 
    TerminalOptions,
    TerminalEvent
} from "./interfaces"
import "./styles.css"

/**
 * The main class of the TerminalEmulatorLib. Emulates a unix terminal by typing out commands and there specified outputs.
 * Comes with some basic unix commands out of the box, and a few methods for working with custom commands.
 */
export class Terminal {
    // internals
    private readonly historyStack = [] as Array<Command>
    private readonly eventQueue = [] as Array<TerminalEvent>
    private currentEvent: TerminalEvent | undefined

    private options: TerminalOptions = {
        wrapper: {
            id: "terminal___emulator___wrapper",
            cssClass: "terminal___emulator___wrapper"
        },
        cursor: {
            id: "terminal___emulator___cursor",
            char: "|",
            animate: "fluid"
        },
        enviroment: undefined
    }
    private wrapperElement: HTMLElement
    private cursorElement: HTMLElement

    constructor(options?: TerminalOptions) {
        // first: overwrite the default options if user specified other options
        if (options !== undefined) {
            // set wrapper options
            if (options.wrapper !== undefined) {
                this.options.wrapper!.id = options.wrapper.id
                if (options.wrapper.cssClass !== undefined) {
                    this.options.wrapper!.cssClass = options.wrapper.cssClass
                }
            }
            // set cursor options
            if (options.cursor !== undefined) {
                this.options.cursor!.id = options.cursor.id
                this.options.cursor!.char = options.cursor.char
                this.options.cursor!.animate = options.cursor.animate
            }
            // set enviroment
            if (options.enviroment !== undefined) {
                this.options.enviroment = options.enviroment
            }
        }

        // second: check if the wrapper exists, if not, throw error and exit
        const wrapper = document.getElementById(this.options.wrapper!.id)
        if (wrapper === null) {
            throw new TypeError(`document.getElementbyId(${this.options.wrapper!.id}) is null`)
        }
        this.wrapperElement = wrapper
        this.wrapperElement.classList.add(this.options.wrapper!.cssClass)
        this.wrapperElement.innerHTML

        this.cursorElement = document.createElement("span")
        this.cursorElement.id = this.options.cursor!.id
        this.cursorElement.innerText = this.options.cursor!.char
        switch(this.options.cursor!.animate) {
            case "fluid":
                this.cursorElement.classList.add("terminal___cursor___fluid")
                break
            case "static":
                this.cursorElement.classList.add("terminal___cursor___static")
                break
            case "none":
                this.cursorElement.classList.add("terminal___cursor___none")
                break
        }

        // initialize terminal with emtpy input line
        this.writeInputLineStartToStdout()
        this.appendCursor()
    }

    public addCommand = (command: Command) => {
        this.eventQueue.push({
            delayAfter: 0,
            command: command
        } as TerminalEvent)
        return this
    }
    public addCommands = (commands: Command[]) => {
        commands.forEach((c) => {
            this.eventQueue.push({
                delayAfter: 0,
                command: c
            } as TerminalEvent)
        })
        return this
    }

    public pause = (ms: number) => {
        this.eventQueue.push({
            delayAfter: ms
        } as TerminalEvent)
        return this
    }

    // todo: implement
    public echo = (text: string) => {
        return this
    }
    // todo: implement
    public touch = (fileName: string) => {
        return this
    }
    // todo: implement
    public mkdir = (dirName: string) => {
        return this
    }
    // todo: implement
    public history = () => {
        return this
    }
    // todo: implement
    public clear = () => {
        return this
    }
    // todo: implement
    public vim = (fileName: string, fileContentToType: string[]) => {
        return this
    }

    /**
     * Excecutes the command sequence
     * @param callback Gets called when sequence has finished
     */
    public run = (callback?: () => void) => {
        // If there are events left in the queue, continue running.
        this.currentEvent = this.eventQueue.shift()
        if (this.currentEvent !== undefined) {
            if (this.currentEvent.command !== undefined) {
                // Add command to history stack, then start writing the command text to the stdout
                this.historyStack.push(this.currentEvent.command)
                this.writeToStdout(
                    this.currentEvent.command.text,
                    this.currentEvent.command.writeSpeed,
                    () => { // After command text was written, check if the command has an output...
                        if (this.currentEvent!.command!.output !== undefined) {
                            setTimeout(() => {
                                this.removeCursor()
                                this.writeLineBreakToStdout()
                                this.writeToStdout(
                                    this.currentEvent!.command!.output!,
                                    0,
                                    () => { // After command output was written...
                                        this.writeLineBreakToStdout()
                                        this.writeEnviromentLineToStdout()
                                        this.writeInputLineStartToStdout()
                                        // console.log(`Next event! ${this.eventQueue.length} events remaining`, JSON.stringify(this.eventQueue))
                                        setTimeout(() => {
                                            this.appendCursor()
                                            this.run(callback)
                                        }, this.currentEvent!.delayAfter)
                                    }
                                )
                            }, this.currentEvent!.command!.pauseBeforeOutput)
                        } else {
                            this.writeLineBreakToStdout()
                            this.writeEnviromentLineToStdout()
                            this.writeInputLineStartToStdout()
                            // console.log(`Next event! ${this.eventQueue.length} events remaining`, JSON.stringify(this.eventQueue))
                            setTimeout(() => this.run(callback), this.currentEvent!.delayAfter)
                        }
                    }
                )

            } else { // If the current events command is undefined, continue running...
                setTimeout(() => {
                    this.run(callback)
                }, this.currentEvent.delayAfter)
            }

        } else { // If no event is left in the queue, call calback...
            if (callback !== undefined) {
                callback()
            }
        }
    }

    private removeCursor = () => {
        this.cursorElement.remove()
    }
    private appendCursor = () => {
        this.wrapperElement.appendChild(this.cursorElement)
    }
    
    /**
     * Gets a random integer in the range from min to max, inclusif
     * @param {Number} min Minimum number to generate
     * @param {Number} max Maximum number to generate
     * @returns random integer in the range from min to max, inclusif
     */
    private getRandomIntegerInRange = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /**
     * If this.enviroment is not undefined, write "username@hostname:" to the stdout
     */
    private writeEnviromentLineToStdout = () => {
        if (this.options.enviroment !== undefined) {
            this.wrapperElement.innerHTML += this.options.enviroment.username + "@" + this.options.enviroment.hostname + ":"
        }
    }
    /**
     * Writes "$ " to the stdout
     */
    private writeInputLineStartToStdout = () => {
        this.wrapperElement.innerHTML += "$ "
    }
    /**
     * Writes "\n" (\<br />) to the stdout
     */
    private writeLineBreakToStdout = () => {
        this.wrapperElement.innerHTML += "<br />"
    }

    /**
     * Writes the specified text to the terminal wrapper.  
     *   
     * If speed === 0, it will remove the cursor from the wrapper.  
     * If speed > 0, the cursor will remove before and appended after every character.
     * @param callback gets excecuted when writing to stdout has finished
     * @param text text to write to stdout
     * @param speed speed at which each character is written to stdout
     * @param i used for recursion purposes
     */
    private writeToStdout = (
        text: string,
        speed: "neutral" | number,
        callback: () => void,
        i: number = 0
    ) => {
        if (speed === 0) {
            this.removeCursor()
            this.wrapperElement.innerHTML += text
            callback()
        }
        else {
            if (i < text.length) {
                this.removeCursor()
                this.wrapperElement.innerHTML += text[i]
                this.appendCursor()
                i++
                if (speed === "neutral") {
                    setTimeout(() => this.writeToStdout(text, speed, callback, i), this.getRandomIntegerInRange(80, 120))
                } else {
                    setTimeout(() => this.writeToStdout(text, speed, callback, i), speed)
                }
            } else {
                callback()
            }
        }
    }
}

// export default Terminal