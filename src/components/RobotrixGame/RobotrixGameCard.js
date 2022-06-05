import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Quicksand:wght@300&family=Roboto:wght@300&display=swap');
</style>

function RobotrixGameCard() {
  return (
    <Wrapper>
      <RobotrixCardWrapper>
        <RobotrixInfoWrapper>
          <Icon src='./img/robotrix-icon.png' />
          <InfoWrapper>
            <InfoHeader>Robotrix</InfoHeader>
            <InfoText>RPG - Free</InfoText>
          </InfoWrapper>
        </RobotrixInfoWrapper>

        <Header>Enjoy Tactical Combat and Secrets to Find With Robotrix.</Header>
        <Text>I'm a paragraph.
          Click here to add your own text and edit me.
          It’s easy.
          Just click “Edit Text” or double click me to add your own content and make changes to the font.
          I’m a great place for you to tell a story and let your users know a little more about you.
        </Text>
      </RobotrixCardWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  margin-top: 250px;
`

export const RobotrixCardWrapper = styled.div`
  background-color: #FFFFFF;
  width: 652px;
  height: 515px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  bottom: 180px;
  left: 100px;
  padding-left: 40px;
  padding-top: 60px;

  @media screen and (max-width: 880px) {
    margin-left: auto;
    margin-right: auto;
    bottom: 450px;
    left: 0px;
    height: 600px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 580px) {
    height: 530px;
  }
`

export const RobotrixInfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;

  @media screen and (max-width: 880px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`

export const Icon = styled.img`
  border-radius: 20px;
  width: 78px;
  height: 78px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 7px solid #FFFFFF;

  @media screen and (max-width: 880px) {
    width: 30%;
    height: 30%;
  }
`

export const InfoWrapper = styled.div`
  @media screen and (max-width: 880px) {
    width: 70%;
  }
`

export const InfoHeader = styled.p`
  color: #272443;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-left: 20px;

  @media screen and (max-width: 880px) {
    font-size: 30px;
  }

  @media screen and (max-width: 580px) {
    font-size: 21px;
  }
`

export const InfoText = styled.p`
  color: #272443;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-top: -10px;
  margin-left: 20px;

  @media screen and (max-width: 880px) {
    font-size: 20px;
  }

  @media screen and (max-width: 580px) {
    font-size: 16px;
  }
`

export const Header = styled.p`
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
  color: #272443;
  width: 568px;

  @media screen and (max-width: 880px) {
    font-size: 40px;
    width: 90%;
  }

  @media screen and (max-width: 580px) {
    font-size: 35px;
    width: 80%;
  }

  @media screen and (max-width: 510px) {
    font-size: 30px;
  }
`

export const Text = styled.p`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: #272443;
  width: 568px;
  margin-top: -20px;

  @media screen and (max-width: 880px) {
    font-size: 21px;
    width: 90%;
    margin-top: 0px;
  }

  @media screen and (max-width: 580px) {
    font-size: 18px;
    width: 80%;
  }
`

export default RobotrixGameCard;