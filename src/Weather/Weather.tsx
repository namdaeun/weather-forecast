import React, { useEffect, useState } from 'react';
import AirCondition from '../AirCondition/AirCondition';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import { fetch7daysForecast } from '../api/fetch7daysForecast';
import IcSun from '../assets/svg/icon/IcSun';
import { Tab } from '../components/Tab';
import type { Forecast, Location } from '../type/forecast';
import * as S from './Weather.style';
import WeeklyForecast from './WeeklyForecast/WeeklyForecast';

const Weather = () => {
 const [location, setLocation] = useState<Location>();
 const [forecast, setForecast] = useState<Forecast>();

 useEffect(() => {
  const fetchData = async () => {
   const data = await fetch7daysForecast();

   setLocation(data.location);
   setForecast(data.forecast);
  };
  fetchData();
 }, []);

 console.log(location?.name);

 return (
  <div css={S.wrapperStyle}>
   <div css={S.layoutStyle}>
    <div
     css={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '2.3rem 5rem 0 3.7rem',
     }}
    >
     <div>
      <h1 css={S.cityNameStyle}>{location?.name}</h1>
      <p css={S.descStyle}>
       Chance of rain: {forecast?.forecastday[0].day.daily_chance_of_rain}%
      </p>
      <h2 css={S.degreeStyle}>31°</h2>
     </div>
     <IcSun width={184} height={184} />
    </div>
    <Tab>
     <Tab.List>
      <Tab.Button menu={`Today's Forecast`} />
      <Tab.Button menu={'Air Condition'} />
     </Tab.List>
     <Tab.Panel index={0}>
      <HourlyForecast />
     </Tab.Panel>
     <Tab.Panel index={1}>
      <AirCondition />
     </Tab.Panel>
    </Tab>
   </div>
   <WeeklyForecast forecast={forecast} />
  </div>
 );
};

export default Weather;
