import {Veggies} from "./Veggies";
import {Sauce} from "./Sauce";
import {Dough} from "./Dough";
import {Cheese} from "./Cheese";
import {Clams} from "./Clams";
import {Pepperoni} from "./Pepperoni";

export abstract class Pizza {
    name: string;
    dough: Dough;
    sauce: Sauce;
    veggies: Veggies[];
    cheese: Cheese;
    pepperoni: Pepperoni;
    clam: Clams;

    protected constructor() {};

    abstract prepare(): void;

    bake(): void {
        console.info("Bake for 25 minutes at 350");
    }

    cut(): void {
        console.info("Cutting the pizza into diagonal slices");
    }

    box(): void {
        console.info("Place pizza in official PizzaStore box");
    }

    setName(name: string): void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    public toString(): string {
        let pizza = "";
        // append name, dough, sauce, cheese, clam, pepperoni, veggies to pizza
        pizza += "---- " + this.name + " ----\n";
        this.dough && (pizza += this.dough + ", \n");
        this.sauce && (pizza += this.sauce + ", \n");
        this.cheese && (pizza += this.cheese + ", \n");
        this.clam && (pizza += this.clam + ", \n");
        this.pepperoni && (pizza += this.pepperoni + ", \n");
        for (const veggie of this.veggies || []) {
            pizza += veggie + ", \n";
        }
        return pizza;
    }
}