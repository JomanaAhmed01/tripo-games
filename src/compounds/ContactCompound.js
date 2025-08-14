import React from 'react';
import styled from "styled-components"
import HeaderLogo from '../components/Header/HeaderLogo'
// import HeaderNavbar from '../components/Header/HeaderNavbar'
import JoinTeam from '../components/contact/JoinTeam'
import GetInTouch from '../components/contact/GetInTouch'
import SubNewsLetter from '../components/contact/SubNewsLetter'

function ContactCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderLogo />
        {/* <HeaderNavbar /> */}
      </HeaderWrapper>
      <JoinTeam />
      <ContactWrapper>
        <GetInTouch />
        <SubNewsLetter />
      </ContactWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;

  @media screen and (max-width: 1024px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1180px) {
    flex-direction: column;
  }
`

export default ContactCompound;