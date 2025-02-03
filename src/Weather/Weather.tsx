import React from 'react';
import AirCondition from '../AirCondition/AirCondition';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import IcSun from '../assets/svg/icon/IcSun';
import Container from '../components/Container/Container';
import { Tab } from '../components/Tab';
import * as S from './Weather.style';

const Weather = () => {
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
      <h1 css={S.cityNameStyle}>Seoul</h1>
      <p css={S.descStyle}>Chance of rain: 10%</p>
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
   <Container title="7-Days Forecast" maxWidth={'36rem'}>
    gg
   </Container>
  </div>
 );
};

export default Weather;
