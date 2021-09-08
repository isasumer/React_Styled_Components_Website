import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: black;
  color: lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top:30px;
  
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  
`;
const ListItem = styled.li`
  margin-left: 20px;
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
