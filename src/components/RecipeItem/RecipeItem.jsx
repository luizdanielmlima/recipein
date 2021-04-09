import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import FavButton from '../FavButton/FavButton';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    height: 100,
    marginBottom: 16,
    backgroundColor: theme.palette.background.default,
  },
  details: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 120,
    cursor: 'pointer',
  },
  title: {
    cursor: 'pointer',
  },
  favContainer: {
    position: 'absolute',
    bottom: '16px',
    right: '16px',
  },
}));

const RecipeItem = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const setActiveRecipe = useStoreActions(
    (actions) => actions.setActiveRecipe,
  );
  const { recipe } = props;
  // console.log('recipe Data: ', recipe);

  const handleRecipeClick = (recipe) => {
    setActiveRecipe(recipe);
    history.push('/recipe');
  };

  let recipeContent = (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={recipe.thumb}
        title="Live from space album cover"
        onClick={() => handleRecipeClick(recipe)}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            component="h4"
            variant="h4"
            color="primary"
            onClick={() => handleRecipeClick(recipe)}
            className={classes.title}
          >
            {recipe.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {recipe.createdAt}
          </Typography>
        </CardContent>
        <div className={classes.favContainer}>
          <FavButton recipe={recipe} size="small" />
        </div>
      </div>
    </Card>
  );

  return <React.Fragment>{recipeContent}</React.Fragment>;
};

export default RecipeItem;
