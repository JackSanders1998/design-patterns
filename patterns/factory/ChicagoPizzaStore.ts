import {Pizza} from "./Pizza";
import {PizzaStore} from "./PizzaStore";
import {ChicagoPizzaIngredientFactory} from "./ChicagoPizzaIngredientFactory";
import {CheesePizza} from "./CheesePizza";
import {PizzaIngredientFactory} from "./PizzaIngredientFactory";
import {VeggiePizza} from "./VeggiePizza";
import {ClamPizza} from "./ClamPizza";
import {PepperoniPizza} from "./PepperoniPizza";

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        // @ts-ignore
        let pizza: Pizza = null;
        const ingredientFactory: PizzaIngredientFactory = new ChicagoPizzaIngredientFactory();
        if (item === ("cheese")){
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("Chicago Style Cheese Pizza");
        } else if (item === ("veggie")){
            pizza = new VeggiePizza(ingredientFactory);
            pizza.setName("Chicago Style Veggie Pizza");
        } else if (item === ("clam")){
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName("Chicago Style Clam Pizza");
        } else if (item === ("pepperoni")){
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName("Chicago Style Pepperoni Pizza");
        }
        return pizza;
    }
}