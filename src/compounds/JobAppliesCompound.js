import React from 'react';
import styled from "styled-components"
// import CommunityManager from '../components/JobApplies/CommunityManager'
import QATester from '../components/JobApplies/QATester'

function JobAppliesCompound() {
  return (
    <Wrapper>
      {/* <CommunityManager /> */}
      <QATester />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default JobAppliesCompound;