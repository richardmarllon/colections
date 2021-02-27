import StyledButton from "../StyledButton/StyledButton";
import { CardContainer, GenericText, ImgBox, InfoBox, NameBox } from "./style";

const Card = ({ item }) => {
  // console.log(item, "no card");
  return (
    <CardContainer>
      <ImgBox src={item.image}></ImgBox>
      <InfoBox>
        <NameBox>{item.name}</NameBox>
        {item.species && <GenericText>{item.species}</GenericText>}

        <StyledButton />
      </InfoBox>
    </CardContainer>
  );
};
export default Card;
