import React from 'react';
import styled from "styled-components"

function GamesCards() {
  return (
    <Wrapper>
      <Card>
        <Image src='./img/kipon.png'></Image>
        <TextWrapper>
          <GameName>Kipon</GameName>
          <GameType>Casual - Free</GameType>
        </TextWrapper>
      </Card>

      <Card>
        <Image src='./img/robotrix.png'></Image>
        <TextWrapper>
          <GameName>Robotrix</GameName>
          <GameType>RPG - Free</GameType>
        </TextWrapper>
      </Card>

      <Card>
        <Image src='./img/treasure-box.png'></Image>
        <TextWrapper>
          <GameName>Treasure Box</GameName>
          <GameType>Adventure - Free</GameType>
        </TextWrapper>
      </Card>

      <Card>
        <Image src='./img/explore-our-games.png'></Image>
      </Card>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 100px;

  @media screen and (max-width: 1120px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }
`

export const Card = styled.div`
  cursor: pointer;
`

export const Image = styled.img`
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  width: 100%;
`

export const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  bottom: 140px;
  left: 20px;

  @media screen and (max-width: 880px) {
    bottom: 110px;
    left: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`

export const GameName = styled.p`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 24px;

  @media screen and (max-width: 880px) {
    font-size: 20px;
  }
`

export const GameType = styled.p`
  color: #FFFFFF;
  font-size: 16px;

  @media screen and (max-width: 880px) {
    font-size: 13px;
  }
`

export default GamesCards;