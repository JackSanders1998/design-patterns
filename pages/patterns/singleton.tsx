import {
  ChocolateBoiler,
  SingletonResponseType,
} from "../../patterns/singleton/ChocolateBoiler";
import React from "react";

type PropType = {
  buttonText: string;
  singletonFunction: SingletonResponseType;
};

const Singleton = () => {
  const boiler: ChocolateBoiler = ChocolateBoiler.getInstance();

  const Fill = () => {
    return (
        <button onClick={() => {boiler.fill(); console.log(boiler)}} className={`border border-1 border-slate-100 rounded-md text-center text-slate-300`}>Fill</button>
    )
  }
  const Boil = () => {
    return (
        <button onClick={() => {boiler.boil(); console.log(boiler)}} className={`border border-1 border-slate-100 rounded-md text-center text-slate-300`}>Boil</button>
    )
  }
  const Drain = () => {
    return (
        <button onClick={() => {boiler.drain(); console.log(boiler)}} className={`border border-1 border-slate-100 rounded-md text-center text-slate-300`}>Drain</button>
    )
  }

  return (
      <div>
        <Fill />
        <Boil />
        <Drain />
      </div>
  );
};

export default Singleton;
