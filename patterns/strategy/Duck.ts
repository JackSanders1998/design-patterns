import FlyBehavior from "./FlyBehaviors/FlyBehavior";
import QuackBehavior from "./QuackBehaviors/QuackBehavior";

export default abstract class Duck {
  public flyBehavior: FlyBehavior;
  public quackBehavior: QuackBehavior;

  constructor() {}

  public abstract display(): string;

  public performFly(): string {
    return this.flyBehavior.fly();
  }

  public performQuack(): string {
    return this.quackBehavior.quack();
  }

  /**
   * adds ability to set behavior at runtime if desired
   * @param fb
   */
  public setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }
}
