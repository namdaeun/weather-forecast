import { css } from '@emotion/react';
import { theme } from '../../style/theme';

export const buttonStyle = (isSelected: boolean) => {
 const color = isSelected ? theme.colors.gray200 : theme.colors.gray700;

 return css({
  display: 'flex',

  alignItems: 'center',
  gap: '0.7rem',

  color,
  backgroundColor: 'transparent',

  ...theme.fonts.body1,

  cursor: 'pointer',

  svg: {
   path: {
    fill: color,
   },
  },
 });
};

export const tabListStyle = css({
 display: 'flex',

 gap: '4rem',
});
