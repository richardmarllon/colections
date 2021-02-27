import styled from "styled-components";

export const Container = styled.div`
  background-color: gray;
  box-sizing: border-box;
  max-width: 80vw;
  margin: 0 auto 0;
  min-height: 90vh;
  padding: 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    max-width: 100vw;
    margin: 0;
    flex-direction: column;
    padding: 5%;
  }
`;
