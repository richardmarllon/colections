import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/Card/Card";
import CardList from "../../components/CardList/CardList";
import SearchField from "../../components/SearchField/SearchField";
import { BtnContainer, PageBtn } from "../RickyPage/styles";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [searchedCard, setSearchedCard] = useState();

  const handleNext = () => {
    let nextPage = page + 20;
    setPage(nextPage);
  };
  const handlePrev = () => {
    let prevPage = page - 20;
    setPage(prevPage);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)
      .then((response) => {
        let list = [];
        response.data.results.map((item) => {
          const brokenUrl = item.url.split("/");
          const id = brokenUrl[brokenUrl.length - 2];
          list.push({
            type: "pokemon",
            name: item.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          });
        });
        setPokemons(list);
      })
      .catch((err) => console.log(err, "error in axios"));
  }, [page]);

  return (
    <div>
      <SearchField onRicky={false} />
      <CardList list={pokemons}></CardList>
      <BtnContainer>
        <PageBtn
          disabled={page === 0 ? true : false}
          onClick={() => handlePrev()}
        >
          {" "}
          Anterior
        </PageBtn>
        <PageBtn
          disabled={page === 0 ? true : false}
          onClick={() => {
            setPage(0);
          }}
        >
          Inicio
        </PageBtn>
        <PageBtn
          disabled={page > 1095 ? true : false}
          onClick={() => handleNext()}
        >
          {" "}
          Proxima
        </PageBtn>
      </BtnContainer>
    </div>
  );
};
export default PokemonPage;
