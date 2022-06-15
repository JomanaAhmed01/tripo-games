import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function WeAreAbout() {
  return (
    <Wrapper>
      <Header>What We Are About</Header>
      <CardsWrapper>
        <FirstRowCardsWrapper>
          <CardOne>
            <CardHeader>Accomplishment</CardHeader>
            <CardText>I'm a paragraph.
              Click here to add your own text and edit me.
              I’m a great place for you to tell a story and let your users know a little more about you.
            </CardText>
          </CardOne>
          <CardTwo>
            <CardHeader>Creativity</CardHeader>
            <CardText>I'm a paragraph.
              Click here to add your own text and edit me.
              I’m a great place for you to tell a story and let your users know a little more about you.
            </CardText>
          </CardTwo>
        </FirstRowCardsWrapper>
        <CardThree>
          <CardHeader>Community</CardHeader>
          <CardText>I'm a paragraph.
            Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users know a little more about you.
          </CardText>
        </CardThree>
      </CardsWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-image: url('./img/about-bg.png');
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.7);
  height: 860px;
  border: 1px solid transparent;

  @media screen and (max-width: 1145px) {
    height: 1060px;
  }
`

export const Header = styled.p`
  color: #272443;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
  text-align: center;
  margin-top: 140px;

  @media screen and (max-width: 1145px) {
    margin-top: 0px;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const FirstRowCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 62%;
  margin-bottom: 30px;

  @media screen and (max-width: 1145px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CardOne = styled.div`
  width: 390px;
  height: 237px;
  background-color: #FFFFFF;
  border-radius: 15px;

  @media screen and (max-width: 1300px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 1145px) {
    margin-right: 0px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 475px) {
    width: 330px;
    height: 257px;
  }
`

export const CardTwo = styled.div`
  width: 390px;
  height: 237px;
  background-color: #FFFFFF;
  border-radius: 15px;

  @media screen and (max-width: 475px) {
    width: 330px;
    height: 257px;
  }
`

export const CardThree = styled.div`
  width: 62%;
  height: 193px;
  background-color: #FFFFFF;
  border-radius: 15px;

  @media screen and (max-width: 1145px) {
    width: 390px;
    height: 237px;
  }

  @media screen and (max-width: 475px) {
    width: 330px;
    height: 257px;
  }
`

export const CardHeader = styled.p`
  color: #DA392B;
  font-size: 34px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-left: 20px;
`

export const CardText = styled.p`
  color: #272443;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  width: 80%;
  margin-left: 20px;
  line-height: 25px;
`

export default WeAreAbout;