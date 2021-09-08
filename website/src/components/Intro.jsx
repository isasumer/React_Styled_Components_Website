import React from "react";
import styled from "styled-components";
import Woman from "./img/woman.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  align-items: center;
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
  
  letter-spacing: 2px;
  cursor:pointer;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: crimson;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Image = styled.img`
  height: 60%;
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
        <AnimatedShapes/>
      </Right>
    </Container>
  );
};

export default Intro;
