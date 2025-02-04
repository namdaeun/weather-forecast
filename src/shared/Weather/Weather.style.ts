import { css } from '@emotion/react';
import { theme } from '../../style/theme';

export const cityNameStyle = css({
 marginBottom: '0.4rem',

 ...theme.fonts.title2,
});

export const descStyle = css({
 marginBottom: '2.1rem',

 ...theme.fonts.body3,
});

export const degreeStyle = css({
 ...theme.fonts.title1,
});

export const wrapperStyle = css({
 display: 'flex',

 width: '100%',
 height: 'calc(100vh - 18rem)',

 paddingTop: '1rem',

 justifyContent: 'space-between',
 gap: '3.7rem',
});

export const layoutStyle = css({
 display: 'flex',

 width: '100%',

 flexDirection: 'column',
 gap: '1rem',
});
