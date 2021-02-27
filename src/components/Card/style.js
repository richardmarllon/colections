import styled from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box;
  width: 90vw;
  margin-bottom: 1%;
  background-color: white;
  display: flex;
  border-radius: 12px;
  @media (min-width: 600px) {
    max-width: 45%;
    margin: 2%;
  }
`;

export const NameBox = styled.h1`
  font-size: 1.3rem;
`;

export const ImgBox = styled.img`
  box-sizing: border-box;
  max-height: 15vh;
  border-radius: 50%;
  padding: 5px;
  margin: 2% 0% 2% 4%;
  box-shadow: 0px 0px 10px gray;
  @media (min-width: 600px) {
  }
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GenericText = styled.h4`
  margin: 0;
`;
