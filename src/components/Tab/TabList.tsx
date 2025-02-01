import React, { Children, type ReactNode } from 'react';
import { useTab } from './TabContext';
import * as S from './index.style';

interface TabListProps {
 children: ReactNode;
}

const TabList = ({ children }: TabListProps) => {
 const { selectedTabIndex, setSelectedTabIndex } = useTab();

 return (
  <div role="tablist" css={S.tabListStyle}>
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
