import React, { useReducer, useEffect } from "react";
import styled from "styled-components";

const Body = styled.div`
  background-color: white;
  border: 2px solid #0099ff;
  color: black;
  padding: 1rem;
  margin-top: 0.6rem;
  margin-bottom: 2rem;
  border-radius: 0.7rem;
  position: relative;
`;
const Img = styled.img`
  width: 3rem;
  margin-top: -5rem;
`;
const AddSubNum = styled.button`
  border: 2px solid white;
  background-color: #0099ff;
  color: white;
  min-width: 30px;
  min-height: 20px;
  display: inline-block;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
`;

function reducer(state, action) {
  if (action.type === "INCREASE") {
    return {
      ...state,
      addNumber: state.addNumber + 1,
    };
  } else if (action.type === "DECREASE") {
    if (state.addNumber == 1) {
      return state;
    }
    return {
      ...state,
      addNumber: state.addNumber - 1,
    };
  }
}
const CardList = ({ item, removeItem, setAddedItem, itemsArr }) => {
  const [state, dispatch] = useReducer(reducer, item);

  useEffect(() => {
    const newArr = itemsArr.map((itemArr) => {
      itemArr.id == item.id && (item.addNumber = state.addNumber);
      return itemArr;
    });
    setAddedItem(newArr);
  }, [state]);

  return (
    <Body>
      <Img src={item.image} alt="" />
      <h4>{item.title}</h4>
      <hr />
      <p>Cena : ${item.price}</p>

      <AddSubNum
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      >
        +
      </AddSubNum>
      <AddSubNum>{item.addNumber}</AddSubNum>
      <AddSubNum
        onClick={() => {
          dispatch({ type: "DECREASE" });
        }}
      >
        -
      </AddSubNum>
    </Body>
  );
};

export default CardList;
