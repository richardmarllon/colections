import { AppBar, Button, Typography } from "@material-ui/core";
import { MenuBar, Logo, Text } from "./styles";
import livro from "../images/livro.svg";

const Header = () => {
  return (
    <>
      <AppBar position="sticky">
        <MenuBar>
          <Logo src={livro} />
          <Text>Coleções</Text>
          <div>
            <Button variant="contained">pokemon</Button>
            <Button variant="contained">Ricky</Button>
          </div>
        </MenuBar>
      </AppBar>
    </>
  );
};

export default Header;
