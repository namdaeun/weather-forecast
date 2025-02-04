import { css } from '@emotion/react';
import { theme } from '../../style/theme';

export const layoutStyle = css({
 display: 'flex',

 padding: '3rem 1rem',

 gap: '2rem',
});

export const hourStyle = css({
 color: theme.colors.gray300,

 ...theme.fonts.body2,
});

export const forecastStyle = css({
 display: 'flex',

 width: '100%',

 flexDirection: 'column',
 alignItems: 'center',

 gap: '3rem',
});

export const temperatureStyle = css({
 color: theme.colors.gray200,

 ...theme.fonts.body1,
});
