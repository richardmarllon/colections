import styled from "styled-components";

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