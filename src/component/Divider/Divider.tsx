import type { HTMLAttributes } from 'react';

import React from 'react';
import { commonStyle, dividerStyle } from '../Divider/Divider.style';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
 type?: 'horizontal' | 'vertical';
 size?: number;
}

const Divider = ({ type = 'horizontal', size = 100 }: DividerProps) => {
 return <hr css={[commonStyle, dividerStyle(type, size)]} />;
};

export default Divider;
