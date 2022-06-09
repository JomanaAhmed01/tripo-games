import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function CareersHiring() {
  return (
    <Wrapper>
      <HeaderText>Help Us Change the Way People Play</HeaderText>
      <Header>We’re Hiring</Header>
      <Text>I'm a paragraph.
        Click here to add your own text and edit me.
        It’s easy.
        Just click “Edit Text” or double click me to add your own content and make changes to the font.
        I’m a great place for you to tell a story and let your users know a little more about you.
      </Text>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  margin-left: 100px;
  margin-top: 120px;

  @media screen and (max-width: 768px) {
    margin-left: 40px;
    margin-top: -400px;
  }
`

export const HeaderText = styled.p`
  font-size: 21px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: #272443;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    font-size: 18px;
    width: 80%;
  }
`

export const Header = styled.p`
  font-size: 50px;
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
  color: #272443;
  margin-top: -10px;

  @media screen and (max-width: 450px) {
    font-size: 40px;
  }
`

export const Text = styled.p`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: #272443;
  margin-top: -20px;
  width: 564px;

  @media screen and (max-width: 768px) {
    width: 78%;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`

export default CareersHiring;