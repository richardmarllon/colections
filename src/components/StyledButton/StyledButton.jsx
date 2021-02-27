import Button from "@material-ui/core/Button";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const StyledButton = ({ isFav }) => {
  return (
    <NewBtn startIcon={isFav ? <HighlightOffIcon /> : <StarBorderIcon />}>
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
