import {Turkey} from "./Turkey";

export class WildTurkey implements Turkey {
    public gobble(): void {
        console.info("Gobble gobble");
    }

    public fly(): void {
        console.info("I\'m flying a short distance");
    }

    constructor() {
    }
}