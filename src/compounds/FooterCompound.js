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
        <NavigationSocialWrapper>
          <Navigation />
          <Social />
        </NavigationSocialWrapper>
        <FindUsOn />
      </FooterWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  border-top: 1px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;

  @media screen and (max-width: 930px) {
    flex-direction: column;
  }
`

export const NavigationSocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;

  @media screen and (max-width: 930px) {
    width: 90%;
  }
`

export default FooterCompound;