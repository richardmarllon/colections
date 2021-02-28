import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import { BtnContainer, PageBtn } from "../RickyPage/styles";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

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
      .then((response) => setPokemons(response.data.results))
      .catch((err) => console.log(err, "error in axios"));
  }, [page]);


  return (
    <div>
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
