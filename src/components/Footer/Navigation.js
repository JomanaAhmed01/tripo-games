import React from 'react';
import styled from "styled-components"

function Navigation() {
    return (
        <Wrapper>
          <Header>Navigation</Header>

          <ElementsWrapper>
            <Element href='#'>Games</Element>
            <Element href='#'>Careers</Element>  
            <Element href='#'>About</Element>
            <Element href='#'>Contact</Element>
            <Element href='#'>Privacy Policy</Element>
            <Element href='#'>Terms & Conditions</Element>
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

export default Navigation;