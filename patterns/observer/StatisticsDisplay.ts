import {DisplayElement} from "./DisplayElement";
import {Observer} from "./Observer";
import {WeatherData} from "./WeatherData";

export class StatisticsDisplay implements Observer, DisplayElement {
    maxTemp: number;
    minTemp: number;
    tempSum: number;
    numReadings: number;
    weatherData: WeatherData;

    public constructor(weatherData: WeatherData) {
        this.maxTemp = 0;
        this.minTemp = 200;
        this.tempSum = 0;
        this.numReadings = 0;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public update(temp: number, humidity: number, pressure: number) {
        this.tempSum += temp;
        this.numReadings++;
        if (temp > this.maxTemp){
            this.maxTemp = temp;
        }
        if (temp < this.minTemp){
            this.minTemp = temp;
        }
        this.display();
    }

    public display() {
        console.info(`Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${this.maxTemp}/${this.minTemp}`);
    }
}