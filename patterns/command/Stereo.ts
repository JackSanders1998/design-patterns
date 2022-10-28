import Command from "./Command";

export default class Stereo {
  location: string;

  public constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    console.log(this.location + " stereo is on");
  }

  public off(): void {
    console.log(this.location + " stereo is off");
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

  public setVolume(volume: number): void {
    // code to set the volume
    // valid range: 1-11 (after all 11 is better than 10, right?)
    console.log(this.location + " Stereo volume set to " + volume);
  }
}

export class StereoOnCommand implements Command {
  stereo: Stereo;

  public constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.on();
  }
}

export class StereoOnWithCDCommand implements Command {
  stereo: Stereo;

  public constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }
}

export class StereoOffCommand implements Command {
  stereo: Stereo;

  public constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.off();
  }
}
