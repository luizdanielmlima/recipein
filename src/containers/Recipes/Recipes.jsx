import React from 'react';
import { useHistory } from 'react-router-dom';

import { useStoreActions, useStoreState } from 'easy-peasy';
import {
  Button,
  FormControl,
  InputLabel,
  List,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

import classes from './Recipes.module.css';
import RecipeItem from '../../components/RecipeItem/RecipeItem';

const Recipes = () => {
  const history = useHistory();
  const darkMode = useStoreState((state) => state.darkMode);
  const setDarkMode = useStoreActions(
    (actions) => actions.setDarkMode,
  );
  const recipes = useStoreState((state) => state.recipes);
  const recipesCount = useStoreState((state) => state.recipesCount);
  const [foodType, setFoodType] = React.useState('all');

  const handleChange = (event) => {
    console.log('food category selected: ', event.target.value);
    setFoodType(event.target.value);
  };

  let recipeItens;
  recipeItens = <p>...</p>;

  if (recipes && recipes.length > 0) {
    recipeItens = recipes.map((recp) => {
      return <RecipeItem key={recp.id} recipe={recp} />;
    });
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.main}>
        <header className={classes.header}>
          <img src="assets/recipein_logo_medium.png" alt="app logo" />
          <Typography variant="h2" className={classes.logotext}>
            Recipe.in
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.logotext}
          >
            Your personal cookbook
          </Typography>
          <div className={classes.themeIconContainer}>
            <InvertColorsIcon
              color="primary"
              onClick={() => setDarkMode(!darkMode)}
              className={classes.themeIcon}
            />
          </div>
        </header>
        <div className={classes.content}>
          <div className={classes.titlebar}>
            <Typography variant="h2" color="primary">
              Recipes ({recipesCount})
            </Typography>
            <Button
              color="primary"
              onClick={() => history.push('/editcreate')}
              variant="outlined"
            >
              NEW +
            </Button>
          </div>
          <form className={classes.searchbar}>
            <TextField id="standard-basic" label="Search..." />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={foodType}
                onChange={handleChange}
              >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'dessert'}>Dessert</MenuItem>
                <MenuItem value={'dinner'}>Dinner</MenuItem>
                <MenuItem value={'snack'}>Snack</MenuItem>
              </Select>
            </FormControl>
          </form>
          <List>{recipeItens}</List>
        </div>
      </Paper>
    </div>
  );
};

export default Recipes;
