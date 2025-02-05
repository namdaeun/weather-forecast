import React from 'react';
import Container from '../../component/Container/Container';
import Divider from '../../component/Divider/Divider';
import type { HourlyWeather, Weather } from '../../type/forecast';
import { formatTime } from '../../util/formatTime';
import { getWeatherImg } from '../../util/getWeatherIcon';
import * as S from './HourlyForecast.style';

const HourlyForecast = ({
 hourlyForecast,
}: { hourlyForecast: HourlyWeather[] }) => {
 return (
  <Container title="시간 별 일기예보">
   <div css={S.layoutStyle}>
    {hourlyForecast.map((hour, index) => (
     <>
      <div key={`${hour.time}-${index}`} css={S.forecastStyle}>
       <p css={S.hourStyle}>{formatTime(hour.time)}</p>
       <p>{getWeatherImg(hour.condition.text.trim() as Weather, 100)}</p>
       <p css={S.temperatureStyle}>{hour.temp_c}°C</p>
      </div>
      {index !== hourlyForecast.length - 1 && (
       <Divider size={100} type="vertical" />
      )}
     </>
    ))}
   </div>
  </Container>
 );
};

export default HourlyForecast;
