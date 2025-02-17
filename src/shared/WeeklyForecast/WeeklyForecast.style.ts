import { css } from '@emotion/react';
import { MOBILE_MEDIA_QUERY } from '../../style/mediaQuery';
import { theme } from '../../style/theme';

export const containerStyle = css({
 width: '40%',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  width: '100%',
 },
});

export const wrapperStyle = css({
 display: 'flex',

 height: '100%',

 padding: '2rem 0',

 flexDirection: 'column',
 justifyContent: 'space-around',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  padding: '2rem',
 },
});

export const layoutStyle = css({
 display: 'flex',

 justifyContent: 'space-between',
 alignItems: 'center',
 gap: '2rem',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  justifyContent: 'space-around',
 },
});

export const dateStyle = css({
 minWidth: '3.5rem',

 color: theme.colors.gray300,

 ...theme.fonts.body3,

 whiteSpace: 'nowrap',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  ...theme.fonts.body5,
 },
});

export const temperatureStyle = css({
 display: 'flex',

 minWidth: '6rem',

 justifyContent: 'end',

 ...theme.fonts.body5,

 whiteSpace: 'nowrap',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  ...theme.fonts.body7,
 },
});
