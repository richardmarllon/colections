import { Toolbar, Typography } from "@material-ui/core";
import styled from "styled-components";

export const MenuBar = styled(Toolbar)`
  background: rgb(2, 0, 36);
  max-height: 10vh;
`;

export const Logo = styled.img`
  max-height: 5vh;
`;

export const Text = styled(Typography)`
  font-size: 1.3rem;
  margin-left: 1%;
  font-weight: 700;
`;
