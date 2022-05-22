import React from 'react';
import styled from "styled-components";

function HeaderApps() {
    return (
        <Wrapper>
            <Image src='./img/get-it-on-google-play.png' />
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  border: 3px solid purple;
  padding-bottom: 340px;
`

export const Image = styled.img`
  border: 3px solid purple;
`

export default HeaderApps;