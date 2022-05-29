import React from 'react';
import styled from "styled-components"
import JoinTeam from '../components/contact/JoinTeam'

function ContactCompound() {
    return (
        <Wrapper>
            <JoinTeam />
        </Wrapper>
    );
}

export const Wrapper = styled.div`
`

export default ContactCompound;