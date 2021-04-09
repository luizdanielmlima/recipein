import { action, computed, createStore } from 'easy-peasy';

// import { recipes } from './dummyData';
import { recipes } from './hca_recipes';

export const store = createStore({
  appTitle: 'Recipe.In',
  activeRecipe: recipes[0],
  darkMode: false,
  setDarkMode: action((state, payload) => {
    state.darkMode = payload;
  }),
  setActiveRecipe: action((state, payload) => {
    state.activeRecipe = payload;
  }),
  recipes: recipes,
  setRecipeFav: action((state, payload) => {
    state.recipes = state.recipes.map((recipe) =>
      recipe.id === payload
        ? { ...recipe, isFav: !recipe.isFav }
        : recipe,
    );
    state.activeRecipe = state.recipes.find(
      (recipe) => recipe.id === payload,
    );
  }),
  recipesCount: computed((state) => state.recipes.length),
});
