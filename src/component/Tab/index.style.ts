import { css } from '@emotion/react';
import { MOBILE_MEDIA_QUERY } from '../../style/mediaQuery';
import { theme } from '../../style/theme';

export const buttonStyle = (isSelected: boolean) => {
 const color = isSelected ? theme.colors.gray200 : theme.colors.gray700;

 return css({
  display: 'flex',

  padding: '1.2rem',

  alignItems: 'center',
  gap: '0.7rem',

  borderRadius: '12px',

  color,
  backgroundColor: isSelected ? theme.colors.gray600 : 'transparent',

  ...theme.fonts.body1,

  cursor: 'pointer',

  svg: {
   path: {
    fill: color,
   },
  },

  [`@media ${MOBILE_MEDIA_QUERY}`]: {
   ...theme.fonts.body4,
  },
 });
};

export const tabListStyle = css({
 display: 'flex',

 width: 'fit-content',

 padding: '0.5rem',

 borderRadius: '12px',

 gap: '1rem',

 backgroundColor: theme.colors.blue700,
});
