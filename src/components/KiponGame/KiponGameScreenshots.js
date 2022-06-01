import React from 'react';
import styled from "styled-components"

function KiponGameScreenshots() {
    return (
        <Wrapper>
            <Header>Screenshots</Header>

            <ImagesWrapper>
                <Image src='./img/kipon-game-screenshot-one.png' />
                <Image src='./img/kipon-game-screenshot-two.png' />
            </ImagesWrapper>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  margin-top: 100px;
  margin-left: 100px;

  @media screen and (max-width: 880px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -350px;
  }
`

export const Header = styled.p`
  color: #272443;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 34px;
  margin-bottom: 70px;
  
  @media screen and (max-width: 490px) {
    font-size: 28px;
  }
`

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 100px;

  @media screen and (max-width: 880px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Image = styled.img`
  width: 45%;
  border-radius: 20px;

  @media screen and (max-width: 880px) {
    width: 90%;
    margin-bottom: 50px;
  }
`

export default KiponGameScreenshots;