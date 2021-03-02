import styled from "styled-components";

export const DivInfo = styled.div`
  width: 90vw;
  background-color: tomato;
  margin: 50px auto 0;
  min-height: 70vh;
  max-height: 80vh;

  border-radius: 25px;
  /* color: white; */
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    max-width: 50vw;
  }
`;

export const TextInfoG = styled.h2`
  margin: 3rem 0 0 0;
  font-size: 3rem;
`;

export const TextInfoM = styled.h3`
  font-size: 1.8rem;
  margin: 5vh 2vw 0;
`;

export const TextInfoP = styled.h4`
  margin-top: 4vh;
  font-size: 1.3rem;
`;

export const TextCount = styled.h1`
  margin-top: 10vh;
  font-size: 4rem;
  color: white;
`;
