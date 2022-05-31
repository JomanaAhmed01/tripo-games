import React from 'react';
import styled from "styled-components"
import ImmersiveGaming from '../components/Footer/ImmersiveGaming'
import Contact from '../components/Footer/Contact'
import Navigation from '../components/Footer/Navigation'
import Social from '../components/Footer/Social'
import FindUsOn from '../components/Footer/FindUsOn'

function FooterCompound() {
  return (
    <Wrapper>
      <ImmersiveGaming />
      <FooterWrapper>
        <Contact />
        <Navigation />
        <Social />
        <FindUsOn />
      </FooterWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const FooterWrapper = styled.div`
  
`

export default FooterCompound;