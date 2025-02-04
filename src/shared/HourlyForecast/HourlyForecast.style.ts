import { css } from '@emotion/react';
import { MOBILE_MEDIA_QUERY } from '../../style/mediaQuery';
import { theme } from '../../style/theme';

export const layoutStyle = css({
 display: 'flex',

 padding: '5.7rem 1rem',

 gap: '2rem',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  padding: '2rem 1rem',
  flexDirection: 'column',
  gap: '1rem',
 },
});

export const hourStyle = css({
 color: theme.colors.gray300,

 ...theme.fonts.body2,

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  textAlign: 'center',

  ...theme.fonts.body8,
 },
});

export const forecastStyle = css({
 display: 'flex',

 width: '100%',

 flexDirection: 'column',
 alignItems: 'center',

 gap: '3rem',

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  flexDirection: 'row',
  gap: '1rem',
 },
});

export const temperatureStyle = css({
 color: theme.colors.gray200,

 ...theme.fonts.body1,

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  ...theme.fonts.body8,
 },
});
