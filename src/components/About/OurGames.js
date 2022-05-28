import React from 'react';
import styled from "styled-components"

function AboutTripo() {
    return (
        <Wrapper>
          <Header>Our Games</Header>
        </Wrapper>
    );
}

export const Wrapper = styled.div`

`

export const Header = styled.p`
  border: 3px solid red;
  text-align: center;
  color: #272443;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export default AboutTripo;