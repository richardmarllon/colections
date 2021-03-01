import { AppBar, Button, Typography } from "@material-ui/core";
import { MenuBar, Logo, Text } from "./styles";
import livro from "../images/livro.svg";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  console.log(history);
  return (
    <>
      <AppBar position="sticky">
        <MenuBar>
          <Logo src={livro} />
          <Text>Coleções</Text>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                history.push("/pokemon");
              }}
            >
              pokemon
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                history.push("/ricky");
              }}
            >
              Ricky
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                history.push("/");
              }}
            >
              HOME
            </Button>
          </div>
        </MenuBar>
      </AppBar>
    </>
  );
};

export default Header;
