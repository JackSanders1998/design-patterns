import {PizzaStore} from "../../patterns/factory/PizzaStore";
import {NYPizzaStore} from "../../patterns/factory/NYPizzaStore";
import {ChicagoPizzaStore} from "../../patterns/factory/ChicagoPizzaStore";
import {Pizza} from "../../patterns/factory/Pizza";
import {useEffect, useState} from "react";

const Factory = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const nyStore: PizzaStore = new NYPizzaStore();
  const chicagoStore: PizzaStore = new ChicagoPizzaStore();


  useEffect(() => {
    setPizzas([
      ...pizzas,
      nyStore.orderPizza("cheese"),
      chicagoStore.orderPizza("cheese"),
      nyStore.orderPizza("clam"),
      chicagoStore.orderPizza("clam"),
      nyStore.orderPizza("pepperoni"),
      chicagoStore.orderPizza("pepperoni"),
      nyStore.orderPizza("veggie"),
      chicagoStore.orderPizza("veggie"),
    ])
  }, []);

  return (
      <>
        {pizzas.map((pizza) => (
            <div key={pizza.name}>
              <div className="text-slate-300">
                <h1>------------</h1>
                <h1 className="text-xl">{pizza.name}</h1>
                <h1 className="text-xl">{pizza.toString()}</h1>
                <div>{pizza.dough.toString()}</div>
                <div>{pizza.sauce.toString()}</div>
                <div>{pizza.cheese.toString()}</div>
                <div>{pizza.clam?.toString()}</div>
                <div>Veggies:</div>
                {pizza.veggies?.map((veggie) => (
                    <div key={veggie.toString()}>
                        <div>{veggie.toString()}</div>
                    </div>
                ))}
              </div>
            </div>
        ))}
      </>
  );
};

export default Factory;