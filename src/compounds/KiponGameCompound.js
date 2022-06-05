import React from 'react';
import styled from "styled-components"
import KiponHeader from '../components/KiponGame/KiponHeader'
import KiponGameCard from '../components/KiponGame/KiponGameCard'
import KiponGameScreenshots from '../components/KiponGame/KiponGameScreenshots'
import KiponRating from '../components/KiponGame/KiponRating'
import KiponChallenge from '../components/KiponGame/KiponChallenge'
import KiponPlayNow from '../components/KiponGame/KiponPlayNow'
import KiponFooter from '../components/KiponGame/KiponFooter'

function KiponGameCompound() {
  return (
    <Wrapper>
      <KiponHeader />
      <CardWrapper>
        <KiponGameCard />
      </CardWrapper>
      <KiponGameScreenshots />
      <KiponRating />
      <KiponChallenge />
      <KiponPlayNow />
      <KiponFooter />
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