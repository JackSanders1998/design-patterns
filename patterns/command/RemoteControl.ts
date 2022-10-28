import Command from "./Command";
import NoCommand from "./NoCommand";

//
// This is the invoker
//
export default class RemoteControl {
  onCommands: Command[] = [];
  offCommands: Command[] = [];

  public constructor() {
    const noCommand: Command = new NoCommand();
    for (let i: number = 0; i < 7; i++) {
      {
        this.onCommands.push(noCommand);
        this.offCommands.push(noCommand);
      }
    }
  }

  public setCommand(
    slot: number,
    onCommand: Command,
    offCommand: Command
  ): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
  }

  public toString(): string {
    let stringBuff: string[] = [];
    stringBuff.push("\n------ Remote Control -------\n");
    for (let i: number = 0; i < this.onCommands.length; i++) {
      stringBuff.push(
        "[slot " + i + "] " + this.onCommands[i] + "    " + this.offCommands[i]
      );
    }
    return stringBuff.join(", ");
  }
}
