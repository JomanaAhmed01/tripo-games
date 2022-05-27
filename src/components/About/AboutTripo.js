import React from 'react';
import styled from "styled-components"

function AboutTripo() {
    return (
        <Wrapper>
          <Header>About Tripo</Header>
        </Wrapper>
    );
}

export const Wrapper = styled.div`

`

export const Header = styled.h3`
  border: 3px solid red;
  text-align: center;
  color: #272443;
`

export default AboutTripo;