import {State} from "./State";
import {GumballMachine} from "./GumballMachine";

export class NoQuarterState implements State {
    gumballMachine: GumballMachine;

    public constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter(): void {
        console.info("You inserted a quarter");
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    }

    public ejectQuarter(): void {
        console.info("You haven\'t inserted a quarter");
    }

    public turnCrank(): void {
        console.info("You turned, but there\'s no quarter");
    }

    public dispense(): void {
        console.info("You need to pay first");
    }

    public toString(): string {
        return "waiting for quarter";
    }
}