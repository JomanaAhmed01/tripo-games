import React from 'react';
import styled from "styled-components"
import RobotrixHeader from '../components/RobotrixGame/RobotrixHeader.js'
import RobotrixGameCard from '../components/RobotrixGame/RobotrixGameCard.js'
import RobotrixGameScreenshots from '../components/RobotrixGame/RobotrixGameScreenshots'
import RobotrixRating from '../components/RobotrixGame/RobotrixRating.js'

function RobotrixGameCompound() {
  return (
    <Wrapper>
      <RobotrixHeader />
      <CardWrapper>
        <RobotrixGameCard />
      </CardWrapper>
      <RobotrixGameScreenshots />
      <RobotrixRating />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export const CardWrapper = styled.div`
  background-image: url('./img/robotrix-game-bg-one.png');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media screen and (max-width: 880px) {
    background-image: none;
  }
`

export default RobotrixGameCompound;