import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function CareersCV() {
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderText>Didn’t Find the Position You’re Looking For?</HeaderText>
        <Header>Send Us Your CV</Header>
        <Button>Apply Now</Button>
      </TextWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  background-image: url('./img/bg-two.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(39, 36, 67, 0.7);
  width: 90%;
  height: 476px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const TextWrapper = styled.div`
  margin-left: 50px;
  padding-top: 100px;

  @media screen and (max-width: 680px) {
    margin-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const HeaderText = styled.p`
  color: #FFFFFF;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;

  @media screen and (max-width: 680px) {
    font-size: 18px;
    width: 87%;
    text-align: center;
  }
`

export const Header = styled.p`
  color: #FFFFFF;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;

  @media screen and (max-width: 680px) {
    font-size: 36px;
    width: 100%;
    text-align: center;
  }
`

export const Button = styled.a`
  color: #272443;
  background-color: #FCFF72;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
`

export default CareersCV;