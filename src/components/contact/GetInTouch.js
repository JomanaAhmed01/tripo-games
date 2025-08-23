import React from "react"
import styled from "styled-components"

function GetInTouch() {
  return (
    <Wrapper>
      <Header>Get In Touch</Header>
      <Text>I'm a paragraph. Click here to add your own text and edit me.</Text>

      <FormsWrapper>
        <FirstRow>
          <LabelFormWrapper>
            <FormLabel>First Name *</FormLabel>
            <FirstNameForm placeholder="First Name" type="text" />
          </LabelFormWrapper>

          <LabelFormWrapper>
            <FormLabel>Last Name *</FormLabel>
            <LastNameForm placeholder="Last Name" type="text" />
          </LabelFormWrapper>
        </FirstRow>

        <SecondRow>
          <LabelFormWrapper>
            <FormLabel>Email *</FormLabel>
            <EmailForm placeholder="Email" type="text" />
          </LabelFormWrapper>
        </SecondRow>

        <ThirdRow>
          <LabelFormWrapper>
            <FormLabel>Leave us a message...</FormLabel>
            <MessageForm placeholder="Leave us a message..." type="textarea" />
          </LabelFormWrapper>
        </ThirdRow>

        <FourthRow>
          <SubmitButton>Submit</SubmitButton>
        </FourthRow>
      </FormsWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  width: 418px;
  background-color: #ffffff;
  position: relative;
  bottom: 250px;
  padding-left: 30px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px;
  border: 1px solid grey;

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 630px) {
    width: 75%;
  }
`

export const Header = styled.p`
  color: #272443;
  font-size: 34px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`

export const Text = styled.p`
  color: #272443;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 273px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

export const FormsWrapper = styled.div`
  max-width: 400px;
`

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: 530px) {
    flex-direction: column;
  }
`

export const SecondRow = styled.div`
  margin-bottom: 20px;
`

export const ThirdRow = styled.div`
  margin-bottom: 20px;
`

export const FourthRow = styled.div`
  margin-bottom: 40px;
`

export const LabelFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormLabel = styled.label`
  margin-bottom: 10px;
  color: #272443;
`

export const FirstNameForm = styled.input`
  width: 165px;
  height: 59px;
  background-color: #ffffff;
  border-radius: 10px;
  border-width: 0.5px;
  border-color: #000000;
  padding-left: 15px;
  font-size: 18px;
  color: #272443;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 530px) {
    width: 90%;
    margin-bottom: 20px;
  }
`

export const LastNameForm = styled.input`
  width: 165px;
  height: 59px;
  background-color: #ffffff;
  border-radius: 10px;
  border-width: 0.5px;
  border-color: #000000;
  padding-left: 15px;
  font-size: 18px;
  color: #272443;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 530px) {
    width: 90%;
  }
`

export const EmailForm = styled.input`
  width: 380px;
  height: 59px;
  background-color: #ffffff;
  border-radius: 10px;
  border-width: 0.5px;
  border-color: #000000;
  padding-left: 15px;
  font-size: 18px;
  color: #272443;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const MessageForm = styled.textarea`
  width: 380px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  border-width: 0.5px;
  border-color: #000000;
  padding-left: 15px;
  padding-top: 10px;
  font-size: 18px;
  color: #272443;
  resize: none;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const SubmitButton = styled.button`
  background-color: #272443;
  color: #ffffff;
  width: 400px;
  height: 60px;
  border-radius: 10px;
  border-color: transparent;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  cursor: pointer !important;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #da392b;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

export default GetInTouch
