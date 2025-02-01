import { css } from '@emotion/react';
import { theme } from '../../style/theme';

export const wrapperStyle = maxWidth =>
 css({
  display: 'flex',

  width: '100%',
  maxWidth,

  padding: '2rem 3.4rem',

  flexDirection: 'column',

  borderRadius: '15px',

  backgroundColor: theme.colors.blue700,
 });

export const titleStyle = css({
 color: theme.colors.gray200,

 ...theme.fonts.body1,
});
