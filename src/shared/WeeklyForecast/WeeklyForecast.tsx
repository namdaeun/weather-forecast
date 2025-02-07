import React from 'react';
import Container from '../../component/Container/Container';
import Divider from '../../component/Divider/Divider';
import type { Forecast, Weather } from '../../type/forecast';
import { formatDate } from '../../util/formatDate';
import { getWeatherImg } from '../../util/getWeatherIcon';
import * as S from './WeeklyForecast.style';

const WeeklyForecast = ({ forecast }: { forecast?: Forecast }) => {
 return (
  <Container title="7-Days Forecast" css={S.containerStyle}>
   <ul css={S.wrapperStyle}>
    {forecast?.forecastday.map((day, index) => (
     <li key={day.date}>
      <div css={S.layoutStyle}>
       <p css={S.dateStyle}>{formatDate(day.date)}</p>
       <p>{getWeatherImg(day.day.condition.text.trim() as Weather, 50)}</p>
       <p css={S.temperatureStyle}>
        {day.day.maxtemp_c} / {day.day.mintemp_c}
       </p>
      </div>
      {index !== forecast?.forecastday.length - 1 && (
       <Divider size={100} type="horizontal" />
      )}
     </li>
    ))}
   </ul>
  </Container>
 );
};

export default WeeklyForecast;
