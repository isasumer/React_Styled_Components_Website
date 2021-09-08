import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  -webkit-box-shadow: 5px 7px 6px 5px #00000081;
  box-shadow: 5px 7px 6px 6px #00000084;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;

  @media only screen and (max-width: 480px) {
    margin: 0 4px;
    width: 100%;
  }
`;
const PriceContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 480px) {
    padding: 2px;
  }
`;
const Price = styled.span`
  font-size: 50px;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
const Type = styled.button`
  padding: 10px;
  margin: 10px 0px;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 20px;
  @media only screen and (max-width: 480px) {
    padding: 2px;
    margin: 5px 0px;
  }
`;
const List = styled.ul`
  list-style: none;
  margin: 10px;
  padding: 0px;
  @media only screen and (max-width: 480px) {
    margin: 4px 0px;
  }
`;
const ListItem = styled.li`
  margin: 20px 0;
  @media only screen and (max-width: 480px) {
    margin: 15px 0px;
  }
`;
const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
    padding: 14px;
  }
`;
const PriceCard = ({ price, type }) => {
  //because we send 2 value we used "{}" for it
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan </Type>
      <List>
        <ListItem>Lorem, ipsum dolor.</ListItem>
        <ListItem>Lorem, ipsum dolor.</ListItem>
        <ListItem>Lorem, ipsum dolor.</ListItem>
        <ListItem>Lorem, ipsum dolor.</ListItem>
        <ListItem>Lorem, ipsum dolor.</ListItem>
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
