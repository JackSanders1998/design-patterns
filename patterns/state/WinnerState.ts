import {State} from "./State";
import {GumballMachine} from "./GumballMachine";

export class WinnerState implements State {
    gumballMachine: GumballMachine;

    public constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter(): void {
        console.info("Please wait, we\'re already giving you a Gumball");
    }

    public ejectQuarter(): void {
        console.info("Please wait, we\'re already giving you a Gumball");
    }

    public turnCrank(): void {
        console.info("Turning again doesn\'t get you another gumball!");
    }

    public dispense(): void {
        console.info("YOU\'RE A WINNER! You get two gumballs for your quarter");
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() === 0){
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        } else {
            this.gumballMachine.releaseBall();
            if (this.gumballMachine.getCount() > 0){
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            } else {
                console.info("Oops, out of gumballs!");
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            }
        }
    }

    public toString(): string {
        return "dispensing two gumballs for your quarter, because YOU\'RE A WINNER!";
    }
}