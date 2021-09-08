import React from "react";
import styled from "styled-components";
import Search from "./img/search.png";

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 5px 7px 6px 2px #00000076;
  box-shadow: 5px 7px 6px 2px #0000006d;
  align-items: center;
  @media only screen and (max-width: 480px) {
width:60px;}
`;

const Image = styled.img`
  width: 20px;
`;

const Text = styled.span`
  text-align: center;
`;

const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem ipsum dolor sit amet.</Text>
    </Container>
  );
};

export default MiniCard;
