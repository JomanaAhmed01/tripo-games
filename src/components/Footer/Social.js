import React from 'react';
import styled from "styled-components"

function Social() {
    return (
        <Wrapper>
          <Header>Social</Header>

          <ElementsWrapper>
            <Element href='#'>Discord</Element>
            <Element href='#'>Twitch</Element>  
            <Element href='#'>Facebook</Element>
            <Element href='#'>Youtube</Element>
            <Element href='#'>Twitter</Element>
            <Element href='#'>LinkedIn</Element>
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
  text-decoration: none;
`

export default Social;