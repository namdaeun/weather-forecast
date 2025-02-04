import type { HourlyWeather } from '../type/forecast';

export const extractSixHourlyForecast = (hourlyData: HourlyWeather[]) => {
 return hourlyData.filter((_, index) => index % 6 === 0);
};
