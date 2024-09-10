import { SNATCH_COLOR, SNATCH_HEIGHT, SNATCH_WIDTH } from './src/constants/snatchTheme';

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: SNATCH_COLOR.white,
        light: SNATCH_COLOR.light,
        deepLight: SNATCH_COLOR.deepLight,
        dark: SNATCH_COLOR.dark,
        deepDark: SNATCH_COLOR.deepDark,
        black: SNATCH_COLOR.black,
        pointBlue: SNATCH_COLOR.black,
      },
      fontFamily: {
        base: 'Poppins',
      },
      fontSize: {
        big: '30px',
        middle: '25px',
        small: '20px',
      },
      spacing: {
        header: SNATCH_HEIGHT.header.sm,
        sidebar: SNATCH_WIDTH.sidebar,
      },
    },
  },
  plugins: [],
};
