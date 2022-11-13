import {DisplayElement} from "./DisplayElement";
import {Subject} from "./Subject";
import {Observer} from "./Observer";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    temperature: number;
    humidity: number;
    weatherData: Subject;

    public constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    public display() {
        console.info(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
    }
}