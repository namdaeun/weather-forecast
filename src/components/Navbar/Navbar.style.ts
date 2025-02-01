import { css } from '@emotion/react';
import { theme } from '../../style/theme';

export const navStyle = css({
 width: '7.3rem',
 height: 'calc(100vh - 13rem)',

 padding: '10rem 1.7rem',

 borderRadius: '15px',
 backgroundColor: theme.colors.blue700,
});

export const listStyle = css({
 display: 'flex',

 flexDirection: 'column',

 gap: '3.6rem',
});

export const itemStyle = (isSelected: boolean) => {
 const color = isSelected ? theme.colors.gray200 : theme.colors.gray700;

 return css({
  display: 'flex',

  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.7rem',

  color,
  backgroundColor: 'transparent',

  cursor: 'pointer',

  svg: {
   path: {
    fill: color,
   },
  },
 });
};
