import React from "react"
import styled from "styled-components"
import HeaderLogo from "../Header/HeaderLogo"

function ImmersiveGaming() {
  return (
    <Wrapper>
      <HeaderLogo />
      <Text>An Immersive Gaming Experience</Text>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
`

export const Text = styled.p`
  color: #272443;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  width: 100%;
  text-align: center;
`

export default ImmersiveGaming
