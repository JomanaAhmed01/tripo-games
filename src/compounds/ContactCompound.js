import React from 'react';
import styled from "styled-components"
import JoinTeam from '../components/contact/JoinTeam'
import GetInTouch from '../components/contact/GetInTouch'

function ContactCompound() {
    return (
        <Wrapper>
            <JoinTeam />
            <GetInTouch />
        </Wrapper>
    );
}

export const Wrapper = styled.div`
`

export default ContactCompound;