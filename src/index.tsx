import React from 'react';
import Weather from './Weather/Weather';
import IcSearch from './assets/svg/icon/IcSearch';
import Input from './components/Input/Input';
import * as S from './index.style';

const Index = () => {
 return (
  <div css={S.wrapperStyle}>
   <div css={{ width: '100%' }}>
    <Input
     placeholder="search"
     leftIcon={<IcSearch width={15} height={15} />}
    />
    <Weather />
   </div>
  </div>
 );
};

export default Index;
