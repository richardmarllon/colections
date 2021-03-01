import Card from "../Card/Card";
import { Container } from "./style";

const CardList = ({ list }) => {
  console.log(list, "chegando no card list");
  return (
    <Container>
      {list.map((item) => (
        <Card item={item}></Card>
      ))}
    </Container>
  );
};
export default CardList;
