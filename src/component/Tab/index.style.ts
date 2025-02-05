import { css } from '@emotion/react';
import { MOBILE_MEDIA_QUERY } from '../../style/mediaQuery';
import { theme } from '../../style/theme';

export const buttonStyle = (isSelected: boolean) => {
 const color = isSelected ? theme.colors.blue700 : theme.colors.gray700;

 return css({
  display: 'flex',

  padding: '1.2rem',

  alignItems: 'center',
  gap: '0.7rem',

  borderRadius: '12px',

  color,
  backgroundColor: 'transparent',

  zIndex: '1',

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

export const tabWrapperStyle = css({
 position: 'relative',
 display: 'flex',
 alignItems: 'center',
});

export const tabIndicatorStyle = css({
 position: 'absolute',
 bottom: 0,
 left: 0,

 width: '100%',
 padding: '2.2rem',
 height: '3px',

 borderRadius: '10px',

 backgroundColor: theme.colors.gray200,

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  padding: '1.9rem',
 },
});
