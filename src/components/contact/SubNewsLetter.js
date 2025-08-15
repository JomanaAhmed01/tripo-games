import React from "react"
import styled from "styled-components"

function SubNewsLetter() {
  return (
    <Wrapper>
      <Header>Subscribe to Our Newsletter</Header>
      <EmailFormWrapper>
        <EmailLabel>Email *</EmailLabel>
        <FormRow>
          <EmailForm type="text" />
          <JoinBtn>Join</JoinBtn>
        </FormRow>
      </EmailFormWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background-color: #da392b;
  width: 100%;
  max-width: 470px;
  height: 210px;
  border-radius: 15px;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 150px;
  margin-top: 180px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1180px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: -200px;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 630px) {
    width: 90%;
  }
`

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
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
  flex: 1; /* grow/shrink automatically */
  min-width: 0; /* fix flex overflow issues */
  height: 59px;
  border-radius: 15px;
  border: none;
  padding-left: 15px;
  font-size: 18px;

  :focus {
    outline: none;
  }
`

export const JoinBtn = styled.button`
  flex-shrink: 0; /* don't let it get squished */
  background-color: #fcff72;
  border: none;
  border-radius: 10px;
  width: 79px;
  height: 60px;
  color: #272443;
  cursor: pointer;
`

export default SubNewsLetter
