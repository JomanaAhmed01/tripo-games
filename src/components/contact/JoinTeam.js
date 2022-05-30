import React from 'react';
import styled from "styled-components";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function JoinTeam() {
  return (
    <Wrapper>
      <Text>Join Our Team</Text>
      <Header>It takes the world's best talent to change the game.</Header>
      <Button>Explore Careers</Button>
      {/* <ImageWrapper>
        <Image src='./img/contact-us-icon.png' />
      </ImageWrapper> */}
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  background-image: url('./img/contact-us-bg1.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 200px;
  padding-left: 100px;
  padding-top: 50px;
  padding-bottom: 300px;

  @media screen and (max-width: 768px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 560px) {
    padding-left: 20px;
  }
`

export const Text = styled.p`
  color: #FFFFFF;
  font-size: 21px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-bottom: -30px;

  @media screen and (max-width: 660px) {
    margin-bottom: -10px;
  }
`

export const Header = styled.p`
  color: #FFFFFF;
  font-size: 50px;
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
  width: 70%;

  @media screen and (max-width: 1024px) {
    font-size: 45px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 660px) {
    font-size: 35px;
    width: 90%;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
    font-size: 32px;
  }
`

export const Button = styled.a`
  background-color: #FCFF72;
  color: #272443;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 10px;
  cursor: pointer !important;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #FFFFFF;
  }
`

export const ImageWrapper = styled.div`
  border: 3px solid #FFFFFF;
  position: relative;
  padding-left: 700px;
`

export const Image = styled.img`
  /* width: 100%; */
`

export default JoinTeam;