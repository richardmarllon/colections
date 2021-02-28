import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CardList from "../../components/CardList/CardList";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );
  useEffect(() => {
    axios
      .get(page)
      .then((response) => setPokemons(response.data.results))
      .catch((err) => console.log(err, "error in axios"));
  }, [page]);

  console.log(pokemons);

  return (
    <div>
      <CardList list={pokemons}></CardList>
    </div>
  );
};
export default PokemonPage;
