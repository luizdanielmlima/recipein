import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import indigo from '@material-ui/core/colors/indigo';
import { amber, blue, blueGrey } from '@material-ui/core/colors';

export const lightTheme = createMuiTheme({
  // palette: {
  //   background: {
  //     paper: amber[100],
  //     default: amber[50],
  //   },
  //   primary: {
  //     main: orange[400],
  //     // #ffa726
  //   },
  //   secondary: {
  //     main: indigo[700],
  //   },
  // },
  palette: {
    common: {
      black: 'rgba(12, 18, 26, 1)',
      white: 'rgba(255, 252, 246, 1)',
    },
    background: {
      paper: 'rgba(255, 250, 238, 1)',
      default: 'rgba(255, 246, 230, 1)',
    },
    primary: {
      light: 'rgba(81, 229, 219, 1)',
      main: 'rgba(24, 188, 176, 1)',
      dark: 'rgba(21, 133, 125, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: 'rgba(226, 25, 99, 1)',
      dark: '#c51162',
      contrastText: 'rgba(252, 236, 255, 1)',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 50, 109, 1)',
      secondary: 'rgba(50, 71, 97, 1)',
      disabled: 'rgba(109, 128, 153, 1)',
      hint: 'rgba(109, 128, 153, 1)',
    },
  },
  typography: {
    h1: {
      fontFamily: `Bree Serif, "serif"`,
      fontSize: 22,
      fontWeight: 400,
    },
    h2: {
      fontFamily: `"Bree Serif", "serif"`,
      fontSize: 20,
      fontWeight: 400,
    },
    h3: {
      fontFamily: `"Bree Serif", "serif"`,
      fontSize: 17,
      fontWeight: 400,
    },
    h4: {
      fontFamily: `"Bree Serif", "serif"`,
      fontSize: 15,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 13,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 13,
      fontWeight: 400,
      color: '#555',
    },
    button: {
      fontSize: 12,
      fontWeight: 300,
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: blueGrey[900],
      default: blueGrey[800],
    },
    primary: {
      main: '#ef9cca',
      // #ffa726
    },
    secondary: {
      main: '#7dd4d5',
    },
  },
  typography: {
    h1: {
      fontFamily: `"Bree Serif", "serif"`,
      fontSize: 22,
      fontWeight: 400,
    },
    h2: {
      fontFamily: `"Bree Serif", "serif"`,
      fontSize: 20,
      fontWeight: 400,
    },
    h3: {
      fontFamily: `"Bree Serif", "serif"`,
      fontSize: 17,
      fontWeight: 400,
    },
    h4: {
      fontFamily: `"Bree Serif", "serif"`,
      fontSize: 15,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 13,
      fontWeight: 500,
      color: '#bbb',
    },
    subtitle2: {
      fontSize: 13,
      fontWeight: 300,
      color: '#bbb',
    },
    button: {
      fontSize: 12,
      fontWeight: 300,
    },
  },
});
