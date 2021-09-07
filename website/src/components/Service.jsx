import React from "react";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
    height:100%;
`

const Right = styled.div`
  width: 50%;
`;

const Service = () => {
  return <Container>
      <Left></Left>
      <Right></Right>
  </Container>;
};

export default Service;
