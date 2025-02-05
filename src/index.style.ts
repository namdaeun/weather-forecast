import { css } from '@emotion/react';
import { MOBILE_MEDIA_QUERY } from './style/mediaQuery';
import { theme } from './style/theme';

export const wrapperStyle = css({
 display: 'flex',

 padding: '6rem 8rem',

 gap: '2.8rem',
});

export const triggerStyle = css({
 position: 'relative',

 '& > button': {
  width: '100%',

  background: 'transparent',
 },
});

export const menuStyle = css({
 display: 'flex',
 position: 'absolute',

 width: 'min(70rem, calc(100% - 16rem))',
 maxWidth: '70rem',
 maxHeight: '30rem',

 padding: '1.5rem 3rem',
 marginTop: '0.3rem',

 flexDirection: 'column',
 gap: '2rem',

 borderRadius: '15px',
 backgroundColor: theme.colors.blue700,

 overflowY: 'auto',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  width: 'min(69rem, calc(100% - 16rem))',
  maxHeight: '10rem',
 },
});

export const menuItemStyle = css({
 minWidth: '0',

 color: theme.colors.gray200,
 backgroundColor: theme.colors.blue700,

 ...theme.fonts.body3,

 cursor: 'pointer',

 '& div': {
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
 },

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  maxWidth: '69rem',
 },
});
