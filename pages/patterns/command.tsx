import Light, {LightOffCommand, LightOnCommand,} from "../../patterns/command/Light";
import RemoteControl, {ResponseType} from "../../patterns/command/RemoteControl";
import Stereo, {StereoOffCommand, StereoOnCommand,} from "../../patterns/command/Stereo";
import {useEffect, useState} from "react";
import {ApplianceStatus} from "../../patterns/command/CommandTypes";

export enum ButtonName {
  'LIVING_ROOM_LIGHT',
  'KITCHEN_LIGHT',
  'LIVING_ROOM_STEREO',
}

class RemoteLoader {
  private remoteControl: RemoteControl;
  public livingRoomLight: Light;
  public kitchenLight: Light;
  public stereo: Stereo;
  public livingRoomLightOn: LightOnCommand;
  public livingRoomLightOff: LightOffCommand;
  public kitchenLightOn: LightOnCommand;
  public kitchenLightOff: LightOffCommand;
  public stereoOn: StereoOnCommand;
  public stereoOff: StereoOffCommand;

  constructor() {
    this.remoteControl = new RemoteControl();
    this.livingRoomLight = new Light("Living Room");
    this.kitchenLight = new Light("Kitchen");
    this.stereo = new Stereo("Living Room");
    this.livingRoomLightOn = new LightOnCommand(this.livingRoomLight);
    this.livingRoomLightOff = new LightOffCommand(this.livingRoomLight);
    this.kitchenLightOn = new LightOnCommand(this.kitchenLight);
    this.kitchenLightOff = new LightOffCommand(this.kitchenLight);
    this.stereoOn = new StereoOnCommand(this.stereo);
    this.stereoOff = new StereoOffCommand(this.stereo);
    this.remoteControl.setCommand(0, this.livingRoomLightOn, this.livingRoomLightOff);
    this.remoteControl.setCommand(1, this.kitchenLightOn, this.kitchenLightOff);
    this.remoteControl.setCommand(2, this.stereoOn, this.stereoOff);
  }

  pressOn(buttonName: ButtonName): void {
    this.remoteControl.onButtonWasPushed(buttonName);
  }

  pressOff(buttonName: ButtonName): void {
    this.remoteControl.offButtonWasPushed(buttonName);
  }

  toString(): string {
    return this.remoteControl.toString();
  }

  getData(): ResponseType[] {
    return this.remoteControl.getData();
  }
}

const Command = () => {
  const [data, setData] = useState<ResponseType[]>([]);
  const remoteLoader: RemoteLoader = new RemoteLoader();

  useEffect(() => {
      setData(remoteLoader.getData());
    }, [setData]);

  const RemoteControl = () => {
    const RemoteButton = ({buttonText, classNames, methodName }: {buttonText: string, classNames?: string, methodName?: void}) => {
      const handleClick = () => {
      }
      return (
          <button onClick={handleClick} className={`border border-1 border-slate-100 rounded-md text-center ${classNames}`}>{buttonText}</button>
      )
    }

    const StereoButton = ({applianceStatus, classNames}: {applianceStatus: ApplianceStatus, classNames?: string}) => {
      const handleClick = () => {
        if (applianceStatus === ApplianceStatus.ON) {
          remoteLoader.pressOn(ButtonName.LIVING_ROOM_STEREO);
        } else if (applianceStatus === ApplianceStatus.OFF) {
          remoteLoader.pressOff(ButtonName.LIVING_ROOM_STEREO);
        }
        setData(remoteLoader.getData());
      }
      return (
          <button onClick={handleClick} className={`border border-1 border-slate-100 rounded-md text-center ${classNames}`}>{applianceStatus}</button>
      )
    }

    const CeilingFanButton = ({applianceStatus, classNames}: {applianceStatus: ApplianceStatus, classNames?: string}) => {
      const handleClick = () => {
        if (applianceStatus === ApplianceStatus.ON) {
          remoteLoader.pressOn(ButtonName.LIVING_ROOM_STEREO);
        } else if (applianceStatus === ApplianceStatus.OFF) {
          remoteLoader.pressOff(ButtonName.LIVING_ROOM_STEREO);
        }
        setData(remoteLoader.getData());
      }
      return (
          <button onClick={handleClick} className={`border border-1 border-slate-100 rounded-md text-center ${classNames}`}>{applianceStatus}</button>
      )
    }

    const RemoteLabel = ({buttonText, classNames}: {buttonText: string, classNames?: string}) => {
      return (
          <div className={`border border-1 border-slate-100 rounded-md text-center col-span-3 ${classNames}`}>{buttonText}</div>
      )
    }

    return (
        <>
        <div className="grid grid-cols-4 gap-1">
          <div className="p-4 bg-slate-500 border border-2 border-slate-100 rounded-lg">
            <div className="grid grid-cols-5 gap-3">
              <StereoButton applianceStatus={ApplianceStatus.OFF} />
              <StereoButton applianceStatus={ApplianceStatus.ON} />
              <RemoteLabel buttonText='Living Room Stereo'/>
              <RemoteButton buttonText='off'/>
              <RemoteButton buttonText='on'/>
              <RemoteLabel buttonText='Kitchen Light'/>
              <RemoteButton buttonText='off'/>
              <RemoteButton buttonText='on'/>
              <RemoteLabel buttonText='Living Room Light'/>
              <RemoteButton buttonText='undo' classNames='col-span-4'/>
            </div>
          </div>
        </div>
    <div className="border border-1">
      <ul role="list" className="text-slate-100">
        {data.map((element) => (
            <li key={element.slot}>
              <>
                slot: {element.slot}<br></br>
                onCommand: {JSON.stringify(element.onCommand)}<br></br>
                offCommand: {JSON.stringify(element.offCommand)}<br></br>
              </>
            </li>
        ))}
      </ul>
    </div>
    </>
    )
  }
  return <RemoteControl />;
};

export default Command;
