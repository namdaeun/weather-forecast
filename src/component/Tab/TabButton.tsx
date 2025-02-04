import React, { type ButtonHTMLAttributes } from 'react';

import { useTab } from './TabContext';
import * as S from './index.style';

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 index: number;
}

const TabButton = ({ index, onClick, children, ...props }: TabButtonProps) => {
 const { selectedIndex, setSelectedIndex } = useTab();
 const isSelected = selectedIndex === index;

 return (
  <button
   type="button"
   role="tab"
   tabIndex={isSelected ? 0 : -1}
   aria-selected={isSelected}
   css={S.buttonStyle(isSelected)}
   onClick={e => {
    setSelectedIndex(index);
    onClick?.(e);
   }}
   {...props}
  >
   {children}
  </button>
 );
};

export default TabButton;
