import React from 'react';
import Container from '../../component/Container/Container';
import type { Forecast } from '../../type/forecast';

const WeeklyForecast = ({ forecast }: { forecast?: Forecast }) => {
 if (!forecast || !forecast.forecastday) {
  return <div>loading</div>;
 }

 return (
  <Container title="7-Days Forecast" maxWidth={36}>
   {forecast.forecastday.map(day => (
    <div key={day.date}>
     <p>{day.date}</p>
     <p>{day.day.condition.text}</p>
     <p>Max: {day.day.maxtemp_c}°C</p>
     <p>Min: {day.day.mintemp_c}°C</p>
    </div>
   ))}
  </Container>
 );
};

export default WeeklyForecast;
