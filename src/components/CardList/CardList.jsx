import Card from "../Card/Card";
import { Container } from "./style";
import { Fade } from "react-awesome-reveal";
const CardList = ({ list }) => {
  return (
    <Fade>
      <Container>
        {list.map((item) => (
          <Card item={item}></Card>
        ))}
      </Container>
    </Fade>
  );
};
export default CardList;
