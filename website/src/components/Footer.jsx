import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: black;
  color: lightgray;
@media only screen and (max-width: 480px) {
  height: 15%;
}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  @media only screen and (max-width: 480px) {
    height: 100%;
    border: 1px solid white;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 0px;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-evenly;
  }
`;
const ListItem = styled.li`
  margin-left: 20px;
  @media only screen and (max-width: 480px) {
    margin: 0px;
    font-size: 1.1rem;
  }
`;
const Copyright = styled.span`
  margin-right: 40px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Copyright (c)</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
