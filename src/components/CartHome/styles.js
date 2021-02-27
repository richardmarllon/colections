import { Typography } from "@material-ui/core";
import styled from "styled-components";
import pokemon from "../images/pokemonHeader.jpg";
import ricky from "../images/ricky.jpg";

export const Container = styled.div`
  background-color: gray;
  box-sizing: border-box;
  max-width: 70vw;
  margin: 0 auto 0;
  min-height: 90vh;
  padding: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    max-width: 100vw;
    padding: 0;
    margin: 0;
  }
`;

export const OptionCard = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  display: block;
  height: 30vh;
  min-width: 60vw;
  margin: 2% 0;
  border-radius: 8px;
  background-color: rgb(255, 255, 255, 0.3);
  background-size: cover;
  background-position: center bottom;

  ${(props) =>
    props.className == "pokemon" && `background-image: url(${pokemon});`};
  ${(props) =>
    props.className == "ricky" &&
    `background-image: url(${ricky});
    background-position: 50% 10%
;`};

  &:hover {
    /* border: 2px solid red; */
    box-shadow: 0px 0px 15px white;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    max-width: 85%;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const Text = styled(Typography)`
  color: white;
  font-size: 2rem;
  padding: 1rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
