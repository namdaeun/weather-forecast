import { css } from '@emotion/react';
import { theme } from '../../style/theme';

export const wrapperStyle = (maxWidth: number) =>
 css({
  display: 'flex',

  width: '100%',
  maxWidth: `${maxWidth}rem`,

  padding: '2rem 3.4rem',

  flexDirection: 'column',

  borderRadius: '15px',

  backgroundColor: theme.colors.blue700,
 });

export const titleStyle = css({
 color: theme.colors.gray200,

 ...theme.fonts.body1,

 whiteSpace: 'nowrap',
});
