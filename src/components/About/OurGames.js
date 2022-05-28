import React from 'react';
import styled from "styled-components"

function AboutTripo() {
    return (
        <Wrapper>
            <Header>Our Games</Header>
            <Text>I'm a paragraph.
                Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.
            </Text>
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
  border: 3px solid red;
  text-align: center;
  color: #272443;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
  font-weight: bold;
  margin-top: 200px;

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

export default AboutTripo;