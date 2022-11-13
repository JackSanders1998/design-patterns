import {DisplayElement} from "./DisplayElement";
import {WeatherData} from "./WeatherData";
import {Observer} from "./Observer";

export class ForecastDisplay implements Observer, DisplayElement {
    currentPressure: number;
    lastPressure: number;
    weatherData: WeatherData;

    public constructor(weatherData: WeatherData) {
        this.currentPressure = 29.92;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public update(temp: number, humidity: number, pressure: number): void {
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;
        this.display();
    }

    public display(): void {
        console.info(`Forecast: ${this.currentPressure > this.lastPressure ? "Improving weather on the way!" : this.currentPressure === this.lastPressure ? "More of the same" : this.currentPressure < this.lastPressure ? "Watch out for cooler, rainy weather" : ""}`);
    }
}