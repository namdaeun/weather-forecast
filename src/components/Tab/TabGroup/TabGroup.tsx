import React, { type ReactNode } from 'react';

interface TabGroupProps {
	children: ReactNode;
}

const TabGroup = ({ children }: TabGroupProps) => {
	return (
		<div css={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
	);
};

export default TabGroup;
