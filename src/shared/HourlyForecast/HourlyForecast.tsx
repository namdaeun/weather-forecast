import React from 'react';
import type { HourlyWeather } from '../../type/forecast';

const HourlyForecast = ({
 hourlyForecast,
}: { hourlyForecast: HourlyWeather[] }) => {
 return (
  <div>
   {hourlyForecast.map((hour, index) => (
    <div key={`${hour.time}-${index}`}>
     <p>{hour.time}</p>
     <p>온도: {hour.temp_c}°C</p>
     <p>날씨: {hour.condition.text}</p>
    </div>
   ))}
  </div>
 );
};

export default HourlyForecast;
