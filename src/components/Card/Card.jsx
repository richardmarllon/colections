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
  const [isFav, setIsFav] = useState(false);

  return (
    <CardContainer>
      {item.type !== "pokemon" && <ImgBox src={item.img} />}
      {item.type === "pokemon" && <ImgBoxP src={item.img} />}
      <InfoBox>
        <NameBox>{item.name}</NameBox>
        <StyledButton isFav={isFav} setIsFav={setIsFav} character={item} />
      </InfoBox>
    </CardContainer>
  );
};
export default Card;
