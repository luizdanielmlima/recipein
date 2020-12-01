import { action, createStore } from 'easy-peasy';

import { recipes } from './dummyData';

export const store = createStore({
    appTitle: 'Recipe.In',
    activeRecipe: recipes[0],
    setActiveRecipe: action((state, payload) => {
        state.activeRecipe = {...payload};
    }),
    recipes: recipes
});