import React from 'react';
import styled from "styled-components"
import ImmersiveGaming from '../components/Footer/ImmersiveGaming'
import Contact from '../components/Footer/Contact'

function FooterCompound() {
  return (
    <Wrapper>
      <ImmersiveGaming />
      <FooterWrapper>
        <Contact />
      </FooterWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const FooterWrapper = styled.div`
  
`

export default FooterCompound;