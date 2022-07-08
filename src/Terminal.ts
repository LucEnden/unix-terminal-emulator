import { Command, TerminalOptions } from "./interfaces";

export default class Terminal {
    private historyStack = [] as Array<Command>;
    private commandQueue = [] as Array<Command>;
    private wrapperElementId = "terminal___emulator___wrapper";
    private wrapperElementClass = "terminal___emulator___wrapper";
    private hostname?: string;
    private username?: string;
    private exitOnFinish = false;
    
    constructor(options?: TerminalOptions) {
        if (options !== undefined) {
            if (options.wrapperElement !== undefined) {
                this.wrapperElement = options.wrapperElement.element
                this.wrapperElement.id = options.wrapperElement.id
                if (options.wrapperElement.cssClass !== undefined) {
                    this.wrapperElement.classList.add(options.wrapperElement.cssClass)
                }
            } 
            if (options.enviroment !== undefined) {
                this.hostname = options.enviroment.hostname
                this.username = options.enviroment.username
            }
            if (options.exitOnFinish !== undefined) {
                this.exitOnFinish = options.exitOnFinish
            }
        } else {
            this.wrapperElement = document.createElement("div")
            this.wrapperElement.id = this.wrapperElementId
            this.wrapperElement.classList.add(this.wrapperElementClass)
        }
    }
    public wrapperElement: Element;
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
    public echo: (text: string) => Terminal;
    public touch: (fileName: string) => Terminal;
    public mkdir: (dirName: string) => Terminal;
    public history: () => Terminal;
    public clear: () => Terminal;
    public vim: (fileName: string, fileContentToType: string[]) => Terminal;

    // /**
    //  * Adds a command to the queue of 'to be excecuted commands'
    //  * @param command Command to add to the queue
    //  */
    // public AddCommand(command: Command) {
    //     this.commandQueue.push(command);
    //     return this;
    // }

    // /**
    //  * Adds a command to the queue of 'to be excecuted commands'
    //  * @param commands Commands to add to the queue
    //  */
    // public AddCommands(...commands: Command[]) {
    //     commands.forEach((c) => {
    //         this.commandQueue.push(c);
    //     });
    //     return this;
    // }

    /**
     * Excecutes all the commands that have been queued
     */
    public Run() {
    // if there are commands left in the queue, start writing its text to stdout
    if (this.commandQueue.length > 0) {
        this.writeToStdout(
            () => {
                // after COMMAND TEXT was written
                this.writeLineBreakToStdout();
                if (this.commandQueue[0].output !== undefined) {
                    this.writeToStdout(
                        () => {
                            // after COMMAND OUTPUT was written
                            this.writeLineBreakToStdout();
                            this.writeInputLineStartToStdout();
                            this.historyStack.push(this.commandQueue[0]);
                            this.commandQueue.shift();
                            this.Run();
                            return this;
                        },
                        this.commandQueue[0].output,
                        1
                    );
                } else {
                    this.writeInputLineStartToStdout();
                    this.historyStack.push(this.commandQueue[0]);
                    this.commandQueue.shift();
                    this.Run();
                    return this;
                }
            },
            this.commandQueue[0].text,
            100
        );
    }
}

    /**
     * Adds "$ " to the stdout
     */
    private writeInputLineStartToStdout() {
    document.getElementById(this.wrapperElementId).innerHTML += "$ ";
}
    /**
     * Adds "<br />" to the stdout
     */
    private writeLineBreakToStdout() {
    document.getElementById(this.wrapperElementId).innerHTML += "<br />";
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
    speed: number = 100,
    i: number = 0
) => {
    if (i < text.length) {
        document.getElementById(this.wrapperElementId).innerHTML += text[i];
        i++;
        setTimeout(() => this.writeToStdout(callback, text, speed, i), speed);
    } else {
        callback();
    }
};
}
