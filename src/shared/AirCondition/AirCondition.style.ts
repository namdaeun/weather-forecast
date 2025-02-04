import { css } from '@emotion/react';
import { theme } from '../../style/theme';

export const wrapperStyle = css({
 display: 'flex',

 padding: '1.8rem',

 justifyContent: 'space-around',
 gap: '10rem',
});

export const categoryStyle = css({
 display: 'flex',

 gap: '1.5rem',

 color: theme.colors.gray300,
 ...theme.fonts.body6,

 whiteSpace: 'nowrap',
});

export const layoutStyle = css({
 display: 'flex',

 flexDirection: 'column',

 gap: '3rem',
});

export const rightLayoutStyle = css({
 display: 'flex',

 flexDirection: 'column',
 justifyContent: 'space-around',
});

export const categoryLayoutStyle = css({
 display: 'flex',

 flexDirection: 'column',

 gap: '1.8rem',
});

export const valueStyle = css({
 paddingLeft: '3rem',

 ...theme.fonts.title3,

 whiteSpace: 'nowrap',
});
