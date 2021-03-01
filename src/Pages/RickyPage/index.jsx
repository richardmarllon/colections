import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import SearchField from "../../components/SearchField/SearchField";
import { BtnContainer, PageBtn } from "./styles";

const RickyPage = () => {
  //estados
  const [rickys, setRicks] = useState([]);
  const [page, setPage] = useState(1);

  // bater na api e trazer os dados

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        let list = [];
        response.data.results.map((item) => {
          const brokenUrl = item.url.split("/");
          const id = brokenUrl[brokenUrl.length - 2];
          list.push({
            type: "rickys",
            name: item.name,
            img: item.image,
          });
        });
        setRicks(list);
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
      <SearchField onRicky={true} />
      <CardList list={rickys}></CardList>
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
