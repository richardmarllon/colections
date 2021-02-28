import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import StyledButton from "../StyledButton/StyledButton";
import { CardContainer, GenericText, ImgBox, InfoBox, NameBox } from "./style";

const Card = ({ item }) => {
  // console.log(item, "no card");
  const [pokemon, setPokemon] = useState([]);
  const [urlImg, setUrlImg] = useState("");

  useEffect(() => {
    // console.log(item, " item");
    if (!item.id) {
      axios
        .get(item.url)
        .then((response) => {
          setPokemon(response.data);
          setUrlImg(
            response.data.sprites.other["official-artwork"].front_default
          );
        })
        .catch((error) => console.log(error, "erro no catch"));
    }
  }, []);

  return (
    <CardContainer>
      {item.image && <ImgBox src={item.image}></ImgBox>}
      {urlImg && <ImgBox src={urlImg}></ImgBox>}
      <InfoBox>
        <NameBox>{item.name}</NameBox>
        {item.species && <GenericText>{item.species}</GenericText>}

        <StyledButton isFav={false} />
      </InfoBox>
    </CardContainer>
  );
};
export default Card;
