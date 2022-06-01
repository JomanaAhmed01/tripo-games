import React from 'react';
import styled from "styled-components"
import KiponHeader from '../components/KiponGame/KiponHeader'
import KiponGameCard from '../components/KiponGame/KiponGameCard'

function KiponGameCompound() {
  return (
    <Wrapper>
      <KiponHeader />
      <CardWrapper>
        <KiponGameCard />
      </CardWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export const CardWrapper = styled.div`
  background-image: url('./img/kipon-game-bg-one.png');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media screen and (max-width: 880px) {
    background-image: none;
  }
`

export default KiponGameCompound;