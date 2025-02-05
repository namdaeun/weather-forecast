import { css } from '@emotion/react';
import { theme } from '../../style/theme';
import type { DividerProps } from './Divider';

export const commonStyle = css({
 border: 'none',

 backgroundColor: theme.colors.gray600,
});

export const dividerStyle = (
 type: Required<DividerProps>['type'],
 size: number,
) => {
 const style = {
  horizontal: css({
   width: `${size}%`,
   height: '0.1rem',
  }),

  vertical: css({
   width: '0.1rem',
   height: `${size}%`,
  }),
 };

 return style[type];
};
