import styled from "styled-components";

export const DivSearch = styled.div`
  margin: 1%;
  min-height: 5vh;
  display: flex;
  justify-content: center;
`;

export const InputField = styled.input`
  min-width: 260px;
  max-width: 70vw;
  border-radius: 10px;
  border: 1px solid black;
  outline: none;
  font-size: 0.9rem;
  text-align: center;
  &:hover {
    background-color: rgb(152, 251, 152);
    font-size: 1rem;
  }
`;
