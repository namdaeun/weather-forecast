import React, { useState } from 'react';

import { SelectV2 } from '@sopt-makers/ui';
import { fetchSearchResults } from './api/fetchSearchCity';
import IcSearch from './asset/svg/IcSearch';
import Input from './component/Input/Input';
import * as S from './index.style';
import Weather from './shared/Weather/Weather';
import type { SearchLocation } from './type/forecast';

const Index = () => {
 const [value, setValue] = useState('');
 const [searchResults, setSearchResults] = useState<SearchLocation[]>([]);
 const [selectedLocation, setSelectedLocation] = useState('Seoul');

 const handleSearch = async (location: string) => {
  if (location.trim() === '') return;

  const results = await fetchSearchResults(location);
  setSearchResults(results);
 };

 const handleSelectLocation = (location: string) => {
  setSelectedLocation(location);
  setValue(location);
  setSearchResults([]);
 };

 return (
  <div css={S.wrapperStyle}>
   <div css={{ width: '100%' }}>
    <SelectV2.Root type="text" css={S.triggerStyle}>
     <SelectV2.Trigger>
      <Input
       placeholder="Search for a city"
       leftIcon={<IcSearch width={15} height={15} />}
       value={value}
       onChange={e => {
        setValue(e.target.value);
        handleSearch(e.target.value);
       }}
      />
     </SelectV2.Trigger>
     {searchResults.length > 0 && (
      <SelectV2.Menu css={S.menuStyle}>
       {searchResults.map(location => (
        <SelectV2.MenuItem
         key={location.id}
         option={{
          value: location.id,
          label: `${location.name}, ${location.region}`,
         }}
         onClick={() =>
          handleSelectLocation(`${location.name}, ${location.region}`)
         }
         css={S.menuItemStyle}
        />
       ))}
      </SelectV2.Menu>
     )}
    </SelectV2.Root>

    <Weather searchLocation={selectedLocation} />
   </div>
  </div>
 );
};

export default Index;
