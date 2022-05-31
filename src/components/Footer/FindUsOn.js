import React from 'react';
import styled from "styled-components"

function FindUsOn() {
    return (
        <Wrapper>
          <Header>Find Us On</Header>

          <ElementsWrapper>
            <Image src='./img/app-store.png' />
            <Image src='./img/google-play.png' />
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
  width: 80%;

  @media screen and (max-width: 930px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

export const Image = styled.img`
  width: 135px;
  height: 40px;
  margin-bottom: 20px;
  margin-right: 20px;
`

export default FindUsOn;