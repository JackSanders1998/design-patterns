import {Veggies} from "./Veggies";
import {Cheese} from "./Cheese";
import {PizzaIngredientFactory} from "./PizzaIngredientFactory";
import {ThickCrustDough} from "./ThickCrustDough";
import {PlumTomatoSauce} from "./PlumTomatoSauce";
import {SlicedPepperoni} from "./SlicedPepperoni";
import {Eggplant} from "./Eggplant";
import {Sauce} from "./Sauce";
import {BlackOlives} from "./BlackOlives";
import {MozzarellaCheese} from "./MozzarellaCheese";
import {Dough} from "./Dough";
import {Spinach} from "./Spinach";
import {FrozenClams} from "./FrozenClams";
import {Clams} from "./Clams";
import {Pepperoni} from "./Pepperoni";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new ThickCrustDough();
    }

    public createSauce(): Sauce {
        return new PlumTomatoSauce();
    }

    public createCheese(): Cheese {
        return new MozzarellaCheese();
    }

    public createVeggies(): Veggies[] {
        return [new BlackOlives(), new Spinach(), new Eggplant()];
    }

    public createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    public createClam(): Clams {
        return new FrozenClams();
    }

    constructor() {
    }
}