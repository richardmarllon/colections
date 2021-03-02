import { useSelector } from "react-redux";
import CardList from "../../components/CardList/CardList";

const ResultPage = () => {
  const personagem = useSelector((state) => state.Search);
  return (
    <>
      <CardList list={personagem} />
    </>
  );
};

export default ResultPage;
