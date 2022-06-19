import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function OurOffices() {
    return (
        <Wrapper>
            <TextWrapper>
                <HeaderText>Our Offices</HeaderText>
                <Header>Our Studio in San Francisco</Header>
                <Text>I'm a paragraph.
                    Click here to add your own text and edit me.
                    It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    I’m a great place for you to tell a story and let your users know a little more about you.
                </Text>
            </TextWrapper>

            <WorkingWrapper>
                <Icon src='./img/about-icon.png' />
                <WorkingHeader>We’d Love to Work With You</WorkingHeader>
                <WorkingText>I'm a paragraph.
                    Click here to add your own text and edit me.
                    Let your users get to know you.
                </WorkingText>
                <Button>Explore Opportunities</Button>
            </WorkingWrapper>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  background-image: url('./img/about-bg.png');
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(218,57,43, 0.7);
  height: 580px;
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  @media screen and (max-width: 880px) {
    flex-direction: column;
    padding-left: 100px;
  }

  @media screen and (max-width: 620px) {
    padding-left: 20px;
    padding-bottom: 100px;
  }
`

export const TextWrapper = styled.div`
  
`

export const HeaderText = styled.p`
  color: #FFFFFF;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;

  @media screen and (max-width: 620px) {
    font-size: 18px;
  }
`

export const Header = styled.p`
  color: #FFFFFF;
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  width: 332px;
  margin-top: -10px;

  @media screen and (max-width: 620px) {
    font-size: 35px;
  }
`

export const Text = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  width: 383px;
  margin-top: -10px;
  line-height: 28px;

  @media screen and (max-width: 620px) {
    font-size: 16px;
    width: 85%;
  }
`

export const WorkingWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 20px;
  width: 350px;
  height: 364px;
  padding-left: 40px;

  @media screen and (max-width: 880px) {
    width: 400px;
    height: 384px;
  }

  @media screen and (max-width: 620px) {
    width: 300px;
    padding-left: 20px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 50px;
  }
`

export const Icon = styled.img`
  margin-top: -45px;

  @media screen and (max-width: 880px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 620px) {
    width: 50%;
  }
`

export const WorkingHeader = styled.p`
  color: #272443;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;

  @media screen and (max-width: 620px) {
    font-size: 18px;
  }
`

export const WorkingText = styled.p`
  color: #272443;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  width: 298px;
  margin-bottom: 40px;

  @media screen and (max-width: 620px) {
    font-size: 14px;
  }
`

export const Button = styled.a`
  background-color: #272443;
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: #DA392B;
  }
`

export default OurOffices;