import ChocolateBoiler, {
  ChocolateBoilerResponse,
  SingletonResponseType,
} from "../../patterns/singleton";
import React, { useState } from "react";

type PropType = {
  buttonText: string;
  singletonFunction: SingletonResponseType;
};

const Singleton = () => {
  const [chocolateBoilerFeed, setChocolateBoilerFeed] = useState([]);
  let chocolateResponse: ChocolateBoilerResponse[] = [];
  let chocolateManager = ChocolateBoiler.getInstance();
  // chocolateResponse.push({
  //   empty: chocolateManager.isEmpty(),
  //   boiled: chocolateManager.isBoiled(),
  // });
  // chocolateManager.fill();
  // chocolateResponse.push({
  //   empty: chocolateManager.isEmpty(),
  //   boiled: chocolateManager.isBoiled(),
  // });
  // chocolateManager.boil();
  // chocolateResponse.push({
  //   empty: chocolateManager.isEmpty(),
  //   boiled: chocolateManager.isBoiled(),
  // });
  // chocolateManager.drain();
  // chocolateResponse.push({
  //   empty: chocolateManager.isEmpty(),
  //   boiled: chocolateManager.isBoiled(),
  // });
  // console.log(chocolateResponse);

  const SingletonButton = (props: PropType) => {
    const handleClick = () => {
      const tempchocolateBoilerFeed = chocolateBoilerFeed.slice();
      // tempchocolateBoilerFeed.push(props.singletonFunction);
      setChocolateBoilerFeed(tempchocolateBoilerFeed);
      setChocolateBoilerFeed(tempchocolateBoilerFeed);
    };
    return (
      <button
        type="button"
        className="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handleClick}
      >
        {props.buttonText}
      </button>
    );
  };

  return (
    <div>
      <h1 className="text-white">Singleton Pattern</h1>
    </div>
  );
};

export default Singleton;
