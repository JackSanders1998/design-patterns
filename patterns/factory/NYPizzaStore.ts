import {Pizza} from "./Pizza";
import {PizzaStore} from "./PizzaStore";
import {CheesePizza} from "./CheesePizza";
import {PizzaIngredientFactory} from "./PizzaIngredientFactory";
import {VeggiePizza} from "./VeggiePizza";
import {ClamPizza} from "./ClamPizza";
import {PepperoniPizza} from "./PepperoniPizza";
import {NYPizzaIngredientFactory} from "./NYPizzaIngredientFactory";

export class NYPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        // @ts-ignore
        let pizza: Pizza = null;
        const ingredientFactory: PizzaIngredientFactory = new NYPizzaIngredientFactory();
        if (item === ("cheese")){
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("New York Style Cheese Pizza");
        } else if (item === ("veggie")){
            pizza = new VeggiePizza(ingredientFactory);
            pizza.setName("New York Style Veggie Pizza");
        } else if (item === ("clam")){
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName("New York Style Clam Pizza");
        } else if (item === ("pepperoni")){
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName("New York Style Pepperoni Pizza");
        }
        return pizza;
    }
}