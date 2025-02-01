import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import * as S from './index.style';

interface TabMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 icon: ReactNode;
 menu: string;
 isSelected?: boolean;
 onClick?: () => void;
}

const TabButton = ({
 icon,
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
   css={S.tabMenuStyle(isSelected)}
   onClick={onClick}
   {...props}
  >
   {icon}
   {menu}
  </button>
 );
};

export default TabButton;
