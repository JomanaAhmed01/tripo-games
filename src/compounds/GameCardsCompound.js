import React from 'react';
import styled from "styled-components"
import GamesCards from '../components/GameCards/GamesCards'

function GameCardsCompound() {
  return (
    <Wrapper>
      <GamesCards />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export default GameCardsCompound;