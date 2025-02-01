import React, { type HTMLAttributes } from 'react';

interface TabContentProp extends HTMLAttributes<HTMLDivElement> {
	tabMenu: string;
	isSelected: boolean;
}

const TabContent = ({ tabMenu, isSelected, ...props }: TabContentProp) => {
	return (
		<div
			role="tabpanel"
			hidden={!isSelected}
			aria-labelledby={`${tabMenu}-tab`}
			aria-hidden={!isSelected}
			{...props}
		/>
	);
};

export default TabContent;
