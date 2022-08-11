import React from 'react';
import styled from "styled-components"
import CommunityManager from '../components/JobApplies/CommunityManager'
import QATester from '../components/JobApplies/QATester'
import GameDesigner from '../components/JobApplies/GameDesigner'
import GameDeveloper from '../components/JobApplies/GameDeveloper'

function JobAppliesCompound() {
  return (
    <Wrapper>
      <CommunityManager />
      <QATester />
      <GameDesigner />
      <GameDeveloper />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default JobAppliesCompound;