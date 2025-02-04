import React from 'react';

import IcSearch from './asset/svg/IcSearch';
import Input from './component/Input/Input';
import * as S from './index.style';
import Weather from './shared/Weather/Weather';

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
