import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Container, OptionCard, Text } from "./styles";

const CartHome = () => {
  const history = useHistory();

  return (
    <Container>
      <Text>Escolha qual lista exibir:</Text>
      <OptionCard
        className="pokemon"
        onClick={() => {
          history.push("/pokemon");
        }}
      ></OptionCard>
      <OptionCard
        className="ricky"
        onClick={() => {
          history.push("/ricky");
        }}
      ></OptionCard>
    </Container>
  );
};
export default CartHome;
