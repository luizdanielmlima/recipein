import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress } from '@material-ui/core';

// ICONS
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  contained: {
    minWidth: '110px',
    color: theme.palette.background.paper,
  },
  outlined: {
    minWidth: '110px',
    color: theme.palette.primary,
  },
  red: {
    color: theme.palette.error.main,
  },
  primary: {
    color: theme.palette.primary,
  },
  secondary: {
    color: theme.palette.secondary,
  },
  green: {
    color: theme.palette.success.main,
  },
  grey: {
    color: theme.palette.background.paper,
  },
}));

// ==========================
// PROPS:

// TYPE: defines the label and icon of the button
// possible values: save (DEFAULT), edit, search, refresh, delete - WE CAN ADD MORE WITH TIME

// STATUS:
// iddle (DEFAULT): when button is "waiting to be clicked"
// waiting: sets the spinner
// error: optional, for showing if some error ocurred (e.g. a API call returned an error)
// success: optional, shows a green check mark

// HANDLECLICK : this is the function that will execute when the btn is clicked

// COLOR: either 'primary' or 'secondary' (material UI colors, defined in the theme)
// SIZE: small, medium (DEFAULT) or large
// VARIANT: contained (DEFAULT) or outlined

// Important: the btn label will change when status change to waiting, error or success, also its icon (transient statuses)
// ==========================

const SpinnerButton = (props) => {
  const { type, status, color, variant, size, handleClick } = props;
  const classes = useStyles();

  const getIcon = () => {
    let btnIcon;
    if (status === 'waiting') {
      btnIcon = (
        <CircularProgress size={18} className={classes.blue} />
      );
    } else if (status === 'success') {
      btnIcon = <CheckIcon size={18} className={classes.green} />;
    } else if (status === 'error') {
      btnIcon = <ErrorIcon size={18} className={classes.red} />;
    } else if (status === 'iddle') {
      btnIcon = getIconByBtnType();
    }
    return btnIcon;
  };

  const getIconByBtnType = () => {
    let icon;
    if (type === 'save') {
      icon = <SaveIcon size={18} className={classes.primary} />;
    } else if (type === 'edit') {
      icon = <EditIcon size={18} className={classes.primary} />;
    } else if (type === 'search') {
      icon = <SearchIcon size={18} className={classes.primary} />;
    } else if (type === 'refresh') {
      icon = <RefreshIcon size={18} className={classes.primary} />;
    } else if (type === 'delete') {
      icon = <DeleteIcon size={18} className={classes.primary} />;
    }
    return icon;
  };

  return (
    <Button
      disableElevation
      className={classes[variant]}
      variant={variant}
      size={size}
      color={color}
      disabled={status !== 'iddle'}
      onClick={handleClick}
      startIcon={getIcon()}
    >
      {status !== 'iddle' ? status : type}
    </Button>
  );
};

export default SpinnerButton;

SpinnerButton.defaultProps = {
  type: 'save',
  status: 'iddle',
  color: 'primary',
  variant: 'contained',
  size: 'medium',
};
