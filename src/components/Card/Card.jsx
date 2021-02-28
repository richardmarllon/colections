import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import StyledButton from "../StyledButton/StyledButton";
import {
  CardContainer,
  GenericText,
  ImgBox,
  InfoBox,
  NameBox,
  ImgBoxP,
} from "./style";

const Card = ({ item }) => {
  const [pokemon, setPokemon] = useState([]);
  const [urlImg, setUrlImg] = useState("");

  useEffect(() => {
    if (!item.id) {
      axios
        .get(item.url)
        .then((response) => {
          setPokemon(response.data);
          setUrlImg(
            response.data.sprites.other["official-artwork"].front_default
          );
        })
        .catch((error) =>
          console.log(error, " ===> :erro no axios do component card")
        );
    }
  }, [item]);

  return (
    <CardContainer>
      {item.image && <ImgBox src={item.image}></ImgBox>}
      {urlImg && <ImgBoxP src={urlImg}></ImgBoxP>}
      <InfoBox>
        <NameBox>{item.name}</NameBox>
        {item.species && <GenericText>{item.species}</GenericText>}

        <StyledButton isFav={false} />
      </InfoBox>
    </CardContainer>
  );
};
export default Card;
