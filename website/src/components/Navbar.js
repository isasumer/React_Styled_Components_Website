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
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <span><Logo>Agency</Logo></span>
        <span>button</span>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
