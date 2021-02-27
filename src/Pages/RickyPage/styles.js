import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const BtnContainer = styled.div`
  min-height: 5vh;
  background-color: gray;
  display: flex;
  justify-content: center;
`;

export const PageBtn = styled(Button)`
  border: 1px solid white;
  margin: 0 2% 1% 2%;
  color: white;
  padding: 5px 15px;
  font-size: 1rem;
`;
