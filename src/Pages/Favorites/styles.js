import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";

export const BtnContainer = styled.div`
  /* border: 1px solid red; */
  background-color: gray;
  box-sizing: border-box;
  max-width: 80vw;
  margin: 0 auto 0;
  /* max-height: 10vh; */
  padding: 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    border: 1px solid green;
    max-width: 100vw;
    margin: 0;
    padding: 5%;
  }
`;
export const BtnStyled = styled(Button)`
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  background-color: rgb(255, 255, 255, 0.5);
  color: black;
  font-weight: bold;
  font-size: 1rem;
  width: 40%;
  margin: 2%;
  transition: width 2s;

  @media (min-width: 600px) {
    width: 30%;
  }
`;

export const Text = styled(Typography)`
  margin-top: 1%;
  min-width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const TextInfo = styled.h1`
  font-size: 2rem;
  background-color: tomato;
  margin: 10% auto;
  max-width: 40%;
  padding: 35px;
  line-height: 4rem;
  min-height: 4rem;
  border-radius: 15px;
  transition: font-size 1s;
  &:hover {
    font-size: 2.2rem;
  }
`;
