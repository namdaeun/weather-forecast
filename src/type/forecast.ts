export type Weather =
 | 'Partly Cloudy'
 | 'Clear'
 | 'Sunny'
 | 'Overcast'
 | 'Cloudy'
 | 'Light freezing rain'
 | 'Moderate snow'
 | 'Blizzard'
 | 'Moderate or heavy snow showers'
 | 'Light snow showers'
 | 'Patchy snow nearby'
 | 'Rain';

export type TemperatureInfo = {
 temp_c: number;
 condition: WeatherCondition;
 feelslike_c: number;
 wind_kph: number;
 uv: number;
};

export type WeatherCondition = {
 text: Weather;
};

export interface Location {
 name: string;
 region: string;
 country: string;
}

export type HourlyWeather = {
 time: string;
 temp_c: number;
 condition: WeatherCondition;
};

export interface Forecast {
 forecastday: Forecastday[];
}

export type Forecastday = {
 date: string;
 day: TemperatureInfo & {
  maxtemp_c: number;
  mintemp_c: number;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
 };
 hour: HourlyWeather[];
};

export type Current = TemperatureInfo;
