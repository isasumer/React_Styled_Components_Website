import { useState } from "react";
import styled from "styled-components";
import service from "./img/service.png";
import MiniCard from "./MiniCard";
import Play from "./img/play.png";

const Container = styled.div`
  display: flex;
  height:100%;
  margin-top:100px;
`;
const Left = styled.div`
  width: 50%;
  position:relative;
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 60%;
  margin: 100px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
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
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border-radius: 10px;
  background-color: blue;
  color: white;
  font-size: 20px;
  padding: 10px;
  margin-top: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 25px;
  margin-right: 10px;
`;
const Service = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Image open={open} src={service} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
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
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(!open)}>
            <Icon src={Play} />
            Click to learn
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
