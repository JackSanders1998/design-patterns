import Command from "./Command";

export default class Light {
  location: string;

  public constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    console.log(this.location + " light is on");
  }

  public off(): void {
    console.log(this.location + " light is off");
  }
}

export class LightOnCommand implements Command {
  light: Light;

  public constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.on();
  }
}

export class LightOffCommand implements Command {
  light: Light;

  public constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }
}

export class LivingroomLightOnCommand implements Command {
  light: Light;

  public constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }
}

export class LivingroomLightOffCommand implements Command {
  light: Light;

  public constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }
}
