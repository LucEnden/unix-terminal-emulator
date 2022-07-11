import { Command, TerminalOptions, TerminalEnviroment, WrapperElementOptions, TerminalEvent } from "./interfaces";

/**
 * 
 */
export class Terminal {
    private readonly historyStack = [] as Array<Command>;
    private readonly eventQueue = [] as Array<TerminalEvent>;
    private currentEvent: TerminalEvent | undefined;
    private wrapperOptions: WrapperElementOptions = {
        id: "terminal___emulator___wrapper",
        cssClass: "terminal___emulator___wrapper"
    };
    private wrapperElement: HTMLElement;
    private enviroment?: TerminalEnviroment;

    constructor(options?: TerminalOptions) {
        if (options !== undefined) {
            // set wrapper options
            if (options.wrapperOptions !== undefined) {
                this.wrapperOptions.id = options.wrapperOptions.id
                if (options.wrapperOptions.cssClass !== undefined) {
                    this.wrapperOptions.cssClass = options.wrapperOptions.cssClass
                }
            }
            // set enviroment
            if (options.enviroment !== undefined) {
                this.enviroment = options.enviroment
            }
        }

        // check if terminal wrapper exists
        const wrapper = document.getElementById(this.wrapperOptions.id);
        if (wrapper === null) {
            throw new TypeError(`document.getElementbyId(${this.wrapperOptions.id}) is null`)
        } else {
            this.wrapperElement = wrapper;
            this.wrapperElement.classList.add(this.wrapperOptions.cssClass)
            this.writeInputLineStartToStdout();
        }
    }

    public addCommand = (command: Command) => {
        this.eventQueue.push({
            delayAfter: 0,
            command: command
        } as TerminalEvent)
        return this;
    }

    public addCommands = (commands: Command[]) => {
        commands.forEach((c) => {
            this.eventQueue.push({
                delayAfter: 0,
                command: c
            } as TerminalEvent)
        });
        return this;
    }

    public pause = (ms: number) => {
        this.eventQueue.push({
            delayAfter: ms
        } as TerminalEvent)
        return this;
    }

    // todo: implement
    public echo = (text: string) => {
        return this;
    }
    // todo: implement
    public touch = (fileName: string) => {
        return this;
    }
    // todo: implement
    public mkdir = (dirName: string) => {
        return this;
    }
    // todo: implement
    public history = () => {
        return this;
    }
    // todo: implement
    public clear = () => {
        return this;
    }
    // todo: implement
    public vim = (fileName: string, fileContentToType: string[]) => {
        return this;
    }

    /**
     * Excecutes the command sequence
     * @param callback Gets called when sequence has finished
     */
    public run(callback?: () => void) {
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
                        this.writeLineBreakToStdout();
                        if (this.currentEvent!.command!.output !== undefined) {
                            setTimeout(() => {
                                this.writeToStdout(
                                    this.currentEvent!.command!.output!,
                                    0,
                                    () => { // After command output was written...
                                        this.writeLineBreakToStdout();
                                        this.writeEnviromentLineToStdout();
                                        this.writeInputLineStartToStdout();
                                        // console.log(`Next event! ${this.eventQueue.length} events remaining`, JSON.stringify(this.eventQueue));
                                        setTimeout(() => this.run(callback), this.currentEvent!.delayAfter);
                                    }
                                )
                            }, this.currentEvent!.command!.pauseBeforeOutput)
                        } else {
                            this.writeLineBreakToStdout();
                            this.writeEnviromentLineToStdout();
                            this.writeInputLineStartToStdout();
                            // console.log(`Next event! ${this.eventQueue.length} events remaining`, JSON.stringify(this.eventQueue));
                            setTimeout(() => this.run(callback), this.currentEvent!.delayAfter);
                        }
                    }
                )

            } else { // If the current events command is undefined, continue running...
                setTimeout(() => {
                    this.run(callback);
                }, this.currentEvent.delayAfter)
            }

        } else { // If no event is left in the queue, call calback...
            if (callback !== undefined) {
                callback();
            }
        }
    }

    /**
     * Gets a random integer in the range from min to max, inclusif
     * @param {Number} min Minimum number to generate
     * @param {Number} max Maximum number to generate
     * @returns random integer in the range from min to max, inclusif
     */
    private getRandomIntegerInRange(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /**
     * If this.enviroment is not undefined, write "username@hostname:" to the stdout
     */
    private writeEnviromentLineToStdout() {
        if (this.enviroment !== undefined) {
            this.wrapperElement.innerHTML += this.enviroment.username + "@" + this.enviroment.hostname + ":";
        }
    }
    /**
     * Writes "$ " to the stdout
     */
    private writeInputLineStartToStdout() {
        this.wrapperElement.innerHTML += "$ ";
    }
    /**
     * Writes "\n" (\<br />) to the stdout
     */
    private writeLineBreakToStdout() {
        this.wrapperElement.innerHTML += "<br />";
    }
    /**
     * Writes the specified text to the terminal wrapper
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
            this.wrapperElement.innerHTML += text
            callback()
        }
        else {
            if (i < text.length) {
                this.wrapperElement.innerHTML += text[i];
                i++;
                if (speed === "neutral") {
                    setTimeout(() => this.writeToStdout(text, speed, callback, i), this.getRandomIntegerInRange(80, 120));
                } else {
                    setTimeout(() => this.writeToStdout(text, speed, callback, i), speed);
                }
            } else {
                callback();
            }
        }
    };
}

// export default Terminal