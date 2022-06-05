import React from 'react';
import styled from "styled-components"
import TreasureBoxHeader from '../components/TreasureBoxGame/TreasureBoxHeader'
import TreasureBoxCardWrapper from '../components/TreasureBoxGame/TreasureBoxGameCard'
import TreasureBoxGameScreenshots from '../components/TreasureBoxGame/TreasureBoxGameScreenshots'
import TreasureBoxRating from '../components/TreasureBoxGame/TreasureBoxRating'
import TreasureBoxSetSail from '../components/TreasureBoxGame/TreasureBoxSetSail'
import TreasureBoxPlayNow from '../components/TreasureBoxGame/TreasureBoxPlayNow'
import TreasureBoxFooter from '../components/TreasureBoxGame/TreasureBoxFooter'

function TreasureBoxGameCompound() {
    return (
        <Wrapper>
            <TreasureBoxHeader />
            <CardWrapper>
                <TreasureBoxCardWrapper />
            </CardWrapper>
            <TreasureBoxGameScreenshots />
            <TreasureBoxRating />
            <TreasureBoxSetSail />
            <TreasureBoxPlayNow />
            <TreasureBoxFooter />
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  
`

export const CardWrapper = styled.div`
  background-image: url('./img/treasure-box-bg-one.png');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media screen and (max-width: 880px) {
    background-image: none;
  }
`

export default TreasureBoxGameCompound;