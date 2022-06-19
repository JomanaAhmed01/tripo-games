import React from 'react';
import styled from "styled-components"
// import CommunityManager from '../components/JobApplies/CommunityManager'
// import QATester from '../components/JobApplies/QATester'
import GameDesigner from '../components/JobApplies/GameDesigner';

function JobAppliesCompound() {
  return (
    <Wrapper>
      {/* <CommunityManager /> */}
      {/* <QATester /> */}
      <GameDesigner />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default JobAppliesCompound;