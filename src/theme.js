import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: indigo[700],
    },
  },
  typography: {
    h1: {
      fontSize: 22,
      fontWeight: 600,
    },
    h2: {
      fontSize: 20,
      fontWeight: 600,
    },
    h3: {
      fontSize: 16,
      fontWeight: 600,
    },
    h4: {
      fontSize: 14,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 10,
      fontWeight: 500,
    },
    button: {
      fontSize: 12,
      fontWeight: 300,
    },
  },
});

export default theme;