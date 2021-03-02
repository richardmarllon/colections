import { AppBar } from "@material-ui/core";
import { MenuBar, Logo, Text, BtnContainer, BtnStyled } from "./styles";
import livro from "../images/livro.svg";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <AppBar position="sticky">
        <MenuBar>
          <Logo src={livro} />
          <Text>Coleções</Text>
          <BtnContainer>
            <BtnStyled
              variant="outlined"
              onClick={() => {
                history.push("/");
              }}
            >
              HOME
            </BtnStyled>
            <BtnStyled
              variant="outlined"
              onClick={() => {
                history.push("/pokemon");
              }}
            >
              pokemon
            </BtnStyled>
            <BtnStyled
              variant="outlined"
              onClick={() => {
                history.push("/ricky");
              }}
            >
              Ricky
            </BtnStyled>

            <BtnStyled
              variant="outlined"
              onClick={() => {
                history.push("/favs");
              }}
            >
              Favs
            </BtnStyled>
          </BtnContainer>
        </MenuBar>
      </AppBar>
    </>
  );
};

export default Header;
