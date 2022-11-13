import {State} from "./State";
import {SoldState} from "./SoldState";
import {SoldOutState} from "./SoldOutState";
import {HasQuarterState} from "./HasQuarterState";
import {NoQuarterState} from "./NoQuarterState";
import {WinnerState} from "./WinnerState";

export class GumballMachine {
    soldOutState: State;
    noQuarterState: State;
    hasQuarterState: State;
    soldState: State;
    winnerState: State;
    state: State;
    count: number;

    public constructor(numberGumballs: number) {
        this.state = this.soldOutState;
        this.count = 0;
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);
        this.count = numberGumballs;
        if (numberGumballs > 0){
            this.state = this.noQuarterState;
        }
    }

    public insertQuarter(): void {
        this.state.insertQuarter();
    }

    public ejectQuarter(): void {
        this.state.ejectQuarter();
    }

    public turnCrank(): void {
        this.state.turnCrank();
        this.state.dispense();
    }

    setState(state: State): void {
        this.state = state;
    }

    releaseBall(): void {
        console.info("A gumball comes rolling out the slot...");
        if (this.count !== 0){
            this.count = this.count - 1;
        }
    }

    getCount(): number {
        return this.count;
    }

    refill(count: number): void {
        this.count = count;
        this.state = this.noQuarterState;
    }

    public getState(): State {
        return this.state;
    }

    public getSoldOutState(): State {
        return this.soldOutState;
    }

    public getNoQuarterState(): State {
        return this.noQuarterState;
    }

    public getHasQuarterState(): State {
        return this.hasQuarterState;
    }

    public getSoldState(): State {
        return this.soldState;
    }

    public getWinnerState(): State {
        return this.winnerState;
    }

    public toString(): string {
        return `Mighty Gumball, Inc.\nTypeScript-enabled Standing Gumball Model #2022\nInventory: ${this.count} gumball${this.count !== 1 ? 's' : ''}\nMachine is ${this.state}`;
    }
}