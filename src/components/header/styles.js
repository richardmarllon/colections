import { Button, Toolbar, Typography } from "@material-ui/core";
import styled from "styled-components";

export const MenuBar = styled(Toolbar)`
  background: rgb(2, 0, 36);
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3px;
  @media (min-width: 540px) {
    flex-wrap: nowrap;
  }
`;

export const Logo = styled.img`
  max-height: 5vh;
  @media (min-width: 700px) {
    position: absolute;
    left: 5%;
  }
`;

export const Text = styled(Typography)`
  font-size: 1.3rem;
  margin-left: 1%;
  font-weight: 700;
  @media (min-width: 700px) {
    position: absolute;
    left: 10%;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100vw;
  margin-top: 5px;
  @media (min-width: 700px) {
    justify-self: flex-end;
  }
`;

export const BtnStyled = styled(Button)`
  font-size: 1rem;
  border: 1px solid white;
  font-weight: bold;
  color: white;
  @media (min-width: 700px) {
    margin-right: 5px;
  }
  &:hover {
    background-color: rgb(255, 255, 255, 0.5);
    color: black;
  }
`;
