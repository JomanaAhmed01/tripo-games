import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Quicksand:wght@300&family=Roboto:wght@300&display=swap');
</style>

function KiponChallenge() {
    return (
        <Wrapper>
            <TextWrapper>
                <Header>Challenge a Friend or Race Against the Clock as You Battle Through 20 Levels of Endless Fun</Header>
                <Text>I'm a paragraph.
                    Click here to add your own text and edit me.
                    It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    I’m a great place for you to tell a story and let your users know a little more about you.
                </Text>
            </TextWrapper>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  background-image: url('./img/kipon-game-bg-two.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(218,57,43, 0.7);
  margin-bottom: 100px;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 150px;
  padding-bottom: 150px;

  @media screen and (max-width: 490px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`

export const Header = styled.p`
  color: #FFFFFF;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
  width: 59%;
  text-align: center;

  @media screen and (max-width: 890px) {
    font-size: 35px;
  }

  @media screen and (max-width: 490px) {
    width: 79%;
  }
`

export const Text = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  width: 43%;
  text-align: center;

  @media screen and (max-width: 890px) {
    font-size: 14px;
  }

  @media screen and (max-width: 490px) {
    width: 79%;
  }
`

export default KiponChallenge;