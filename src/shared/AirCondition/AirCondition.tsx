import React from 'react';
import type { Current, Forecast } from '../../type/forecast';

interface AirConditionProps {
 current: Current;
 forecast: Forecast;
}

const AirCondition = ({ current, forecast }: AirConditionProps) => {
 if (!forecast.forecastday.length) {
  return <div>Loading...</div>;
 }

 const currentForecast = forecast.forecastday[0].day;

 return (
  <div>
   <p>{current.feelslike_c}</p>
   <p>{currentForecast.daily_chance_of_rain}</p>
   <p>{currentForecast.daily_chance_of_snow}</p>
   <p>{current.wind_kph}</p>
   <p>{current.uv}</p>
  </div>
 );
};

export default AirCondition;
