import React from 'react';

import { useStoreActions } from 'easy-peasy';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  large: {
    cursor: 'pointer',
    backgroundColor: 'rgba(15, 15, 15, 0.25)',
  },
  small: {
    cursor: 'pointer',
    backgroundColor: 'rgba(215, 215, 215, 0.25)',
  },
}));

const FavButton = (props) => {
  const { recipe, size } = props;
  const classes = useStyles();
  const setRecipeFav = useStoreActions(
    (actions) => actions.setRecipeFav,
  );

  const setFav = () => {
    setRecipeFav(props.recipe.id);
  };

  let favContent;
  if (recipe.isFav) {
    favContent = (
      <IconButton
        aria-label="back button"
        className={size === 'medium' ? classes.large : classes.small}
        size={size}
        onClick={() => setFav()}
      >
        <FavoriteIcon color="primary" />
      </IconButton>
    );
  } else {
    favContent = (
      <IconButton
        aria-label="back button"
        className={size === 'medium' ? classes.large : classes.small}
        size={size}
        onClick={() => setFav()}
      >
        <FavoriteBorderIcon color="primary" />
      </IconButton>
    );
  }

  return <React.Fragment>{favContent}</React.Fragment>;
};

export default FavButton;
