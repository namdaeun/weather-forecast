import React, { type ReactNode } from 'react';
import { TabProvider } from '../TabContext';

interface TabGroupProps {
  children: ReactNode;
}

const TabGroup = ({ children }: TabGroupProps) => {
  return (
    <TabProvider>
      <div css={{ display: 'flex' }}>{children}</div>
    </TabProvider>
  );
};

export default TabGroup;
