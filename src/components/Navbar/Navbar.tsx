import type { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import React from 'react';
import IcMap from '../../assets/svg/icon/IcMap';
import IcWeather from '../../assets/svg/icon/IcWeather';
import type { NavItem } from '../../type/nav';
import * as S from './Navbar.style';

interface NavbarProps {
 selectedItem: NavItem;
 setSelectedItem: Dispatch<SetStateAction<NavItem>>;
}

const Navbar = ({ selectedItem, setSelectedItem }: NavbarProps) => {
 const handleClick = (item: NavItem) => {
  setSelectedItem(item);
 };

 const handleKeyDown = (e: KeyboardEvent, item: NavItem) => {
  e.preventDefault();

  if (e.key === 'enter') {
   handleClick(item);
  }
 };

 return (
  <nav css={S.navStyle}>
   <ul css={S.listStyle}>
    <li
     css={S.itemStyle(selectedItem === 'weather')}
     onClick={() => handleClick('weather')}
     onKeyDown={e => handleKeyDown(e, 'weather')}
    >
     <IcWeather width={25} height={20} />
     Weather
    </li>
    <li
     css={S.itemStyle(selectedItem === 'map')}
     onClick={() => handleClick('map')}
     onKeyDown={e => handleKeyDown(e, 'map')}
    >
     <IcMap width={25} height={20} />
     Map
    </li>
   </ul>
  </nav>
 );
};

export default Navbar;
