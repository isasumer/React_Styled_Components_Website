import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: orange;
`;
const Wrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items:center;
  justify-content: space-between;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
`;
const MenuItem = styled.li`
  display: flex;
  margin-right: 40px;
  font-size: 20px;
  font-weight: bold;
  color:gray;
`;

const Button =styled.button`
border:2px solid white;
padding: 10px 15px;
background-color: crimson;
font-weight: bold;
border-radius: 10px;
cursor:pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN NOW</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
