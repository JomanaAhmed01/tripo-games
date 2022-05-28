import React from 'react';
import styled from "styled-components"
import AboutTripo from '../components/About/AboutTripo'
import MobileEntertainment from '../components/About/MobileEntertainment';
import OurGames from '../components/About/OurGames'
import TripoGames from '../components/About/TripoGames'

function AboutCompound() {
    return (
        <Wrapper>
          <AboutTripo />
          <MobileEntertainment />
          <OurGames />
          <TripoGames />
        </Wrapper>
    );
}

export const Wrapper = styled.div`

`

export default AboutCompound;