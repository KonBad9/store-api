import React from "react";
import styled from "styled-components";

const Info = styled.ol`
  padding-left: 0;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
function List({ products }) {
  return (
    <Info>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </Info>
  );
}
export default List;
