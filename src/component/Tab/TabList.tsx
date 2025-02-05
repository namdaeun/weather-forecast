import React, { Children, type PropsWithChildren } from 'react';

import { motion } from 'framer-motion';
import { useTab } from './TabContext';
import * as S from './index.style';

type TabListProps = PropsWithChildren;

const TabList = ({ children }: TabListProps) => {
 const { selectedIndex } = useTab();

 return (
  <div role="tablist" css={S.tabListStyle}>
   {Children.map(children, (child, index) =>
    React.isValidElement(child) ? (
     <div key={child.key} css={S.tabWrapperStyle}>
      {React.cloneElement(child, {
       ...child.props,
       'data-is-selected': index === selectedIndex,
      })}
      {index === selectedIndex && (
       <motion.div
        layoutId="tab-indicator"
        css={S.tabIndicatorStyle}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
       />
      )}
     </div>
    ) : (
     child
    ),
   )}
  </div>
 );
};

export default TabList;
