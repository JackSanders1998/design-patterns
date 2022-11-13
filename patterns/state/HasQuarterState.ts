import {getRandomInt} from "../../utils/RandomNumber";
import {State} from "./State";
import {GumballMachine} from "./GumballMachine";

export class HasQuarterState implements State {
    randomWinner: number;
    gumballMachine: GumballMachine;

    public constructor(gumballMachine: GumballMachine) {
        this.randomWinner = getRandomInt(/* currentTimeMillis */Date.now());
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter(): void {
        console.info("You can\'t insert another quarter");
    }

    public ejectQuarter(): void {
        console.info("Quarter returned");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }

    public turnCrank(): void {
        console.info("You turned...");
        const winner: number = getRandomInt(10);
        if ((winner === 0) && (this.gumballMachine.getCount() > 1)){
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        } else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    }

    public dispense(): void {
        console.info("No gumball dispensed");
    }

    public toString(): string {
        return "waiting for turn of crank";
    }
}