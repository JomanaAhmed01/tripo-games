import React from 'react';
import styled from "styled-components"
import RobotrixHeader from '../components/RobotrixGame/RobotrixHeader.js'

function RobotrixGameCompound() {
  return (
    <Wrapper>
      <RobotrixHeader />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default RobotrixGameCompound;