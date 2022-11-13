import React from "react";
import {GumballMachine} from "../../patterns/state/GumballMachine";


const State = () => {
  const gumballMachine: GumballMachine = new GumballMachine(5);

  const InsertQuarter = () => {
    const handleClick = () => {
      gumballMachine.insertQuarter();
      console.log(gumballMachine.toString());
    }
    return (
        <button onClick={handleClick} className={`border border-1 border-slate-100 rounded-md text-center text-slate-300`}>Insert Quarter</button>
    )
  }
  const TurnCrank = () => {
    const handleClick = () => {
      gumballMachine.turnCrank();
      console.log(gumballMachine.toString());
    }
    return (
        <button onClick={handleClick} className={`border border-1 border-slate-100 rounded-md text-center text-slate-300`}>Turn Crank</button>
    )
  }

  return (
      <div className="text-slate-300">
        <InsertQuarter />
        <TurnCrank />
      </div>
  );
};

export default State;
