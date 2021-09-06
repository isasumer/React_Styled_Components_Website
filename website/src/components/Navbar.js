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
`;

const Left = styled.div`
  width: 60%;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;
const Menu = styled.ul`
display:flex;
`
const MenuItem = styled.li`
display:flex;
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
        <span>button</span>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
