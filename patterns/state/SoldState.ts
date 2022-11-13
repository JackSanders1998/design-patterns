import {State} from "./State";
import {GumballMachine} from "./GumballMachine";

export class SoldState implements State {
    gumballMachine: GumballMachine;

    public constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter(): void {
        console.info("Please wait, we\'re already giving you a gumball");
    }

    public ejectQuarter(): void {
        console.info("Sorry, you already turned the crank");
    }

    public turnCrank(): void {
        console.info("Turning twice doesn\'t get you another gumball!");
    }

    public dispense(): void {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() > 0){
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        } else {
            console.info("Oops, out of gumballs!");
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
    }

    public toString(): string {
        return "dispensing a gumball";
    }
}