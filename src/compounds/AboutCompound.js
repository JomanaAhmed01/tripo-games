import React from 'react';
import styled from "styled-components"
import AboutTripo from '../components/About/AboutTripo'
import MobileEntertainment from '../components/About/MobileEntertainment';

function AboutCompound() {
    return (
        <Wrapper>
          <AboutTripo />
          <MobileEntertainment />
        </Wrapper>
    );
}

export const Wrapper = styled.div`

`

export default AboutCompound;