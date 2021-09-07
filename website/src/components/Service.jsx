import styled from "styled-components";
import service from "./img/service.png";
import MiniCard from "./MiniCard";

const Container = styled.div`
  display: flex;
  margin-top: 50px;
`;
const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  height: 100%;
  margin-left: 45px;
`;

const Right = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
`;

const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
  color: gray;
  margin-top: 20px;
`;

const CardContainer = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 50px;
`
const Service = () => {
  return (
    <Container>
      <Left>
        <Image src={service} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Lorem Ipsum</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            totam deserunt commodi distinctio nostrum ut eos amet quia aliquam
            culpa?
          </Desc>
          <CardContainer>
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
          </CardContainer>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
