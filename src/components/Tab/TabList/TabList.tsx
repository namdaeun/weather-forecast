import React, { Children, type ReactNode } from 'react';
import { useTab } from '../TabContext';

interface TabListProps {
	children: ReactNode;
}

const TabList = ({ children }: TabListProps) => {
	const { selectedTabIndex, setSelectedTabIndex } = useTab();

	return (
		<div
			role="tablist"
			css={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: '4rem',
			}}
		>
			{Children.map(children, (child, index) =>
				React.isValidElement(child)
					? React.cloneElement(child, {
							...child.props,
							isSelected: index === selectedTabIndex,
							onClick: () => setSelectedTabIndex(index),
						})
					: child,
			)}
		</div>
	);
};

export default TabList;
