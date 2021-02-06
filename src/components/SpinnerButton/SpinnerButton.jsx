import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress } from '@material-ui/core';
import { blue, red, green, grey } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles({
  root: {
    minWidth: '110px',
  },
  red: {
    color: red[500],
  },
  blue: {
    color: blue[500],
  },
  green: {
    color: green[500],
  },
  grey: {
    color: grey[800],
  },
});

const SpinnerButton = () => {
  const classes = useStyles();
  const [status, setStatus] = React.useState('SAVE');
  const timerLoading = React.useRef();
  const timerStatus = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timerLoading.current);
      clearTimeout(timerStatus.current);
    };
  }, []);

  const handleButtonClick = () => {
    setStatus('loading');
    timerLoading.current = window.setTimeout(() => {
      setStatus('error');
      timerStatus.current = window.setTimeout(() => {
        setStatus('SAVE');
      }, 2000);
    }, 2000);
  };

  const getIcon = () => {
    let btnIcon;

    if (status === 'loading') {
      btnIcon = (
        <CircularProgress size={18} className={classes.blue} />
      );
    } else if (status === 'success') {
      btnIcon = <CheckIcon size={18} className={classes.green} />;
    } else if (status === 'error') {
      btnIcon = <ErrorIcon size={18} className={classes.red} />;
    } else if (status === 'SAVE') {
      btnIcon = <SaveIcon size={18} className={classes.grey} />;
    }

    return btnIcon;
  };

  return (
    <Button
      disableElevation
      className={classes.root}
      variant="contained"
      color="primary"
      disabled={status !== 'SAVE'}
      onClick={handleButtonClick}
      startIcon={getIcon()}
    >
      {status}
    </Button>
  );
};

export default SpinnerButton;
