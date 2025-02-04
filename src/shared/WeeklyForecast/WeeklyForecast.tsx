import React from 'react';
import Container from '../../component/Container/Container';
import type { Forecast } from '../../type/forecast';
import { formatDate } from '../../util/formatDate';
import { getWeatherIcon } from '../../util/getWeatherIcon';
import * as S from './WeeklyForecast.style';

const WeeklyForecast = ({ forecast }: { forecast?: Forecast }) => {
 if (!forecast || !forecast.forecastday) {
  return <div>loading</div>;
 }

 return (
  <Container title="7-Days Forecast" maxWidth={36}>
   <div css={S.wrapperStyle}>
    {forecast.forecastday.map(day => (
     <div key={day.date} css={{}}>
      <div css={S.layoutStyle}>
       <p css={S.dateStyle}>{formatDate(day.date)}</p>
       <p>{getWeatherIcon(day.day.condition.text, 60)}</p>
       <p css={S.temperatureStyle}>
        {day.day.maxtemp_c} / {day.day.mintemp_c}
       </p>
      </div>
     </div>
    ))}
   </div>
  </Container>
 );
};

export default WeeklyForecast;
