import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import Recipes from './containers/Recipes/Recipes';
import Recipe from './containers/Recipe/Recipe';


function App() {

  return (
    <ThemeProvider theme={theme}>      
      <Switch>
        <Route path="/recipes" component={Recipes} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/" component={Recipes} />
        <Redirect to="/" />
      </Switch>
    </ThemeProvider>

  );
}

export default withRouter(App);
