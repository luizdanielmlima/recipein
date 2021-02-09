import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import indigo from '@material-ui/core/colors/indigo';
import { amber, blue, blueGrey } from '@material-ui/core/colors';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400],
      // #ffa726
    },
    secondary: {
      main: indigo[700],
    },
    background: {
      paper: amber[50],
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
    },
    subtitle2: {
      fontSize: 13,
      fontWeight: 300,
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
    },
    primary: {
      main: blue[400],
      // #ffa726
    },
    secondary: {
      main: orange[700],
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
