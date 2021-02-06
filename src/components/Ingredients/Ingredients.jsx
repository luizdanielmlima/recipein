import React from 'react';

import { useStoreState } from 'easy-peasy';
import { List, makeStyles, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles({
  item: {
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
  },
  inline: {
    display: 'inline',
    marginRight: '4px',
  },
  icon: {
    padding: 0,
    marginRight: '6px',
    fontSize: '16px',
  },
});

const Ingredients = () => {
  const classes = useStyles();
  const activeRecipe = useStoreState((state) => state.activeRecipe);

  let ingrContent;
  ingrContent = <p>...</p>;

  if (activeRecipe) {
    const ingredients = activeRecipe.ingredients;
    ingrContent = ingredients.map((ingr, index) => {
      return (
        <div key={index} className={classes.item}>
          <div className={classes.item}>
            <CheckCircleOutlineIcon
              color="primary"
              className={classes.icon}
            />
            <Typography
              variant="subtitle1"
              className={classes.inline}
            >
              {ingr.amount}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.inline}
            >
              {ingr.unit}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.inline}
            >
              &nbsp;
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.inline}
            >
              {ingr.ingredient}
            </Typography>
          </div>
        </div>
      );
    });
  }

  return <List>{ingrContent}</List>;
};

export default Ingredients;
