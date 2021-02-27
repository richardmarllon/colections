import Button from "@material-ui/core/Button";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const StyledButton = () => {
  return <NewBtn startIcon={<StarBorderIcon />}>teste</NewBtn>;
};
export default StyledButton;

const NewBtn = styled(Button)`
  border: 1px solid red;
  color: red;
  width: 25%;
  padding: 5px;
  margin: 5%;
  align-self: center;
`;
