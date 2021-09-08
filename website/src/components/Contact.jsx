import React from "react";
import styled from "styled-components";
import map from "./img/map.png";
import phone from "./img/phone.png";
import send from "./img/send.png";

const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 50%;
`;
const Title = styled.h1`
  margin: 40px 70px;
  font-size: 2rem;
`;

const Form = styled.form`
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row; ;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-right: 20px;
`;

const Input = styled.input`
  width: 200px;
  height: 60px;
  margin-bottom: 50px;
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const TextArea = styled.input`
  width: 250px;
  height: 150px;
  padding: 20px;
  margin-bottom: 40px;
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const AddressItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
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
