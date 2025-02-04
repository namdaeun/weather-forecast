import React, { type HTMLAttributes } from 'react';
import { useTab } from './TabContext';

interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
 index: number;
}

const TabPanel = ({ index, ...props }: TabPanelProps) => {
 const { selectedIndex } = useTab();

 const isSelected = selectedIndex === index;

 return (
  <div
   role="tabpanel"
   aria-hidden={!isSelected}
   hidden={!isSelected}
   {...props}
  />
 );
};

export default TabPanel;
