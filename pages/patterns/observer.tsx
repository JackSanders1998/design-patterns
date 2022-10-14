import React, { useState } from "react";
import DuckSimulator, {
  ResponseType,
} from "../../patterns/strategy/DuckSimulator";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type PropType = {
  buttonText: string;
  strategyFunction: ResponseType;
};

type DisplayDuckType = {
  duck: string;
  iconBackground: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function Strategy() {
  let duck = new DuckSimulator();
  const [simulations, setSimulations] = useState<ResponseType[]>([]);

  function DuckFeed(props: DisplayDuckType) {
    return (
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {simulations.map((simulation, eventIdx) => (
            <li key={simulation.mallard}>
              <div className="relative pb-8">
                {eventIdx !== simulations.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={classNames(
                        props.iconBackground,
                        "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-gray-800"
                      )}
                    >
                      <props.icon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">{props.duck} </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      {/* <time dateTime={event.datetime}>{event.date}</time> */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const StrategyContent = () => {
    return (
      <div className="flex flex-row">
        <div className="basis-1/2">
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {simulations.map((simulation, eventIdx) => (
                <li key={simulation.mallard}>
                  <div className="relative pb-8">
                    {eventIdx !== simulations.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <DuckFeed
                      duck={simulation.mallard}
                      icon={simulation.icon}
                      iconBackground={simulation.iconBackground}
                    />{" "}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="basis-2/2">
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {simulations.map((simulation, eventIdx) => (
                <li key={simulation.mallard}>
                  <div className="relative pb-8">
                    {eventIdx !== simulations.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <DuckFeed
                      duck={simulation.rubberDuck}
                      icon={simulation.icon}
                      iconBackground={simulation.iconBackground}
                    />{" "}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const StrategyButton = (props: PropType) => {
    const handleClick = () => {
      const tempSimulations = simulations.slice();
      tempSimulations.push(props.strategyFunction);
      setSimulations(tempSimulations);
      console.log(simulations);
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
    <div className="bg-slate-02 min-h-screen text-slate-12 font-readex">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto py-8">
          <div className="flex flex-row pb-10">
            <div className="basis-1/4">
              <StrategyButton
                buttonText="Talk"
                strategyFunction={duck.simulateTalking()}
              />
            </div>
            <div className="basis-2/4">
              <StrategyButton
                buttonText="Quack"
                strategyFunction={duck.simulateQuack()}
              />
            </div>
            <div className="basis-3/4">
              <StrategyButton
                buttonText="Fly"
                strategyFunction={duck.simulateFly()}
              />
            </div>
            <div className="basis-4/4">
              <StrategyButton
                buttonText="Dynamic"
                strategyFunction={duck.simulateChangeBehaviorDynamically()}
              />
            </div>
          </div>
          <StrategyContent />
        </div>
      </div>
    </div>
  );
}
