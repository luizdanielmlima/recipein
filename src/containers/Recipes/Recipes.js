import React from 'react';

import { useStoreState } from 'easy-peasy';

import classes from './Recipes.module.css';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import { Button, FormControl, InputLabel, List, MenuItem, Select, TextField, Typography } from '@material-ui/core';

const Recipes = () => {
    const recipes = useStoreState((state) => state.recipes);
    const activeRecipe = useStoreState((state) => state.activeRecipe);
    const [foodType, setFoodType] = React.useState('all');

    const handleChange = (event) => {
        console.log('food category selected: ', event.target.value);
        setFoodType(event.target.value);
    };

    let recipeItens;
    recipeItens = <p>...</p>;

    if (recipes && recipes.length > 0) {
        recipeItens = recipes.map((recp) => {
            return (
                <RecipeItem key={recp.id} recipe={recp} />
            );
        });
    }    

    return (
        <div className={classes.container}>
            <main className={classes.main}>
                <header className={classes.header}>
                    <img
                        src="assets/recipein_logo_medium.png"
                        alt="app logo"
                    />
                    <Typography variant="h2" className={classes.logotext}>
                        Recipe.in
                    </Typography>
                    <Typography variant="subtitle1" className={classes.logotext}>
                        Your personal cookbook
                    </Typography>
                </header>
                <div className={classes.content}>
                    <div className={classes.titlebar}>
                        <Typography variant="h2" color="primary">
                            Recipes
                        </Typography>
                        <Button variant="contained" color="primary">ADD +</Button>
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
                    <div>
                        <p>Current recipe: {activeRecipe ? activeRecipe.title : 'no cur recipe!'}</p>
                    </div>
                    <List>
                        {recipeItens}
                    </List>
                </div>
            </main>
        </div>
    )
}

export default Recipes;
