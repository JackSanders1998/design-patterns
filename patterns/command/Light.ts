import Command from "./Command";
import {ApplianceStatus, ApplianceAttributes} from "./CommandTypes";

export default class Light {
  location: string;
  level: number;

  public constructor(location: string) {
    this.location = location;
  }

  public on(): ApplianceAttributes {
    this.level = 100;
    return {
      location: this.location,
      status: ApplianceStatus.ON,
    }
  }

  public off(): ApplianceAttributes {
    this.level = 0;
    return {
      location: this.location,
      status: ApplianceStatus.OFF,
    }
  }

  public dim(level: number): void {
    this.level = level;
    if (level == 0) {
      this.off();
    } else {
      console.log("Light is dimmed to", level, "%");
    }
  }

  public getLevel(): number {
    return this.level;
  }
}

export class LightOnCommand implements Command {
  light: Light;
  level: number;

  public constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.level = this.light.getLevel();
    this.light.on();
  }

  public undo(): void {
    this.light.dim(this.level);
  }
}

export class LightOffCommand implements Command {
  light: Light;
  level: number;

  public constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.level = this.light.getLevel();
    this.light.off();
  }

  public undo(): void {
    this.light.dim(this.level);
  }
}

export class LivingroomLightOnCommand implements Command {
  light: Light;
  level: number;

  public constructor(light: Light) {
    this.level = this.light.getLevel();
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }

  public undo(): void {
    this.light.dim(this.level);
  }
}

export class LivingroomLightOffCommand implements Command {
  light: Light;
  level: number;

  public constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.level = this.light.getLevel();
    this.light.off();
  }

  public undo(): void {
    this.light.dim(this.level);
  }
}
