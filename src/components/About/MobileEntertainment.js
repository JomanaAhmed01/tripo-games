import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Quicksand:wght@300&family=Roboto:wght@300&display=swap');
</style>

function MobileEntertainment() {
  return (
    <Wrapper>
      <Header>Your Source for Mobile Entertainment</Header>
      <Text>I'm a paragraph. Click here to add your own text and edit me.
        It’s easy.
        Just click “Edit Text” or double click me to add your own content and make changes to the font.
        I’m a great place for you to tell a story and let your users know a little more about you.
      </Text>
      <Button>Learn more</Button>

      <ImagesWrapper>
        <Image src='./img/building-game.png' />
      </ImagesWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Header = styled.p`
  text-align: center;
  color: #272443;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
  font-weight: bold;
  width: 808px;

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 40px;
  }

  @media screen and (max-width: 470px) {
    font-size: 30px;
  }
`

export const Text = styled.p`
  font-size: 18px;
  width: 720px;
  text-align: center;
  color: #272443;
  font-family: 'Roboto', sans-serif;
  margin-top: -30px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 470px) {
    font-size: 16px;
  }
`

export const Button = styled.a`
  background-color: #DA392B;
  border: 1px solid #DA392B;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  color: #FFFFFF;
  cursor: pointer !important;
  transition: 0.3s;
  margin-top: 20px;

  :hover {
    background-color: #FFFFFF;
    color: #000000;
    border: 1px solid #000000;
  }

  @media screen and (max-width: 768px) {
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`

export const ImagesWrapper = styled.div`
  /* border: 3px solid red; */
  padding-left: 20px;
  padding-right: 20px;
`

export const Image = styled.img`
  border-radius: 20px;
  margin-top: 60px;
  width: 100%;
`

export default MobileEntertainment;