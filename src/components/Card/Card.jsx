import StyledButton from "../StyledButton/StyledButton";
import { CardContainer, ImgBox, InfoBox, NameBox, ImgBoxP } from "./style";

const Card = ({ item }) => {
  return (
    <CardContainer>
      {item.type !== "pokemon" && <ImgBox src={item.img} />}
      {item.type === "pokemon" && <ImgBoxP src={item.img} />}
        <InfoBox>
          <NameBox>{item.name}</NameBox>
          <StyledButton character={item} />
        </InfoBox>
    </CardContainer>
  );
};
export default Card;
