import React from "react"
import styled from "styled-components"

function AboutTripo() {
  return (
    <Wrapper>
      <BackgroundImage src="./img/games-bg.png" />
      <CardsWrapperFirst>
        <CardOne>
          <GameNameWrapper>
            <Image src="./img/kipon-icon.png" />
            <TextWrapper>
              <GameName>Kipon</GameName>
              <GameType>Casual - Free</GameType>
            </TextWrapper>
          </GameNameWrapper>
          <Text>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </Text>
          <AppsWrapper>
            <ImageOne src="./img/app-store.png" />
            <ImageTwo src="./img/google-play.png" />
          </AppsWrapper>
        </CardOne>

        <CardTwo>
          <GameNameWrapper>
            <Image src="./img/robotrix-icon.png" />
            <TextWrapper>
              <GameName>Robotrix</GameName>
              <GameType>RPG - Free</GameType>
            </TextWrapper>
          </GameNameWrapper>
          <Text>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </Text>
          <AppsWrapper>
            <ImageOne src="./img/app-store.png" />
            <ImageTwo src="./img/google-play.png" />
          </AppsWrapper>
        </CardTwo>
      </CardsWrapperFirst>

      <CardsWrapperSecond>
        <CardOne>
          <GameNameWrapper>
            <ImageCardThree src="./img/treasure-box-icon.png" />
            <TextWrapper>
              <GameNameCardThree>Treasure Box</GameNameCardThree>
              <GameTypeCardThree>Adventure - Free</GameTypeCardThree>
            </TextWrapper>
          </GameNameWrapper>
          <Text>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </Text>
          <AppsWrapper>
            <ImageOne src="./img/app-store.png" />
            <ImageTwo src="./img/google-play.png" />
          </AppsWrapper>
        </CardOne>

        <Icon src="./img/games-icon.png" />
      </CardsWrapperSecond>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background-image: url("./img/games-bg.png");
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
  background-color: #ffffff;
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.32), 0 4px 16px 0 rgba(0,0,0,0.22);

  @media screen and (max-width: 430px) {
    width: 80%;
  }
`

export const CardTwo = styled.div`
  width: 330px;
  background-color: #ffffff;
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.32), 0 4px 16px 0 rgba(0,0,0,0.22);

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
  border: 7px solid #ffffff;
`

export const ImageCardThree = styled.img`
  border-radius: 20px;
  width: 78px;
  height: 78px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 7px solid #ffffff;
  /* margin-left: 10px; */
`

export const TextWrapper = styled.div`
  /* border: 3px solid red; */
  /* width: 400px; */
`

export const GameName = styled.p`
  color: #272443;
  font-size: 21px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin-left: -20px;
`

export const GameType = styled.p`
  color: #272443;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  margin-top: -10px;
  margin-left: -20px;
`

export const GameNameCardThree = styled.p`
  color: #272443;
  font-size: 21px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  /* margin-left: 10px; */
`

export const GameTypeCardThree = styled.p`
  color: #272443;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
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

export default AboutTripo
