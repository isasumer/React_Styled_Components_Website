import React from "react";
import styled from "styled-components";
import map from "./img/map.png";
import phone from "./img/phone.png";
import send from "./img/send.png";

const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
  @media only screen and (max-width: 480px) {
    height: 85%;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: start;
    width: 100%;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {

    flex-direction: column;
    width: 100%;
  }
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  @media only screen and (max-width: 480px) {
    margin-bottom: 0px;
    font-size: 1rem;}
`;

const Form = styled.form`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height:250px;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 40%;
    margin:10px 0 20px;
  }
`;

const Input = styled.input`
  width: 200px;
  height: 60px;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
  width: 150px;
  height: 20px;
  margin-bottom: 5px;
  }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  @media only screen and (max-width: 480px) {
    height: 40%;
  }
`;
const Button = styled.button`

  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  background-color:blue;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
    width: 30%;
  }
`;

const TextArea = styled.input`
  width: 250px;
  height: 300px;
  padding: 20px;
  margin-bottom: 40px; 
  @media only screen and (max-width: 480px) {
  width: 250px;
  height: 20px;
  margin-bottom: 10px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 100%;}
`;
const AddressItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
    margin-left: 30px;
  }
`;
const Icon = styled.img`
  width: 40px;
`;
const Text = styled.span`
  margin-left: 20px;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions ?<br />
            Please feel free to ask
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your name"></Input>
              <Input placeholder="Your email"></Input>
              <Input placeholder="Your Subject"></Input>
            </LeftForm>
            <RightForm>
              <TextArea></TextArea>
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={map}></Icon>
            <Text>123 Park Avenue st., New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={phone}></Icon>
            <Text>+1 (123) 123 4567</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={send}></Icon>
            <Text>sendmail@email.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
