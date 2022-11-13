import {WeatherData} from "../../patterns/observer/WeatherData";
import {CurrentConditionsDisplay} from "../../patterns/observer/CurrentConditionsDisplay";
import {StatisticsDisplay} from "../../patterns/observer/StatisticsDisplay";
import {ForecastDisplay} from "../../patterns/observer/ForecastDisplay";
import {HeatIndexDisplay} from "../../patterns/observer/HeatIndexDisplay";

const Observer = () => {
  const weatherData: WeatherData = new WeatherData();
  const currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
  const statisticsDisplay: StatisticsDisplay = new StatisticsDisplay(weatherData);
  const forecastDisplay: ForecastDisplay = new ForecastDisplay(weatherData);
  const heatIndexDisplay: HeatIndexDisplay = new HeatIndexDisplay(weatherData);
  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);

  return <>observer pattern</>;
};

export default Observer;
