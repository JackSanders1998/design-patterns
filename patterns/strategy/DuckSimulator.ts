import Duck from "./Duck";
import MallardDuck from "./Ducks/MallardDuck";
import RubberDuck from "./Ducks/RubberDuck";
import FlyRocketPowered from "./FlyBehaviors/FlyRocketPowered";
import {
  CheckIcon,
  PaperAirplaneIcon,
  RadioIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";

export type ResponseType = {
  mallard: string;
  rubberDuck: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default class DuckSimulator {
  private mallard: Duck;
  private rubberDuck: Duck;

  constructor() {
    this.mallard = new MallardDuck();
    this.rubberDuck = new RubberDuck();
  }

  simulateTalking(): ResponseType {
    return {
      mallard: this.mallard.display(),
      rubberDuck: this.rubberDuck.display(),
      icon: CheckIcon,
    };
  }

  simulateQuack(): ResponseType {
    return {
      mallard: this.mallard.performQuack(),
      rubberDuck: this.rubberDuck.performQuack(),
      icon: RadioIcon,
    };
  }

  simulateFly(): ResponseType {
    return {
      mallard: this.mallard.performFly(),
      rubberDuck: this.rubberDuck.performFly(),
      icon: PaperAirplaneIcon,
    };
  }

  simulateChangeBehaviorDynamically(): ResponseType {
    this.mallard.setFlyBehavior(new FlyRocketPowered());
    this.rubberDuck.setFlyBehavior(new FlyRocketPowered());
    return {
      mallard: this.mallard.performFly(),
      rubberDuck: this.rubberDuck.performFly(),
      icon: RocketLaunchIcon,
    };
  }
}
