import React from 'react';
import styled from "styled-components"

function HeaderApps() {
    return (
        <Wrapper>
            <Image src='../img/download-on-the-app-store.png' />
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  border: 3px solid purple;
`

export const Image = styled.img`
  border: 3px solid purple;
`

export default HeaderApps;