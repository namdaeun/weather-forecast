import type { Current, Forecast, HourlyWeather } from '../type/forecast';

export const DEFAULT_CURRENT: Current = {
 temp_c: 0,
 feelslike_c: 0,
 wind_kph: 0,
 uv: 0,
 condition: { text: 'Clear ' },
};

export const DEFAULT_FORECAST: Forecast = {
 forecastday: [
  {
   date: '',
   day: {
    maxtemp_c: 0,
    mintemp_c: 0,
    daily_chance_of_rain: 0,
    daily_chance_of_snow: 0,
    temp_c: 0,
    feelslike_c: 0,
    wind_kph: 0,
    uv: 0,
    condition: { text: 'Clear ' },
   },
   hour: [],
  },
 ],
};

export const DEFAULT_HOUR: HourlyWeather[] = [
 {
  time: '',
  temp_c: 0,
  condition: {
   text: 'Clear ',
  },
 },
];
