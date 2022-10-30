import Command from "./Command";
import NoCommand from "./NoCommand";

export type ResponseType = {
  slot: number;
  appliance: string;
  onCommand: Command;
  offCommand: Command;
};

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
        "[slot " + i + "] " + JSON.stringify(this.onCommands[i]) + "    " + JSON.stringify(this.offCommands[i]) + "\n"
      )
    }
    return stringBuff.join("");
  }

  public getData(): any[] {
    const dataArray = [];
    for (let i: number = 0; i < this.onCommands.length; i++) {
      // const values = Object.values(this.onCommands[i]);
      // console.log("onCommand:", this.onCommands[i]);
      // console.log("VALUES:", values);
      // const location = values.length > 0 ? values[0].location : undefined;
      // const appliance = values.length > 1 ? values[1] : undefined;
      dataArray.push({
        slot: i,
        // location,
        // appliance,
        onCommand: this.onCommands[i],
        offCommand: this.offCommands[i],
      })
    }
    return dataArray;
  }
}
