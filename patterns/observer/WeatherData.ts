import {Subject} from "./Subject";
import {Observer} from "./Observer";

export class WeatherData implements Subject {
    observers: Observer[];
    temperature: number;
    humidity: number;
    pressure: number;

    public constructor() {
        this.observers = <any>([]);
    }

    public registerObserver(o: Observer): void {
        // add
        this.observers.push(o);
    }

    public removeObserver(o: Observer): void {
        // remove
        const i: number = this.observers.indexOf(o);
        if (i >= 0){
            // this.observers.splice(i, 1)[0];
            this.observers.splice(i, 1);
        }
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    public measurementsChanged(): void {
        this.notifyObservers();
    }

    public setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

    public getTemperature(): number {
        return this.temperature;
    }

    public getHumidity(): number {
        return this.humidity;
    }

    public getPressure(): number {
        return this.pressure;
    }
}