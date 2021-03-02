import { useSelector } from "react-redux";
import CardList from "../../components/CardList/CardList";
import { Fade } from "react-awesome-reveal";

const ResultPage = () => {
  const personagem = useSelector((state) => state.Search);
  return (
    <>
      <Fade>
        <CardList list={personagem} />
      </Fade>
    </>
  );
};

export default ResultPage;
