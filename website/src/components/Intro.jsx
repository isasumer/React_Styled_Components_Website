import React from "react";
import styled from "styled-components";
import Woman from "./img/woman.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin: 10px;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
    width: 100%;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
    width: 95%;
    wrap: nowrap;
  }
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: blue;
  font-size: 18px;
  padding: 10px;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  margin-right: 20px;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    font-size: 15px;
    width: 100%;
    align-items: center;
  }
`;

const Phone = styled.span`
  color: pink;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Image = styled.img`
  height: 60%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Lorem ipsum dolor sit amet</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis
          temporibus quos officia cupiditate voluptates iusto id laudantium
          reiciendis quisquam.
        </Desc>
        <Info>
          <Button>Ask Question</Button>
          <Contact>
            <Phone>Call Us (012) 345 - 6789</Phone>
            <ContactText>
              Lorem ipsum dolor sit amet consectetur adipisicing
            </ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman}></Image>
        <AnimatedShapes />
      </Right>
    </Container>
  );
};

export default Intro;
