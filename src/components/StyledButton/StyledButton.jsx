import Button from "@material-ui/core/Button";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import { favListAdd, favListRemove } from "../../Redux/Actions/actions";
import { useEffect, useState } from "react";

const StyledButton = ({ character }) => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.favList);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(false);
    if (favList.length > 0) {
      favList.map((personagem) => {
        personagem.name === character.name && setIsFav(true);
      });
    }
  }, [favList, isFav, character]);

  return (
    <NewBtn
      startIcon={isFav ? <HighlightOffIcon /> : <StarBorderIcon />}
      onClick={() => {
        isFav
          ? dispatch(favListRemove(character))
          : dispatch(favListAdd(character));
      }}
    >
      {isFav ? `REMOVE FROM FAVORITES` : `ADD TO FAVORITES`}
    </NewBtn>
  );
};
export default StyledButton;

const NewBtn = styled(Button)`
  border: 2px solid gold;
  color: black;
  font-weight: bold;
  background-color: rgb(128, 128, 128, 0.2);
  padding: 5px;
  margin: 5%;
  align-self: center;
`;
