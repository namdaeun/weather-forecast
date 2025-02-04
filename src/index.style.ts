import { css } from '@emotion/react';
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

 width: '100%',
 maxWidth: '70rem',

 padding: '2rem 3rem',
 marginTop: '0.3rem',

 flexDirection: 'column',
 gap: '2rem',

 borderRadius: '15px',

 backgroundColor: theme.colors.blue700,
});

export const menuItemStyle = css({
 display: 'flex',
 width: '100%',

 justifyContent: 'start',

 color: theme.colors.gray200,
 backgroundColor: theme.colors.blue700,

 ...theme.fonts.body3,

 cursor: 'pointer',
});
