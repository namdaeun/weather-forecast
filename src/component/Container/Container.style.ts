import { css } from '@emotion/react';
import { MOBILE_MEDIA_QUERY } from '../../style/mediaQuery';
import { theme } from '../../style/theme';

export const wrapperStyle = css({
 display: 'flex',

 width: '100%',

 padding: '2rem 3.4rem',

 flexDirection: 'column',

 borderRadius: '15px',

 backgroundColor: theme.colors.blue700,

 [`@media ${MOBILE_MEDIA_QUERY}`]: {
  padding: '2rem',
  flexDirection: 'column',
  gap: '1rem',
 },
});

export const titleStyle = css({
 color: theme.colors.gray200,

 ...theme.fonts.body1,

 whiteSpace: 'nowrap',
});
