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
  return (
    <CardContainer>
      {item.type !== "pokemon" && <ImgBox src={item.img} />}
      {item.type === "pokemon" && <ImgBoxP src={item.img} />}
      <InfoBox>
        <NameBox>{item.name}</NameBox>
        <StyledButton isFav={false} />
      </InfoBox>
    </CardContainer>
  );
};
export default Card;
