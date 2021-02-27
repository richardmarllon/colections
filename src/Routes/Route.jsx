import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PokemonPage from "../Pages/PokemonPage";
import RickyPage from "../Pages/RickyPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pokemon">
        <PokemonPage />
      </Route>
      <Route exact path="/ricky">
        <RickyPage />
      </Route>
    </Switch>
  );
};
