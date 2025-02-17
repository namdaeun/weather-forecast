import React, { useEffect, useState } from 'react';
import { fetchForecast } from '../../api/fetchForecast';
import { Tab } from '../../component/Tab';
import type {
 Current,
 Forecast,
 HourlyWeather,
 Location,
} from '../../type/forecast';
import { extractSixHourlyForecast } from '../../util/extractForecast';

import { getWeatherImg } from '../../util/getWeatherIcon';

import AirCondition from '../AirCondition/AirCondition';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import * as S from './Weather.style';

const Weather = ({ searchLocation }: { searchLocation: string }) => {
 const [current, setCurrent] = useState<Current>();
 const [location, setLocation] = useState<Location>();
 const [forecast, setForecast] = useState<Forecast>();
 const [hourlyForecast, setHourlyForecast] = useState<HourlyWeather[]>([]);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const data = await fetchForecast(searchLocation);
    const hourlyData = data.forecast.forecastday[0]?.hour || [];

    const filteredData = extractSixHourlyForecast(hourlyData);
    setHourlyForecast(filteredData);

    setCurrent(data.current);
    setForecast(data.forecast);
    setLocation(data.location);
   } catch (error) {
    console.error(error);
   }
  };

  fetchData();
 }, [searchLocation]);

 return (
  <div css={S.wrapperStyle}>
   <div css={S.layoutStyle}>
    <div css={S.containerStyle}>
     <div>
      <h1 css={S.cityNameStyle}>{location?.name}</h1>
      <p css={S.descStyle}>
       Chance of rain: {forecast?.forecastday[0].day.daily_chance_of_rain}%
      </p>
      <h2 css={S.degreeStyle}>{current?.temp_c}°</h2>
     </div>
     {current && getWeatherImg(current.condition.text, 184)}
    </div>
    <Tab>
     <Tab.List>
      <Tab.Button index={0}>Today's Forecast</Tab.Button>
      <Tab.Button index={1}>Air Condition</Tab.Button>
     </Tab.List>
     <Tab.Panel index={0}>
      <HourlyForecast hourlyForecast={hourlyForecast} />
     </Tab.Panel>
     <Tab.Panel index={1}>
      <AirCondition current={current} forecast={forecast} />
     </Tab.Panel>
    </Tab>
   </div>
   <WeeklyForecast forecast={forecast} />
  </div>
 );
};

export default Weather;
