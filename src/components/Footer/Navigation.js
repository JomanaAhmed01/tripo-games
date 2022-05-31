import React from 'react';
import styled from "styled-components"

function Navigation() {
    return (
        <Wrapper>
          <Header>Navigation</Header>

          <ElementsWrapper>
            <Element>Games</Element>
            <Element>Careers</Element>  
            <Element>About</Element>
            <Element>Contact</Element>
            <Element>Privacy Policy</Element>
            <Element>Terms & Conditions</Element>
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

export default Navigation;