import type { HourlyWeather } from '../type/forecast';

export const extractSixHourlyForecast = (hourlyData: HourlyWeather[]) => {
 return hourlyData.filter(item => {
  const time = item.time.split(' ')[1];

  return ['06:00', '09:00', '12:00', '15:00', '18:00'].includes(time);
 });
};
