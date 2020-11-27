import './App.css';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  titleStyle: {
    fontStyle: 'oblique',
    marginBottom: '2rem'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Typography 
            variant="h4"
            color="primary"
            className={classes.titleStyle}
          >
            This is the title
          </Typography>
          <Button color="primary" variant="outlined">click me!</Button>
        </header>
      </div>
    </ThemeProvider>

  );
}

export default App;
