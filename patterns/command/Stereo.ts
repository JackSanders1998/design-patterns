import Command from "./Command";

export default class Stereo {
  location: string;
  volume: number;

  public constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    this.volume = 10;
    console.log(this.location + " stereo is on");
  }

  public off(): void {
    this.volume = 0;
    console.log(this.location + " stereo is off");
  }

  public setVolume(volume: number): void {
    this.volume = volume;
    if (volume == 0) {
      this.off();
    } else {
      console.log(this.location + " Stereo volume set to " + volume);
    }
  }

  public setCD(): void {
    console.log(this.location + " stereo is set for CD input");
  }

  public setDVD(): void {
    console.log(this.location + " stereo is set for DVD input");
  }

  public setRadio(): void {
    console.log(this.location + " stereo is set for Radio");
  }

  public getVolume(): number {
    return this.volume;
  }
}

export class StereoOnCommand implements Command {
  stereo: Stereo;
  volume: number;

  public constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.on();
  }

  public undo(): void {
    this.stereo.setVolume(this.volume);
  }
}

export class StereoOnWithCDCommand implements Command {
  stereo: Stereo;
  volume: number;

  public constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(10);
  }

  public undo(): void {
    this.stereo.setVolume(this.volume);
  }
}

export class StereoOffCommand implements Command {
  stereo: Stereo;
  volume: number;

  public constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.off();
  }

  public undo(): void {
    this.stereo.setVolume(this.volume);
  }
}
