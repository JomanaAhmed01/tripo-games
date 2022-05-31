import React from 'react';
import styled from "styled-components"

function Contact() {
    return (
        <Wrapper>
          <Header>Contact</Header>

          <ElementsWrapper>
            <Element>Info@mysite.com</Element>
            <Element>Tel: 123-456-7890</Element>  
            <Element>500 Terry Francois St</Element>
            <Element>San Francisco, CA 94158</Element>
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
  
`

export const Element = styled.p`
  color: #757575;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
`

export default Contact;