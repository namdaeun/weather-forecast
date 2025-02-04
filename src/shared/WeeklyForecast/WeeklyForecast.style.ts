import { css } from '@emotion/react';
import { theme } from '../../style/theme';

export const wrapperStyle = css({
 display: 'flex',

 height: '100%',

 padding: '2rem 0',

 flexDirection: 'column',
 justifyContent: 'space-around',
});

export const layoutStyle = css({
 display: 'flex',

 justifyContent: 'space-between',
 alignItems: 'center',
 gap: '2rem',
});

export const dateStyle = css({
 color: theme.colors.gray300,

 ...theme.fonts.body3,

 whiteSpace: 'nowrap',
});

export const temperatureStyle = css({
 minWidth: '5rem',

 ...theme.fonts.body5,

 whiteSpace: 'nowrap',
});
