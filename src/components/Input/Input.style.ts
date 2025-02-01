import { css } from '@emotion/react';
import { theme } from '../../style/theme';

export const inputWrapperStyle = css({
 position: 'relative',
 display: 'flex',

 maxWidth: '70rem',
 padding: '1.7rem',

 alignItems: 'center',
 gap: '1.2rem',

 border: 'none',
 borderRadius: '8px',

 backgroundColor: theme.colors.blue700,

 transition: '0.2s ease-in-out',

 '&:focus-within': {
  boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
 },
});

export const inputStyle = css({
 width: '100%',

 border: 'none',

 backgroundColor: 'transparent',

 outline: 'none',

 color: theme.colors.gray200,

 '::placeholder': {
  color: theme.colors.gray300,
  ...theme.fonts.body3,
 },
});
