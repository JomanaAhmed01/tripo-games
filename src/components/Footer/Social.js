import React from 'react';
import styled from "styled-components"

function Social() {
    return (
        <Wrapper>
          <Header>Social</Header>

          <ElementsWrapper>
            <Element>Discord</Element>
            <Element>Twitch</Element>  
            <Element>Facebook</Element>
            <Element>Youtube</Element>
            <Element>Twitter</Element>
            <Element>LinkedIn</Element>
          </ElementsWrapper>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  
`

export const Header = styled.p`
  color: #272443;
  font-size: 21px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`

export const ElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Element = styled.a`
  color: #757575;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 15px;
`

export default Social;