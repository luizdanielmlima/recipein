import React from 'react';

import { useStoreActions, useStoreState } from 'easy-peasy';

import classes from './Recipes.module.css';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import {
  Button,
  FormControl,
  InputLabel,
  List,
  MenuItem,
  Paper,
  Select,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SpinnerButton from '../../components/SpinnerButton/SpinnerButton';

const Recipes = () => {
  const history = useHistory();
  const darkMode = useStoreState((state) => state.darkMode);
  const setDarkMode = useStoreActions(
    (actions) => actions.setDarkMode,
  );
  const recipes = useStoreState((state) => state.recipes);
  const recipesCount = useStoreState((state) => state.recipesCount);
  const [foodType, setFoodType] = React.useState('all');

  // Btn stuff
  const [btnStatus, setBtnStatus] = React.useState();
  const [btnType, setBtnType] = React.useState('edit');
  const timerLoading = React.useRef();
  const timerStatus = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timerLoading.current);
      clearTimeout(timerStatus.current);
    };
  }, []);

  const handleChange = (event) => {
    console.log('food category selected: ', event.target.value);
    setFoodType(event.target.value);
  };

  const handleButtonClick = () => {
    setBtnStatus('waiting');
    timerLoading.current = window.setTimeout(() => {
      setBtnStatus('error');
      timerStatus.current = window.setTimeout(() => {
        setBtnStatus('iddle');
      }, 2000);
    }, 2000);
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
        </header>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <div className={classes.content}>
          <div className={classes.titlebar}>
            <Typography variant="h2" color="primary">
              Recipes ({recipesCount})
            </Typography>
            <Button
              color="primary"
              onClick={() => history.push('/editcreate')}
            >
              NEW +
            </Button>
            <SpinnerButton
              type={btnType}
              status={btnStatus}
              handleClick={handleButtonClick}
              color="primary"
              variant="outlined"
            />
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
