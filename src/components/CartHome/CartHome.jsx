import { Typography } from "@material-ui/core";
import { Container, OptionCard, Text } from "./styles";

const CartHome = () => {
  return (
    <Container>
      <Text>Escolha qual lista exibir:</Text>
      <OptionCard className="pokemon"></OptionCard>
      <OptionCard className="ricky"></OptionCard>
    </Container>
  );
};
export default CartHome;
