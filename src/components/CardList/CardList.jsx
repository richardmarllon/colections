import Card from "../Card/Card";
import { Container } from "./style";

const CardList = ({ list }) => {
  console.log(list);
  return (
    <Container>
      {list.map((item) => (
        <Card item={item}></Card>
      ))}
    </Container>
  );
};
export default CardList;
