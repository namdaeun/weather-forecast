import React, { useState } from 'react';
import Map from './Map/Map';
import Weather from './Weather/Weather';
import IcSearch from './assets/svg/icon/IcSearch';
import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar';
import * as S from './index.style';
import type { NavItem } from './type/nav';

function App() {
 const [selectedItem, setSelectedItem] = useState<NavItem>('weather');

 return (
  <div css={S.wrapperStyle}>
   <Navbar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

   <div css={{ width: '100%' }}>
    <Input
     placeholder="search"
     leftIcon={<IcSearch width={15} height={15} />}
    />
    {selectedItem === 'weather' && <Weather />}
    {selectedItem === 'map' && <Map />}
   </div>
  </div>
 );
}

export default App;
