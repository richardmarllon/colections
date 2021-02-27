import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import { BtnContainer, PageBtn } from "./styles";

const RickyPage = () => {
  //estados
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  // bater na api e trazer os dados

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        setList(response.data.results);
      });
  }, [page]);

  const handleNext = () => {
    let nextPage = page + 1;
    setPage(nextPage);
  };
  const handlePrev = () => {
    let prevPage = page - 1;
    setPage(prevPage);
  };

  return (
    <>
      <CardList list={list}></CardList>
      <BtnContainer>
        <PageBtn
          disabled={page === 1 ? true : false}
          onClick={() => handlePrev()}
        >
          {" "}
          Anterior
        </PageBtn>
        <PageBtn
          disabled={page === 1 ? true : false}
          onClick={() => {
            setPage(1);
          }}
        >
          Inicio
        </PageBtn>
        <PageBtn
          disabled={page === 34 ? true : false}
          onClick={() => handleNext()}
        >
          {" "}
          Proxima
        </PageBtn>
      </BtnContainer>
    </>
  );
};

export default RickyPage;
