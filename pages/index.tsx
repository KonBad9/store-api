import React, { useEffect, useState } from "react";
import Header from "@/Header";
import AddProducts from "@/Addproducts";
import CardBody from "@/cards/CardBody";
import Button from "@/Button";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: white;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 10px yellow;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;
`;

const Navright = styled.div`
  display: flex;
  gap: 1rem;
`;

const App = () => {
  const [items, setItem] = useState([]);
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  }
  return (
    <Container>
      <Nav>
        <Header />
        <Navright>
          <Button num={addedItems.length} click={setShowAddProducts} />
        </Navright>
      </Nav>

      {showAddProducts && (
        <AddProducts
          click={setShowAddProducts}
          items={addedItems}
          removeItem={removeItem}
          setAddedItem={setAddedItem}
        />
      )}
      <CardBody
        products={items}
        addItem={addItem}
        removeItem={removeItem}
        addedItems={addedItems}
      />
    </Container>
  );
};

export default App;
