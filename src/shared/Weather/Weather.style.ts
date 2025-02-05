import { css } from '@emotion/react';
import { MOBILE_MEDIA_QUERY } from '../../style/mediaQuery';
import { theme } from '../../style/theme';

export const cityNameStyle = css({
 marginBottom: '0.4rem',

 ...theme.fonts.title2,

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  ...theme.fonts.title3,
 },
});

export const descStyle = css({
 marginBottom: '2.1rem',

 ...theme.fonts.body3,

 whiteSpace: 'nowrap',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  ...theme.fonts.body4,
 },
});

export const degreeStyle = css({
 ...theme.fonts.title1,

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  ...theme.fonts.title2,
 },
});

export const wrapperStyle = css({
 display: 'flex',

 width: '100%',
 height: 'calc(100vh - 18rem)',

 paddingTop: '1rem',

 justifyContent: 'space-between',
 gap: '3.7rem',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  flexWrap: 'wrap',
 },
});

export const layoutStyle = css({
 display: 'flex',

 width: '100%',

 flexDirection: 'column',
 gap: '1rem',
});

export const containerStyle = css({
 display: 'flex',

 padding: '2.3rem 5rem 0 3.7rem',

 justifyContent: 'space-between',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  padding: '2.3rem 2rem 0 2rem',
 },
});
