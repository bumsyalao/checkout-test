import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  // from {
  //   transform: rotate(0deg);
  // }
  // to {
  //   transform: rotate(180deg);
  // }

`;

const swipeLeft = keyframes`
  10% {left: -50px;}
  75% {left: 10px;}
`;

const swipeRight = keyframes`
  10% {right: 10px;}
  75% {right: -50px;}
`;


const StyledAnimatedImage = styled.div`
  width:  50%;
  margin: 5%;
  margin-left: 20%;
`;

const StyledContainer = styled.div`
  max-width: 100%;
`;

const StyledCalendar = styled.div`
  // animation: ${rotate} 2s linear;
  padding: 12px;
  margin-top: 41px;
  position: relative;
  width: 90%;
  height: 355px;
  background: #00122C;
  border-radius: 8px;
  font-family: Graphik LCG;
  font-size: 13px;
  line-height: 15px;
  color: #fff;
`;

const StyledStatement = styled.div`
  padding: 12px;
  margin-top: -26rem;
  position: relative;
  width: 40%;
  height: 320px;
  left: 58%;
  background: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(0,18,44,0.13);
  border-radius: 4px;
  font-family: Graphik LCG;
  font-size: 13px;
  line-height: 15px;
  animation-name: ${swipeLeft};
  animation-duration: 2s;

`;

const StyledTransaction = styled.div`
  padding: 12px;
  position: relative;
  width: 41%;
  height: 179px;
  right: 10%;
  margin-top: -15%;
  top: 1;
  background: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(0,18,44,0.13);
  border-radius: 4px;
  font-family: Graphik LCG;
  font-size: 13px;
  line-height: 15px;
  animation-name: ${swipeRight};
  animation-duration: 2s;
`;


const AnimatedImage = () => {
  return(
    <StyledAnimatedImage>
      <StyledContainer>
        <StyledCalendar>
          Calendar
        </StyledCalendar>
        <StyledStatement>Statement</StyledStatement>
        <StyledTransaction>Transaction</StyledTransaction>
      </StyledContainer>
    </StyledAnimatedImage>
  )
}

export default AnimatedImage;
