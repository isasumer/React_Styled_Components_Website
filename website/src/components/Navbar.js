import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: orange;
`;
const Wrapper = styled.div`
padding: 20px 30px;
display:flex;
justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <span>logo</span>
        <span>button</span>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
