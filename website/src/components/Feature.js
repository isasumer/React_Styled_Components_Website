import React from "react";
import styled from "styled-components";
import App from "./img/App.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  margin-top: 30px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Left = styled.div`
  display: flex;
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
`;
const Image = styled.img`
  /* width: 50%; */
  /* height: 50%;*/

  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #494949;
  margin-top: 30px;
  @media only screen and (max-width: 480px) {
    font-size: 22px;
    width: 100%;
  }
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 18px;
    width: 100%;
  }
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: blue;
  color: white;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App}></Image>
      </Left>
      <Right>
        <Title>
          <b>Lorem</b> ipsum <br></br>
          <b>Lorem </b> dolor<br></br>
        </Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          rem?
        </SubTitle>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque
          itaque iste omnis eos eveniet, consectetur repudiandae in error. Ad.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
