import React from 'react';

import { css } from '@emotion/react';
import {
 IcClouds,
 IcCloudsSnow,
 IcRain,
 IcSnow,
 IcSun,
 IcSunCloudsRain,
} from '../asset/svg';
import { MOBILE_MEDIA_QUERY } from '../style/mediaQuery';
import type { Weather } from '../type/forecast';

const iconStyle = (size: number) =>
 css({
  width: size,
  height: size,
  flexShrink: 0,

  [`@media ${MOBILE_MEDIA_QUERY}`]: {
   width: size * 0.7,
   height: size * 0.7,
  },
 });

export const getWeatherIcon = (weather: Weather, size: number) => {
 switch (weather) {
  case 'Partly Cloudy':
  case 'Overcast':
  case 'Cloudy':
   return <IcClouds width={size} height={size} css={iconStyle(size)} />;
  case 'Clear':
  case 'Sunny':
   return <IcSun width={size} height={size} css={iconStyle(size)} />;
  case 'Light freezing rain':
  case 'Mist':
   return <IcSunCloudsRain width={size} height={size} css={iconStyle(size)} />;
  case 'Moderate snow':
  case 'Patchy snow nearby':
  case 'Light snow showers':
   return <IcCloudsSnow width={size} height={size} css={iconStyle(size)} />;
  case 'Blizzard':
  case 'Moderate or heavy snow showers':
   return <IcSnow width={size} height={size} css={iconStyle(size)} />;
  case 'Rain':
   return <IcRain width={size} height={size} css={iconStyle(size)} />;
  default:
   return <IcSun width={size} height={size} css={iconStyle(size)} />;
 }
};
