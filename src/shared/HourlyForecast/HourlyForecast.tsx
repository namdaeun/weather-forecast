import React from 'react';
import Container from '../../components/Container/Container';
import type { HourlyWeather } from '../../type/forecast';
import { formatTime } from '../../util/formatTime';
import { getWeatherIcon } from '../../util/getWeatherIcon';
import * as S from './HourlyForecast.style';

const HourlyForecast = ({
 hourlyForecast,
}: { hourlyForecast: HourlyWeather[] }) => {
 return (
  <Container title="시간 별 일기예보">
   <div css={S.layoutStyle}>
    {hourlyForecast.map((hour, index) => (
     <div key={`${hour.time}-${index}`} css={S.forecastStyle}>
      <p css={S.hourStyle}>{formatTime(hour.time)}</p>
      <p>{getWeatherIcon(hour.condition.text, 100)}</p>
      <p css={S.temperatureStyle}>{hour.temp_c}°C</p>
     </div>
    ))}
   </div>
  </Container>
 );
};

export default HourlyForecast;
