import {Pizza} from "./Pizza";

export abstract class PizzaStore {
    abstract createPizza(item: string): Pizza;

    public orderPizza(type: string): Pizza {
        const pizza: Pizza = this.createPizza(type);
        console.info("--- Making a " + pizza.getName() + " ---");
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}