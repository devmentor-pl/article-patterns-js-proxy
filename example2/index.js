import WeatherApi from './WeatherApi.js';
import withProxy from './withProxy.js';

const weatherApi = new WeatherApi(52.23, 21.01);

withProxy(weatherApi).getWeather().then(weather => {
    console.log(weather);
});
