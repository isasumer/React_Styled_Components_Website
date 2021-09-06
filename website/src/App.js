import React from "react";
import styled from 'styled-components';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const Container =styled.div`
height:100vh;
overflow:hidden;
`
const IntoShape=styled.div `
width: 100%;
height:100%;
position:absolute;
top:0px;
left:0px;
clip-path: polygon(80% 0, 100% 0%, 100% 100%, 48% 100%, 64% 43%);
background-color: crimson;
z-index:-1;
`
const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntoShape/>
    </Container>
  );
};

export default App;
