import './App.css';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './theme';

import { useStoreActions, useStoreState } from 'easy-peasy';

import Recipes from './containers/Recipes/Recipes';
import Recipe from './containers/Recipe/Recipe';
import EditRecipe from './containers/EditRecipe/EditRecipe';

const App = () => {
  const darkMode = useStoreState((state) => state.darkMode);

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <Switch>
        <Route path="/recipes" component={Recipes} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/editcreate" component={EditRecipe} />
        <Route path="/" component={Recipes} />
        <Redirect to="/" />
      </Switch>
    </ThemeProvider>
  );
};

export default withRouter(App);
