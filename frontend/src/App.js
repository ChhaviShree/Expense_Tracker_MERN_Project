import styled from "styled-components";
import './App.css';
import bg from './img/bg.png';
import { MainLayout } from "./styles/Layouts";
import Orb from './Components/Orb/Orb';
import Navigation from "./Components/Navigation/Navigation";
import React,{ useMemo, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";



function App() {
  const [active,setActive]=React.useState(1)
  const global=useGlobalContext()
  console.log(global);

  const displayData=()=>{
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Incomes/>
      case 4:
        return <Expenses/>
      default: 
        return <Dashboard/>

    }
  }

  const orbMemo=useMemo(()=>{
    return <Orb/>
  },[])
  return (
    <AppStyled  bg={bg}classname="App">
      {orbMemo}
      
      <MainLayout>
      <Navigation active={active} setActive={setActive} />
      <main>
        {displayData()}
      </main>
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
  position: relative;

  main{
    margin-top:-540px;
    margin-bottom:540px;
    flex: 1;
    opacity:0.9;
    background:rgba(255,246,249,0.78);
    border:3px solid black;
    backdrop-filter:blur(2.5px);
    border-radius:32px;
    
    
    overflow-x:hidden;
    &::-webkit-scrollbar{
      width:0;
    }
  }
`;

export default App;
