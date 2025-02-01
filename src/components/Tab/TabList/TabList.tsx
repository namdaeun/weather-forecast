import React, { Children, type ReactNode } from 'react';

interface TabListProps {
	children: ReactNode;
	selectedIndex: number;
	onSelect: (index: number) => void;
}

const TabList = ({ children, selectedIndex, onSelect }: TabListProps) => {
	return (
		<div role="tablist">
			{Children.map(children, (child, index) =>
				React.isValidElement(child)
					? React.cloneElement(child, {
							...child.props,
							isSelected: index === selectedIndex,
							onClick: () => onSelect(index),
						})
					: child,
			)}
		</div>
	);
};

export default TabList;
