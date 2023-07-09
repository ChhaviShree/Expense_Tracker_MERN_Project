import styled from "styled-components";
import './App.css';
import bg from './img/bg.png';
import { MainLayout } from "./styles/Layouts";
import Orb from './Components/Orb/Orb';
import Navigation from "./Components/Navigation/Navigation";
import React,{ useState } from "react";
function App() {
  const [active,setActive]=React.useState(1)
  return (
    <AppStyled  bg={bg}classname="App">
      <Orb/>
      
      <MainLayout>
      <Navigation active={active} setActive={setActive} />
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled=styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative
`;

export default App;