import { useSelector } from "react-redux";
import CardList from "../../components/CardList/CardList";

const Favorites = () => {
  const personagem = useSelector((state) => state.favList);
  console.log(personagem);
  return (
    <div>
      <CardList list={personagem} isFav={true} />
    </div>
  );
};

export default Favorites;
