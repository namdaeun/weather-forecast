import React, { type ButtonHTMLAttributes } from 'react';
import * as S from './index.style';

interface TabMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 menu: string;
 isSelected?: boolean;
 onClick?: () => void;
}

const TabButton = ({
 menu,
 isSelected = true,
 onClick,
 ...props
}: TabMenuProps) => {
 return (
  <button
   type="button"
   role="tab"
   tabIndex={isSelected ? 0 : -1}
   aria-selected={isSelected}
   css={S.buttonStyle(isSelected)}
   onClick={onClick}
   {...props}
  >
   {menu}
  </button>
 );
};

export default TabButton;
