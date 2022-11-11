import {Duck} from "./Duck";

export class MallardDuck implements Duck {
    public quack(): void {
        console.info("Quack");
    }

    public fly(): void {
        console.info("I\'m flying");
    }

    constructor() {
    }
}