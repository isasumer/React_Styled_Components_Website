import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 100%;}
`;

const Title = styled.h1`


  margin: 20px 0;
  font-size: 2rem;
  @media only screen and (max-width: 480px) {
    margin-left: 80px;
    width: 100%;}
`;
const Bottom = styled.div``;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  @media only screen and (max-width: 480px) {
    flex-direction: row;
    width: 100%;
    
  }
`;
const Price = () => {
  return (
    <Container>
      <Title>E-commerce Web Design</Title>
      <CardContainer>
        <PriceCard price="10" type="Basic" />
        <PriceCard price="20" type="Premium" />
        <PriceCard price="30" type="Advanced" />
      </CardContainer>
      <Bottom></Bottom>

    </Container>
  );
};

export default Price;
