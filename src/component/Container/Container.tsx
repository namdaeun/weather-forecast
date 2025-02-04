import React, { type ComponentPropsWithoutRef } from 'react';
import * as S from './Container.style';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
 title: string;
 maxWidth?: string;
}

const Container = ({ title, children, maxWidth, ...props }: ContainerProps) => {
 return (
  <div css={S.wrapperStyle(maxWidth || '')} {...props}>
   <h1 css={S.titleStyle}>{title}</h1>
   {children}
  </div>
 );
};

export default Container;
