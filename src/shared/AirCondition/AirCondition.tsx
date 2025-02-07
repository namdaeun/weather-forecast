import React from 'react';
import {
 IcRainDrop,
 IcSnowflake,
 IcTemperature,
 IcUv,
 IcWind,
} from '../../asset/svg';
import Container from '../../component/Container/Container';
import type { Current, Forecast } from '../../type/forecast';
import * as S from './AirCondition.style';

interface AirConditionProps {
 current?: Current;
 forecast?: Forecast;
}

const AirCondition = ({ current, forecast }: AirConditionProps) => {
 const currentForecast = forecast?.forecastday[0].day;

 return (
  <Container title="현재 날씨 정보">
   <div css={S.wrapperStyle}>
    <div css={S.layoutStyle}>
     <div css={S.categoryLayoutStyle}>
      <h2 css={S.categoryStyle}>
       <IcTemperature width={10} height={18} css={{ flexShrink: '0' }} />
       Real Feel
      </h2>
      <p css={S.valueStyle}>{current?.feelslike_c}°C</p>
     </div>
     <div css={S.categoryLayoutStyle}>
      <h2 css={S.categoryStyle}>
       <IcRainDrop width={10} height={18} css={{ flexShrink: '0' }} />
       Chance of Rain
      </h2>
      <p css={S.valueStyle}>{currentForecast?.daily_chance_of_rain}%</p>
     </div>
     <div css={S.categoryLayoutStyle}>
      <h2 css={S.categoryStyle}>
       <IcSnowflake width={18} height={18} css={{ flexShrink: '0' }} />
       Chance of Snow
      </h2>
      <p css={S.valueStyle}>{currentForecast?.daily_chance_of_snow}%</p>
     </div>
    </div>

    <div css={S.rightLayoutStyle}>
     <div css={S.categoryLayoutStyle}>
      <h2 css={S.categoryStyle}>
       <IcWind width={18} height={17} css={{ flexShrink: '0' }} />
       Wind
      </h2>
      <p css={S.valueStyle}>{current?.wind_kph}km/h</p>
     </div>
     <div css={S.categoryLayoutStyle}>
      <h2 css={S.categoryStyle}>
       <IcUv width={18} height={18} css={{ flexShrink: '0' }} />
       UV index
      </h2>
      <p css={S.valueStyle}>{current?.uv}</p>
     </div>
    </div>
   </div>
  </Container>
 );
};

export default AirCondition;
