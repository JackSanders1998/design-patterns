import {DisplayElement} from "./DisplayElement";
import {WeatherData} from "./WeatherData";
import {Observer} from "./Observer";

export class HeatIndexDisplay implements Observer, DisplayElement {
    heatIndex: number;
    weatherData: WeatherData;

    public constructor(weatherData: WeatherData) {
        this.heatIndex = 0;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public update(t: number, rh: number, pressure: number): void {
        this.heatIndex = this.computeHeatIndex(t, rh);
        this.display();
    }

    private computeHeatIndex(t: number, rh: number): number {
        return <number>((16.923 + (0.185212 * t) + (5.37941 * rh) - (0.100254 * t * rh) + (0.00941695 * (t * t)) + (0.00728898 * (rh * rh)) + (3.45372E-4 * (t * t * rh)) - (8.14971E-4 * (t * rh * rh)) + (1.02102E-5 * (t * t * rh * rh)) - (3.8646E-5 * (t * t * t)) + (2.91583E-5 * (rh * rh * rh)) + (1.42721E-6 * (t * t * t * rh)) + (1.97483E-7 * (t * rh * rh * rh)) - (2.18429E-8 * (t * t * t * rh * rh)) + 8.43296E-10 * (t * t * rh * rh * rh)) - (4.81975E-11 * (t * t * t * rh * rh * rh)));
    }

    public display() {
        console.info(`Heat index is ${this.heatIndex}`);
    }
}