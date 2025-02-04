import React from 'react';

import {
 IcClouds,
 IcCloudsSnow,
 IcRain,
 IcSnow,
 IcSun,
 IcSunCloudsRain,
} from '../asset/svg';
import type { Weather } from '../type/forecast';

export const getWeatherIcon = (weather: Weather, size: number) => {
 switch (weather) {
  case 'Partly Cloudy':
  case 'Overcast':
  case 'Cloudy':
  case 'Mist':
   return <IcClouds width={size} height={size} css={{ flexShrink: '0' }} />;
  case 'Clear':
  case 'Sunny':
   return <IcSun width={size} height={size} css={{ flexShrink: '0' }} />;
  case 'Light freezing rain':
   return (
    <IcSunCloudsRain width={size} height={size} css={{ flexShrink: '0' }} />
   );
  case 'Moderate snow':
  case 'Patchy snow nearby':
  case 'Light snow showers':
   return <IcCloudsSnow width={size} height={size} css={{ flexShrink: '0' }} />;
  case 'Blizzard':
  case 'Moderate or heavy snow showers':
   return <IcSnow width={size} height={size} css={{ flexShrink: '0' }} />;
  case 'Rain':
   return <IcRain width={size} height={size} css={{ flexShrink: '0' }} />;
  default:
   return <IcSun width={size} height={size} css={{ flexShrink: '0' }} />;
 }
};
