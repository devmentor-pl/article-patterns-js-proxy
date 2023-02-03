import AskWeatherApiInterface from './interface/AskWeatherApiInterface.js';

export default class WeatherApi extends AskWeatherApiInterface {
    #latitude;
    #longitude;

    constructor(latitude, longitude) {
        super();
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    async getWeather() {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${
            this.#latitude
        }&longitude=${this.#longitude}&current_weather=true`;
        
        const response = await fetch(url);
        const data = await response.json();
        const weather = data.current_weather;

        return weather;
    }
}
