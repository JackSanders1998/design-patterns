import {State} from "./State";
import {GumballMachine} from "./GumballMachine";

export class SoldOutState implements State {
    gumballMachine: GumballMachine;

    public constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter(): void {
        console.info("You can\'t insert a quarter, the machine is sold out");
    }

    public ejectQuarter(): void {
        console.info("You can\'t eject, you haven\'t inserted a quarter yet");
    }

    public turnCrank(): void {
        console.info("You turned, but there are no gumballs");
    }

    public dispense(): void {
        console.info("No gumball dispensed");
    }

    public toString(): string {
        return "sold out";
    }
}