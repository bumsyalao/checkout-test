/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Table from './Table';
import AnimatedMap from './AnimatedMap';
import { getDates } from '../helpers';

const moment = require('moment');
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0%   { transform: translateY(0); }
  30%  { transform: translateY(-100px); }
  50%  { transform: translateY(0); }
  100% { transform: translateY(0); }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;
const swipeLeft = keyframes`
  10% {left: -50px;}
  75% {left: 10px;}
`;

const swipeRight = keyframes`
  10% {right: 10px;}
  75% {right: -50px;}
`;
const pulse = keyframes`
  50% {
      transform: scale(1.3);
      text-shadow: 0 0 1rem rgba(32, 28, 41, .8);
      color: #b76fb7;
  }
  `

const StyledAnimatedImage = styled.div`
  width:  50%;
  margin: 5%;
  margin-left: 20%;
`;

const StyledContainer = styled.div`
  max-width: 100%;
`;

const StyledCalendar = styled.div`
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
  background: #FEFDFB;
  box-shadow: 10px 0px 5px 0px rgba(0,18,44,0.13);
  border-radius: 4px;
  font-family: Graphik LCG;
  font-size: 13px;
  line-height: 15px;
  animation-name: ${swipeLeft};
  animation-duration: 2s;
  display: ${props => props.hide ? 'none;' : ''}
`;
const StyledStateHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledTransaction = styled.div`
  padding: 12px;
  position: relative;
  width: 41%;
  height: 179px;
  right: 10%;
  margin-top: -15%;
  top: 1;
  background: #FEFDFB;
  box-shadow: 0px 10px 5px rgba(0,18,44,0.13);
  border-radius: 4px;
  font-family: Graphik LCG;
  font-size: 13px;
  line-height: 15px;
  animation-name: ${swipeRight};
  animation-duration: 2s;
  display: ${props => props.hide ? 'none;' : ''}
`;
const StyledTransHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledCalenderHeader = styled.div`
  font-size: 16px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #f3c25d;
  &:hover {
    animation: ${pulse} 1.5s;
  }

`;
const StyledDate = styled.span``;
const StyledDay = styled.span``;

const StyledCalendarContent = styled.div`

  display: grid;
  width: 100%;
  height: 80%;
  padding-left: 3px;
  padding-top: 38px;
  grid-template-columns: 14% 14% 14% 14% 14% 14% 14%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  grid-gap: 0;
`;

const StyledCalendarMonth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border: 0.1px solid #55657D;
  padding: 4px;
  color: #00B48F;
  &:hover {
    background-color: #fff;
    animation: ${pulse} 1.5s;
  }
`;

const StyledCalendarDay = styled.div``;
const StyledCalendarDate = styled.div``;

const StyledStatementButton = styled.span`
  cursor: pointer;
  color: #fff;
  margin-right: 3px;
  float: right;
  font-size: 13px;
  &:hover {
    animation: ${pulse} 1.5s;
    color: #f3c25d !important;
  }
`;
const StyledTransactionButton = styled.span`
  cursor: pointer;
  margin-right: 20px;
  float: right;
  color: #fff;
  font-size: 13px;
  &:hover {
    animation: ${pulse} 1.5s;
    color: #f3c25d !important;
  }
`;

const StyledCloseButton = styled.span`
  cursor: pointer;
  color: #aaaaaa;
  right: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const StyledStateContent = styled.div`
  margin: 22px;
`;

const StyledStateContentHeading = styled.h4`
  color: #000;
  font-family: 'Noto Serif', serif;
  font-size: 15px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: ${typing} 3.5s steps(30, end);
  animation-delay: 3s;
  // @media (max-width: 600px) {
  //     font-size: 2.5rem;
  //     width: 100%;
  //   }
`;

const StyledTransContent = styled.div`
  margin: 40px;
`;
const StyledTransContentNum = styled.h1`
  color: #e64e64;
  animation: ${rotate} 2s ;
  animation-delay: 3s;
  &:hover{
    animation: ${rotate} 2s ;
  }
`;

const months = getDates(new Date("Mar 01 2020"));

const AnimatedImage = () => {
  const [hideStatement, setHideStatement] = useState(false);
  const [hideTrans, setHideTrans] = useState(false);
  return (
    <StyledAnimatedImage>
      <StyledContainer>
        <StyledCalendar>
          Calendar
          <StyledStatementButton onClick={() => setHideStatement(false)}>Statement</StyledStatementButton>
          <StyledTransactionButton onClick={() => setHideTrans(false)}>Transactions</StyledTransactionButton>
          <StyledCalendarContent>
            <StyledCalenderHeader>
              March
              <StyledDay>{moment().format('Do')}</StyledDay>
              <StyledDate>{moment().format('dddd')}</StyledDate>
            </StyledCalenderHeader>
            {months.map(({ date, day }) =>
              <StyledCalendarMonth>
                <StyledCalendarDate>{date}</StyledCalendarDate>
                <StyledCalendarDay>{day}</StyledCalendarDay>
              </StyledCalendarMonth>
            )}
          </StyledCalendarContent>
        </StyledCalendar>
        <StyledStatement hide={hideStatement}>
          <StyledStateHeader>
            Statement
          <StyledCloseButton role='img' aria-label='push-pin'
              onClick={() => setHideStatement(true)}>&#128204;</StyledCloseButton>
          </StyledStateHeader>
          <StyledStateContent>
            <StyledStateContentHeading>Your monthly statement</StyledStateContentHeading>
            <Table />
          </StyledStateContent>
        </StyledStatement>
        <StyledTransaction hide={hideTrans}>
          <StyledTransHeader>
            Transactions
        <StyledCloseButton role='img' aria-label='push-pin'
              onClick={() => setHideTrans(true)}>&#128204;</StyledCloseButton>
          </StyledTransHeader>
          <StyledTransContent>
            <StyledTransContentNum>
              10,960,000USD
            </StyledTransContentNum>
            <AnimatedMap />
          </StyledTransContent>
        </StyledTransaction>
      </StyledContainer>
    </StyledAnimatedImage>
  )
}

export default AnimatedImage;
