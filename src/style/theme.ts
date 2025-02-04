const colors = {
 blue900: '#0C111D',
 blue700: '#202B3B',

 gray700: '#666',
 gray600: '#595F6C',
 gray300: '#ACB5C7',
 gray200: '#DDD',
 gray100: '#D8E0EF',

 white: '#FFF',
} as const;

const fonts = {
 title1: {
  fontSize: '6rem',
  fontWeight: 700,
 },
 title2: {
  fontSize: '4rem',
  fontWeight: 700,
 },
 title3: {
  fontSize: '3rem',
  fontWeight: 600,
 },
 body1: {
  fontSize: '1.7rem',
  fontWeight: 600,
 },
 body2: {
  fontSize: '1.5rem',
  fontWeight: 600,
 },
 body3: {
  fontSize: '1.5rem',
  fontWeight: 400,
 },
 body4: {
  fontSize: '1.3rem',
  fontWeight: 600,
 },
 body5: {
  fontSize: '1.1rem',
  fontWeight: 700,
 },
 body6: {
  fontSize: '1.6rem',
  fontWeight: 400,
 },
} as const;

export const theme = {
 colors,
 fonts,
};
