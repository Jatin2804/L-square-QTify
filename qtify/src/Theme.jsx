import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
        h1: {
          fontFamily: 'Poppins, Arial, sans-serif',
        },
        h2: {
          fontFamily: 'Poppins, Arial, sans-serif',
        },
      },
  palette: {
    primary: {
      main: '#121212',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#34C94B',
    //   light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
    //   contrastText: '#47008F',
    },
  },
});
export default theme;

