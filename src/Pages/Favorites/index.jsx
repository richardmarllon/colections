import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardList from "../../components/CardList/CardList";
import { BtnContainer, BtnStyled, Text, TextInfo } from "./styles";

const Favorites = () => {
  const favList = useSelector((state) => state.favList);
  const [showRicky, setShowRicky] = useState();
  const [newList, setNewList] = useState(favList);

  useEffect(() => {
    let filteredList = [];

    if (showRicky) {
      filteredList = favList.filter((item) => item.type === "rickys");
      setNewList(filteredList);
    } else {
      filteredList = favList.filter((item) => item.type === "pokemon");
      setNewList(filteredList);
    }
  }, [showRicky, favList]);

  return (
    <div>
      <BtnContainer>
        <Text> Escolha quais favoritos exibir:</Text>
        <BtnStyled variant="outlined" onClick={() => setShowRicky(false)}>
          POKEMON
        </BtnStyled>
        <BtnStyled variant="outlined" onClick={() => setShowRicky(true)}>
          RICKY
        </BtnStyled>
      </BtnContainer>
      {newList.length === 0 && (
        <TextInfo>Poxa! Você não tem nenhum favorito por aqui ainda.</TextInfo>
      )}
      {showRicky === undefined && newList.length !== 0 && (
        <TextInfo>Escolha uma das opções acima!</TextInfo>
      )}
      {showRicky !== undefined && newList.length > 0 && (
        <CardList list={newList} />
      )}
    </div>
  );
};

export default Favorites;
