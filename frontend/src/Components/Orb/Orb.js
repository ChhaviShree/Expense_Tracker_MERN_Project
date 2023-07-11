import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';


function Orb() {
    const {width,height}=useWindowSize()
    console.log(width,height)
  const moveOrb=keyframes`
      0%{
        transform:translate(0,0);
      }
      50%{
        transform:translate(${width}px,${height/1.5}px);
      }
      100%{
        transform:translate(0,0);
      }
        
  `;
  const OrbStyled=styled.div`
     width:70vh;
     height:70vh;
     position:absoloute;
     border-radius:50%;
    //  margin-left:-37vh;
    //  margin-top:-37vh;
     background:linear-gradient(180deg,#F08080 0%,#F08080 100%);
     filter: blur(220px);
     animation:${moveOrb} 10s alternate linear infinite;
  `;
  return (
    <OrbStyled>

    </OrbStyled>
  )
}

export default Orb
