import { useSelector } from "react-redux";
import CardList from "../../components/CardList/CardList";

const Favorites = () => {
  const personagem = useSelector((state) => state.favList);
  console.log(personagem);
  let key = "listOfFav";
  let favs = JSON.parse(localStorage.getItem(key));

  console.log(favs, "os favs");
  return (
    <div>
      <CardList list={favs} />
    </div>
  );
};

export default Favorites;
