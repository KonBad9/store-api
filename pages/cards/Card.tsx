import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Cards = styled.div`
  box-shadow: 1px 1px 5px blue;
  padding: 1rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 30%;
`;

const Addrem = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem;
  display: block;
  font-size: 1rem;
  background-color: #0099ff;
  color: yellow;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Addprice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Card = ({ product, addItem, removeItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id == product.id);
  useEffect(() => {
    item.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

  return (
    <Cards>
      <Img src={product.image} alt="" />
      <div>
        <h2>{product.category}</h2>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <Addprice>
        <span>Cena : ${product.price}</span>
        <Addrem
          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "DODAJ " : "USUŃ"}
        </Addrem>
      </Addprice>
    </Cards>
  );
};

export default Card;
