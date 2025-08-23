import React from "react"
import styled from "styled-components"
;<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function HeaderText() {
  return (
    <Wrapper>
      <Header>Made to Be Played</Header>
      <Text>The Very Best in Mobile Gaming</Text>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-left: 100px;

  @media screen and (max-width: 1024px) {
    padding-left: 30px;
    padding-top: 60px;
    font-size: 70px;
    padding-top: 0px;
    margin-right: 40px;
  }
`

export const Header = styled.h1`
  font-size: 80px;
  font-family: "Dancing Script", cursive;
  color: #272443;

  @media screen and (max-width: 1024px) {
    font-size: 70px;
  }

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`

export const Text = styled.p`
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  position: relative;
  bottom: 50px;
  color: #272443;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    position: relative;
    bottom: 30px;
  }

  @media screen and (max-width: 440px) {
    font-size: 16px;
    position: relative;
    bottom: 20px;
  }
`

export default HeaderText
