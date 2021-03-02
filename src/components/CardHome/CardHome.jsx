import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Container, OptionCard, Text } from "./styles";
import { Slide } from "react-awesome-reveal";

const CartHome = () => {
  const history = useHistory();

  return (
    <Container>
      <Slide direction="down">
        <Text>Escolha qual lista exibir:</Text>
      </Slide>
      <Slide>
        <OptionCard
          className="pokemon"
          onClick={() => {
            history.push("/pokemon");
          }}
        ></OptionCard>
      </Slide>
      <Slide direction="right">
        <OptionCard
          className="ricky"
          onClick={() => {
            history.push("/ricky");
          }}
        ></OptionCard>
      </Slide>
    </Container>
  );
};
export default CartHome;
