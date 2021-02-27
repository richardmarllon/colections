import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
      .then((response) => setPokemons(response.data.results));
  }, []);
  console.log(pokemons);
  return <div></div>;
};
export default PokemonPage;
