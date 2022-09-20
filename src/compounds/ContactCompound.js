import React from 'react';
import styled from "styled-components"
import JoinTeam from '../components/contact/JoinTeam'
import GetInTouch from '../components/contact/GetInTouch'
import SubNewsLetter from '../components/contact/SubNewsLetter'

function ContactCompound() {
  return (
    <Wrapper>
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

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1180px) {
    flex-direction: column;
  }
`

export default ContactCompound;