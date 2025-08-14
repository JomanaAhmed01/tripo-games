import React from "react"
import styled from "styled-components"

function AboutTripo() {
  return (
    <Wrapper>
      <Header>About Tripo</Header>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin-top: -100px;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`

export const Header = styled.h3`
  text-align: center;
  color: #272443;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export default AboutTripo
