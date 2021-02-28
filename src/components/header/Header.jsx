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
              // disabled={history.location.pathname === "/pokemon" ? true : false}
              onClick={() => {
                history.push("/pokemon");
              }}
            >
              pokemon
            </Button>
            <Button
              variant="contained"
              // disabled={history.location.pathname === "/ricky" ? true : false}
              onClick={() => {
                history.push("/ricky");
              }}
            >
              Ricky
            </Button>
            <Button
              variant="contained"
              // disabled={history.location.pathname === "/" ? true : false}
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
