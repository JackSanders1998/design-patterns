import {Veggies} from "./Veggies";
import {Sauce} from "./Sauce";
import {Dough} from "./Dough";
import {Cheese} from "./Cheese";
import {Clams} from "./Clams";
import {Pepperoni} from "./Pepperoni";

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createClam(): Clams;
}
