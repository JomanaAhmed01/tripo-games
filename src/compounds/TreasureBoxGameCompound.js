import React from 'react';
import styled from "styled-components"
import TreasureBoxHeader from '../components/TreasureBoxGame/TreasureBoxHeader'
import TreasureBoxCardWrapper from '../components/TreasureBoxGame/TreasureBoxGameCard'

function TreasureBoxGameCompound() {
    return (
        <Wrapper>
            <TreasureBoxHeader />
            <CardWrapper>
                <TreasureBoxCardWrapper />
            </CardWrapper>
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