import React from 'react';
import styled from "styled-components"
import AboutHeader from '../components/AboutPage/AboutHeader'
import AboutDesc from '../components/AboutPage/AboutDesc'
import AboutCreatingGame from '../components/AboutPage/AboutCreatingGame'
import WeAreAbout from '../components/AboutPage/WeAreAbout'
import MeetTheFounders from '../components/AboutPage/MeetTheFounders'

function AboutPageCompound() {
    return (
        <Wrapper>
          <AboutHeader />
          <AboutDesc />
          <AboutCreatingGame />
          <WeAreAbout />
          <MeetTheFounders />
        </Wrapper>
    );
}

export const Wrapper = styled.div`

`

export default AboutPageCompound;