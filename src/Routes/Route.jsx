import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PokemonPage from "../Pages/PokemonPage";
import ResultPage from "../Pages/ResultPage/ResultPage";
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
      <Route exact path="/result">
        <ResultPage />
      </Route>
    </Switch>
  );
};
