import Light, { LightOffCommand, LightOnCommand } from "../../patterns/command/Light";
import RemoteControl from "../../patterns/command/RemoteControl";
import Stereo, { StereoOffCommand, StereoOnWithCDCommand } from "../../patterns/command/Stereo";

class RemoteLoader {
  public main(args: string[]): void {
    console.log("IN HERE");
    const remoteControl: RemoteControl = new RemoteControl();

    const livingRoomLight: Light = new Light("Living Room");
    const kitchenLight: Light = new Light("Kitchen");
    const stereo: Stereo = new Stereo("Living Room");

    const livingRoomLightOn: LightOnCommand = new LightOnCommand(
      livingRoomLight
    );
    const livingRoomLightOff: LightOffCommand = new LightOffCommand(
      livingRoomLight
    );
    const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight);
    const kitchenLightOff: LightOffCommand = new LightOffCommand(kitchenLight);

    const stereoOnWithCD: StereoOnWithCDCommand = new StereoOnWithCDCommand(
      stereo
    );
    const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.setCommand(2, stereoOnWithCD, stereoOff);

    console.log(remoteControl);

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
    remoteControl.onButtonWasPushed(2);
    remoteControl.offButtonWasPushed(2);
    remoteControl.onButtonWasPushed(3);
    remoteControl.offButtonWasPushed(3);
    remoteControl.toString();

    console.log(remoteControl);

  }
}


const Command = () => {
  const remoteLoader = new RemoteLoader().main(['jack', 'isabel']);
  return <>Command Pattern</>;
};

export default Command;
