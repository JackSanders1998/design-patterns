import {Veggies} from "./Veggies";
import {Onion} from "./Onion";
import {Mushroom} from "./Mushroom";
import {MarinaraSauce} from "./MarinaraSauce";
import {Cheese} from "./Cheese";
import {PizzaIngredientFactory} from "./PizzaIngredientFactory";
import {RedPepper} from "./RedPepper";
import {SlicedPepperoni} from "./SlicedPepperoni";
import {ThinCrustDough} from "./ThinCrustDough";
import {Sauce} from "./Sauce";
import {Dough} from "./Dough";
import {ReggianoCheese} from "./ReggianoCheese";
import {Garlic} from "./Garlic";
import {Clams} from "./Clams";
import {FreshClams} from "./FreshClams";
import {Pepperoni} from "./Pepperoni";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new ThinCrustDough();
    }

    public createSauce(): Sauce {
        return new MarinaraSauce();
    }

    public createCheese(): Cheese {
        return new ReggianoCheese();
    }

    public createVeggies(): Veggies[] {
        return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
    }

    public createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    public createClam(): Clams {
        return new FreshClams();
    }

    constructor() {
    }
}