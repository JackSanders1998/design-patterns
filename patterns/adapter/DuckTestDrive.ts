import {WildTurkey} from "./WildTurkey";
import {TurkeyAdapter} from "./TurkeyAdapter";
import {MallardDuck} from "./MallardDuck";
import {Duck} from "./Duck";

export class DuckTestDrive {
    public static main() {
        const duck: MallardDuck = new MallardDuck();
        const turkey: WildTurkey = new WildTurkey();
        const turkeyAdapter: Duck = new TurkeyAdapter(turkey);
        console.info("The Turkey says...");
        turkey.gobble();
        turkey.fly();
        console.info("\nThe Duck says...");
        DuckTestDrive.testDuck(duck);
        console.info("\nThe TurkeyAdapter says...");
        DuckTestDrive.testDuck(turkeyAdapter);
    }

    static testDuck(duck: Duck) {
        duck.quack();
        duck.fly();
    }
}