import { createTheme } from '@mui/material/styles';
import { SNATCH_COLOR } from './snatchTheme';

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: SNATCH_COLOR.pointBlue,
    },
  },
  typography: {
    fontFamily: 'Poppins',
    big: {
      fontSize: '30px',
    },
    middle: {
      fontSize: '25px',
    },
    small: {
      fontSize: '20px',
    },
  },
  components: {
    MuiButton: {
      stylesOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default muiTheme;
