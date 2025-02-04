import React, { Children, type PropsWithChildren } from 'react';
import { useTab } from './TabContext';
import * as S from './index.style';

type TabListProps = PropsWithChildren;

const TabList = ({ children }: TabListProps) => {
 const { selectedIndex, setSelectedIndex } = useTab();

 return (
  <div role="tablist" css={S.tabListStyle}>
   {Children.map(children, (child, index) =>
    React.isValidElement(child)
     ? React.cloneElement(child, {
        ...child.props,
        'data-is-selected': index === selectedIndex,
        onClick: () => setSelectedIndex(index),
       })
     : child,
   )}
  </div>
 );
};

export default TabList;
