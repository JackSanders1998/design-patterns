export default class TV {
  location: string;
  channel: number;

  public constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    console.log("TV is on");
  }

  public off(): void {
    console.log("TV is off");
  }

  public setInputChannel(): void {
    this.channel = 3;
    console.log("Channel is set for VCR");
  }
}
