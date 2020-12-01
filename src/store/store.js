import { action, createStore } from 'easy-peasy';

import { recipes } from './dummyData';

export const store = createStore({
    appTitle: 'Recipe.In',
    activeRecipe: recipes[0],
    setActiveRecipe: action((state, payload) => {
        state.activeRecipe = {...payload};
    }),
    recipes: recipes,
    setRecipeFav: action((state, payload) => {
        state.recipes = state.recipes.map(recipe => 
            recipe.id === payload ? { ...recipe, isFav: !recipe.isFav } : recipe
        )
        state.activeRecipe = state.recipes.find(recipe => recipe.id === payload);
    }),
});