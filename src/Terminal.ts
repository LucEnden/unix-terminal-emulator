import { Command, TerminalOptions, TerminalEnviroment, WrapperElement } from "./interfaces";

export default class Terminal {
    private historyStack = [] as Array<Command>;
    private commandQueue = [] as Array<Command>;
    private wrapperElement: WrapperElement = {
        id: "terminal___emulator___wrapper",
        cssClass: "terminal___emulator___wrapper"
    };
    private enviroment?: TerminalEnviroment;

    constructor(options?: TerminalOptions) {
        if (options !== undefined) {
            if (options.wrapperElement !== undefined) {
                this.wrapperElement.id = options.wrapperElement.id
                if (options.wrapperElement.cssClass !== undefined) {
                    this.wrapperElement.cssClass = options.wrapperElement.cssClass
                }
            }
            if (options.enviroment !== undefined) {
                this.enviroment = options.enviroment
            }
        }
    }

    public addCommand = (command: Command) => {
        this.commandQueue.push(command)
        return this
    }

    public addCommands = (commands: Command[]) => {
        commands.forEach((c) => {
            this.commandQueue.push(c);
        });
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
     */
    public run() {
        // if there are commands left in the queue, start writing its text to stdout
        if (this.commandQueue.length > 0) {
            this.writeEnviromentLineToStdout();
            this.writeInputLineStartToStdout();
            this.writeToStdout(
                () => {
                    // after COMMAND TEXT was written
                    this.writeLineBreakToStdout();
                    // check if command has output and if so, start writing output
                    if (this.commandQueue[0].output !== undefined) {
                        this.writeToStdout(
                            () => {
                                // after COMMAND OUTPUT was written
                                if (this.commandQueue.length >= 1) {
                                    this.writeLineBreakToStdout();
                                }
                                this.historyStack.push(this.commandQueue[0]);
                                this.commandQueue.shift();
                                this.run();
                            },
                            this.commandQueue[0].output,
                            1
                        );
                    } else {
                        if (this.commandQueue.length >= 1) {
                            this.writeLineBreakToStdout();
                        }
                        this.historyStack.push(this.commandQueue[0]);
                        this.commandQueue.shift();
                        this.run();
                    }
                },
                this.commandQueue[0].text,
                this.getRandomIntegerInRange(80, 120)
            );
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
            document.getElementById(this.wrapperElement.id).innerHTML += this.enviroment.username + "@" + this.enviroment.hostname + ":";
        }
    }
    /**
     * Writes "$ " to the stdout
     */
    private writeInputLineStartToStdout() {
        document.getElementById(this.wrapperElement.id).innerHTML += "$ ";
    }
    /**
     * Writes "\n" (\<br />) to the stdout
     */
    private writeLineBreakToStdout() {
        document.getElementById(this.wrapperElement.id).innerHTML += "<br />";
    }
    /**
     * Writes the specified text to the terminal wrapper
     * @param callback gets excecuted when writing to stdout has finished
     * @param text text to write to stdout
     * @param speed speed at which each character is written to stdout
     * @param i used for recursion purposes
     */
    private writeToStdout = (
        callback: () => void,
        text: string,
        speed: number,
        i: number = 0
    ) => {
        if (i < text.length) {
            document.getElementById(this.wrapperElement.id).innerHTML += text[i];
            i++;
            setTimeout(() => this.writeToStdout(callback, text, speed, i), speed);
        } else {
            callback();
        }
    };
}
