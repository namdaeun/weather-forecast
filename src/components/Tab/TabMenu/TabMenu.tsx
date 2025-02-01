import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import * as S from './TabMenu.style';

interface TabMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: ReactNode;
	menu: string;
	isSelected: boolean;
}

const TabMenu = ({ icon, menu, isSelected, ...props }: TabMenuProps) => {
	return (
		<button
			id={`${menu}-tab`}
			type="button"
			role="tab"
			tabIndex={0}
			aria-selected={isSelected}
			css={S.tabMenuStyle(isSelected)}
			{...props}
		>
			{icon}
			{menu}
		</button>
	);
};

export default TabMenu;
