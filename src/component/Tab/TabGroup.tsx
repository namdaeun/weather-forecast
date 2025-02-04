import React, { type ReactNode } from 'react';
import { TabProvider } from './TabContext';

interface TabGroupProps {
 children: ReactNode;
}

const TabGroup = ({ children }: TabGroupProps) => {
 return <TabProvider>{children}</TabProvider>;
};

export default TabGroup;
