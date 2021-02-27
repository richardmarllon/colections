import { Typography } from "@material-ui/core";
import styled from "styled-components";
import pokemon from "../images/pokemonHeader.jpg";
import ricky from "../images/ricky.jpg";

export const Container = styled.div`
  position: relative;
  background-color: gray;
  box-sizing: border-box;
  max-width: 70vw;
  margin: 20vh auto 0;
  min-height: 50vh;
  padding: 5%;

  @media (max-width: 600px) {
    max-width: 100vw;
  }
`;

export const OptionCard = styled.div`
  border: 1px solid white;
  display: block;
  height: 22vh;
  max-width: 90%;
  margin: 2% auto;
  border-radius: 5px;
  background-color: rgb(255, 255, 255, 0.3);
  background-size: cover;
  background-position: center bottom;
  /* background-repeat: no-repeat; */

  ${(props) =>
    props.className == "pokemon" && `background-image: url(${pokemon});`};
  ${(props) =>
    props.className == "ricky" && `background-image: url(${ricky});`};

  &:hover::after {
    content: "";
    border: 2px solid red;
    filter: blur(1px);
  }
`;

export const Text = styled(Typography)`
  color: white;
  font-size: 2rem;
`;
