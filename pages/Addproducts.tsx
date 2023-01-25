import React, { useRef } from "react";
import CardList from "@/CardList";
import styled from "styled-components";

const ContainerAdd = styled.div`
  height: 100vh;
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  display: flex;
  z-index: 2;
`;

const ContainerLeft = styled.div`
  height: 100vh;
  width: 70%;
  background-color: #c0c0c0;
  opacity: 0.5;
`;
const ContainerRight = styled.div`
  height: 100vh;
  width: 30%;
  background-color: white;
  padding: 0 1rem;
  overflow: scroll;
`;

const Remove = styled.button`
  padding: 0.5rem 1rem;
  display: right;
  font-size: 0.9rem;
  margin-left: 12rem;
  background-color: white;
  border: 2px solid red;
  border-radius: 0.5rem;
  cursor: pointer;
`;
const Check = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  background-color: white;
  border: 2px solid #0099ff;
  border-radius: 0.7rem;
  font-weight: bold;
  cursor: pointer;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0.8rem;
`;
const AddProducts = ({ items, click, removeItem, setAddedItem }) => {
  const total = items
    .reduce((pre, cur) => {
      return pre + Number(cur.addNumber) * Number(cur.price);
    }, 0)
    .toFixed(2);

  const showDivRef = useRef(null);

  return (
    <ContainerAdd ref={showDivRef}>
      <ContainerLeft />
      <ContainerRight>
        <Title>
          Witamy ! Wybrano: <span>{items.length}</span>
          {items.length <= 1 ? " element" : " elementy"}
        </Title>
        <Remove
          onClick={() => {
            showDivRef.current.classList.add("animate");
            setTimeout(() => click(false), 100);
          }}
        >
          ⌫
        </Remove>

        {items.map((item, i, itemsArr) => (
          <CardList
            key={item.id}
            item={item}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
            itemsArr={itemsArr}
          />
        ))}

        <div>
          <h4>Suma :</h4>
          <h1>${total}</h1>
        </div>
        <Check
          onClick={() => {
            items.length >= 1 && alert("Zapłacono, dziękujemy");
          }}
        >
          ZAPŁAĆ !
        </Check>
      </ContainerRight>
    </ContainerAdd>
  );
};

export default AddProducts;
