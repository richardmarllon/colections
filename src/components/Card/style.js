import styled from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box;
  width: 90vw;
  border: 1px solid red;
  background-color: white;
  display: flex;
`;

export const NameBox = styled.h1`
  font-size: 1.3rem;
  border: 1px solid blue;
`;

export const ImgBox = styled.img`
  box-sizing: border-box;
  max-height: 15vh;
  border-radius: 50%;
  padding: 5px;
`;
export const InfoBox = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GenericText = styled.h4`
  margin: 0;
`;
