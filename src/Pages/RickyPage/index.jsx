import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";

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
  }, []);

  // console.log(list);
  return (
    <>
      <CardList list={list} />
    </>
  );
};

export default RickyPage;
