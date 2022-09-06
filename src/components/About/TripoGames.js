import React, { useState } from 'react';
import styled from "styled-components"
import { games } from '../../Data/games'

function AboutTripo() {

  const [renderData, setRenderData] = useState(games)

  return (
    <Wrapper>
      <BackgroundImage src='./img/games-bg.png' />
      <CardsWrapperFirst>
        {renderData
          .filter(
            (item) => item.type === "Casual - Free" || item.type === "RPG - Free"
          )
          .map((item) =>
            item.id === '1' ? (
              <CardOne>
                <GameNameWrapper>
                  <Image src='./img/kipon-icon.png' />
                  <TextWrapper>
                    <GameName>{item.title}</GameName>
                    <GameType>{item.type}</GameType>
                  </TextWrapper>
                </GameNameWrapper>
                <Text>{item.Description}</Text>
                <AppsWrapper>
                  <ImageOne src='./img/app-store.png' />
                  <ImageTwo src='./img/google-play.png' />
                </AppsWrapper>
              </CardOne>
            ) : null
          )}

        {renderData
          .filter(
            (item) => item.type === "RPG - Free" || item.type === "Advneture - Free"
          )
          .map((item) =>
            item.id === '2' ? (
              <CardOne>
                <GameNameWrapper>
                  <Image src='./img/robotrix-icon.png' />
                  <TextWrapper>
                    <GameName>{item.title}</GameName>
                    <GameType>{item.type}</GameType>
                  </TextWrapper>
                </GameNameWrapper>
                <Text>{item.Description}</Text>
                <AppsWrapper>
                  <ImageOne src='./img/app-store.png' />
                  <ImageTwo src='./img/google-play.png' />
                </AppsWrapper>
              </CardOne>
            ) : null
          )}
      </CardsWrapperFirst>

      <CardsWrapperSecond>
        {renderData
          .filter(
            (item) => item.type === "Adventure - Free" || item.type === "Casual - Free"
          )
          .map((item) =>
            item.id === '3' ? (
              <CardOne>
                <GameNameWrapper>
                  <Image src='./img/treasure-box-icon.png' />
                  <TextWrapper>
                    <GameName>{item.title}</GameName>
                    <GameType>{item.type}</GameType>
                  </TextWrapper>
                </GameNameWrapper>
                <Text>{item.Description}</Text>
                <AppsWrapper>
                  <ImageOne src='./img/app-store.png' />
                  <ImageTwo src='./img/google-play.png' />
                </AppsWrapper>
              </CardOne>
            ) : null
          )}
          
        <Icon src='./img/games-icon.png' />
      </CardsWrapperSecond>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-image: url('./img/games-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    background-image: none;
    margin-top: 0px;
  }
`

export const BackgroundImage = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: initial;
    width: 100%;
  }
`

export const CardsWrapperFirst = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
  }
`

export const CardsWrapperSecond = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  margin-top: 450px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    margin-left: 10px;
  }
`

export const CardOne = styled.div`
  width: 330px;
  background-color: #FFFFFF;
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 20px;

  @media screen and (max-width: 430px) {
    width: 80%;
  }
`

export const CardTwo = styled.div`
  width: 330px;
  background-color: #FFFFFF;
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 430px) {
    width: 80%;
  }
`

export const GameNameWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 250px;
`

export const Image = styled.img`
  border-radius: 20px;
  width: 78px;
  height: 78px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 7px solid #FFFFFF;
`

export const ImageCardThree = styled.img`
  border-radius: 20px;
  width: 78px;
  height: 78px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 7px solid #FFFFFF;
  /* margin-left: 10px; */
`

export const TextWrapper = styled.div`
  /* border: 3px solid red; */
  /* width: 400px; */
`

export const GameName = styled.p`
  color: #272443;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-left: -20px;
`

export const GameType = styled.p`
  color: #272443;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-top: -10px;
  margin-left: -20px;
`

export const GameNameCardThree = styled.p`
  color: #272443;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  /* margin-left: 10px; */
`

export const GameTypeCardThree = styled.p`
  color: #272443;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  margin-top: -10px;
  margin-left: 5px;
`

export const Text = styled.p`
  width: 280px;
  color: #272443;
  font-size: 16px;
  padding-left: 20px;

  @media screen and (max-width: 430px) {
    width: 80%;
  }
`

export const AppsWrapper = styled.div`
  padding-left: 20px;
  width: 250px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`

export const ImageOne = styled.img`
  width: 120px;
  height: 40px;
  border-radius: 10px;
`

export const ImageTwo = styled.img`
  width: 120px;
  height: 40px;
  border-radius: 10px;
`

export const Icon = styled.img`
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 430px) {
    width: 80%;
  }
`

export default AboutTripo;