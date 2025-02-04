import { css } from '@emotion/react';
import { MOBILE_MEDIA_QUERY } from '../../style/mediaQuery';
import { theme } from '../../style/theme';

export const wrapperStyle = css({
 display: 'flex',

 padding: '1.8rem',

 justifyContent: 'space-around',
 gap: '10rem',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  flexDirection: 'column',

  gap: '3rem',
 },
});

export const categoryStyle = css({
 display: 'flex',

 gap: '1.5rem',

 color: theme.colors.gray300,
 ...theme.fonts.body6,

 whiteSpace: 'nowrap',
});

export const layoutStyle = css({
 display: 'flex',

 flexDirection: 'column',

 gap: '3rem',
});

export const rightLayoutStyle = css({
 display: 'flex',

 flexDirection: 'column',
 justifyContent: 'space-around',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  gap: '3rem',
 },
});

export const categoryLayoutStyle = css({
 display: 'flex',

 flexDirection: 'column',

 gap: '1.8rem',
});

export const valueStyle = css({
 paddingLeft: '3rem',

 ...theme.fonts.title3,

 whiteSpace: 'nowrap',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  paddingLeft: '0rem',
 },
});
