import React from 'react';
import styled from "styled-components"
import AboutHeader from '../components/AboutPage/AboutHeader'
import AboutDesc from '../components/AboutPage/AboutDesc'

function AboutPageCompound() {
    return (
        <Wrapper>
          <AboutHeader />
          <AboutDesc />
        </Wrapper>
    );
}

export const Wrapper = styled.div`

`

export default AboutPageCompound;