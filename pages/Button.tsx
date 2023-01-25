import React from "react";
import styled from "styled-components";

const Buttons = styled.button`
  width: fit-content;
  padding: 1rem 2rem;
  display: block;
  font-size: 1rem;
  background-color: #0099ff;
  color: yellow;
  border-radius: 0.5rem;
  cursor: pointer;
`;
const Button = ({ num, click }) => {
  return (
    <Buttons onClick={() => click(true)}>
      Dodano <span>{num}</span> {num <= 1 ? "element" : "elementy"}
    </Buttons>
  );
};

export default Button;
