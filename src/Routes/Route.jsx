import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PokemonPage from "../Pages/PokemonPage/PokemonPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pokemon">
        <PokemonPage />
      </Route>
    </Switch>
  );
};
