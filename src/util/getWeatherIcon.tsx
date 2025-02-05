import { css } from '@emotion/react';
import React from 'react';
import clouds from '../asset/img/clouds.png';
import cloudsSnow from '../asset/img/clouds_snow.png';
import rain from '../asset/img/rain.png';
import snow from '../asset/img/snow.png';
import sun from '../asset/img/sun.png';
import sunCloudsRain from '../asset/img/sun_clouds_rain.png';

import { MOBILE_MEDIA_QUERY } from '../style/mediaQuery';
import type { Weather } from '../type/forecast';

const imgStyle = (size: number) =>
 css({
  width: size,
  height: size,

  objectFit: 'cover',

  [`@media ${MOBILE_MEDIA_QUERY}`]: {
   width: size * 0.7,
   height: size * 0.7,
  },
 });

export const getWeatherImg = (weather: Weather, size: number) => {
 let imgSrc = sun;

 switch (weather) {
  case 'Partly Cloudy':
  case 'Overcast':
  case 'Cloudy':
   imgSrc = clouds;
   break;
  case 'Clear':
  case 'Sunny':
   imgSrc = sun;
   break;
  case 'Light freezing rain':
  case 'Patchy rain nearby':
  case 'Mist':
   imgSrc = sunCloudsRain;
   break;
  case 'Moderate snow':
  case 'Patchy snow nearby':
  case 'Light snow showers':
   imgSrc = cloudsSnow;
   break;
  case 'Blizzard':
  case 'Moderate or heavy snow showers':
   imgSrc = snow;
   break;
  case 'Rain':
   imgSrc = rain;
   break;
  default:
   imgSrc = sun;
   break;
 }

 return <img src={imgSrc} alt={weather} css={imgStyle(size)} />;
};
