import React from "react";
import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position:relative;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(70% 0, 100% 0%, 100% 100%, 48% 100%);
  background-color: crimson;
`;
const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 48% 0%, 33% 100%, 0% 100% );
  background-color: #FFBBBB;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100% );
  background-color: #ff9393;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 67% 100% );
  background-color: crimson;
`;
const App = () => {

  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature/>
        <FeatureShape/>
      </Container>
      <Container>
        <Service/>
       {!smallScreen && <ServiceShape/>} 
      </Container>
      <Container>
        <Price/>
        <PriceShape/>
      </Container>
      <Container>
        <Contact/>
        <Footer/>
      </Container>

    </>
  );
};

export default App;
