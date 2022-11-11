import {Cheese} from "./Cheese";

export class MozzarellaCheese implements Cheese {
    public toString(): string {
        return "Shredded Mozzarella";
    }

    constructor() {
    }
}