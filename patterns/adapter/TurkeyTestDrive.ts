import {Turkey} from "./Turkey";
import {DuckAdapter} from "./DuckAdapter";
import {MallardDuck} from "./MallardDuck";

export class TurkeyTestDrive {
    public static main() {
        const duck: MallardDuck = new MallardDuck();
        const duckAdapter: Turkey = new DuckAdapter(duck);
        for (let i: number = 0; i < 10; i++) {
            console.info("The DuckAdapter says...");
            duckAdapter.gobble();
            duckAdapter.fly();
        }
    }
}