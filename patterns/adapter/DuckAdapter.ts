import {Turkey} from "./Turkey";
import {Duck} from "./Duck";
import {getRandomInt} from "./RandomNumber";

export class DuckAdapter implements Turkey {
    duck: Duck;
    rand: number;

    public constructor(duck: Duck) {
        this.duck = duck;
        this.rand = getRandomInt(5);
    }

    public gobble() {
        this.duck.quack();
    }

    public fly() {
        if (this.rand === 0){
            this.duck.fly();
        }
    }
}