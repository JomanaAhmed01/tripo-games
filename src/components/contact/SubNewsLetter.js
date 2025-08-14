import React from "react"
import styled from "styled-components"

function SubNewsLetter() {
  return (
    <Wrapper>
      <Header>Subscribe to Our Newsletter</Header>
      <EmailFormWrapper>
        <EmailLabel>Email *</EmailLabel>
        <EmailForm type="text" />
        <JoinBtn>Join</JoinBtn>
      </EmailFormWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background-color: #da392b;
  width: 388px;
  height: 210px;
  border-radius: 15px;
  padding-left: 25px;
  margin-right: 100px;
  margin-bottom: 150px;
  margin-top: 180px;

  @media screen and (max-width: 1180px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: -130px;
  }

  @media screen and (max-width: 530px) {
    width: 80%;
    height: 270px;
  }
`

export const Header = styled.p`
  color: #ffffff;
  font-size: 21px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  @media screen and (max-width: 530px) {
    font-size: 19px;
  }
`

export const EmailFormWrapper = styled.div`
  @media screen and (max-width: 530px) {
    display: flex;
    flex-direction: column;
  }
`

export const EmailLabel = styled.label`
  display: block;
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 16px;

  @media screen and (max-width: 530px) {
    font-size: 18px;
  }
`

export const EmailForm = styled.input`
  width: 238px;
  height: 59px;
  border-radius: 15px;
  border-color: transparent;
  margin-right: 20px;
  padding-left: 15px;
  font-size: 18px;

  :focus {
    outline: none;
  }

  @media screen and (max-width: 530px) {
    width: 85%;
    margin-bottom: 20px;
  }
`

export const JoinBtn = styled.button`
  background-color: #fcff72;
  border-color: transparent;
  border-radius: 10px;
  width: 79px;
  height: 60px;
  color: #272443;
  cursor: pointer !important;

  @media screen and (max-width: 530px) {
    width: 94%;
    font-size: 18px;
  }
`

export default SubNewsLetter
