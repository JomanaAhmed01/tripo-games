import React from 'react';
import styled from "styled-components"
import AboutTripo from '../components/About/AboutTripo'
import MobileEntertainment from '../components/About/MobileEntertainment';
import OurGames from '../components/About/OurGames'

function AboutCompound() {
    return (
        <Wrapper>
          <AboutTripo />
          <MobileEntertainment />
          <OurGames />
        </Wrapper>
    );
}

export const Wrapper = styled.div`

`

export default AboutCompound;