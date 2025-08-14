import React from "react"
import styled from "styled-components"
import HeaderLogo from "../Header/HeaderLogo"
// import HeaderNavbar from "../Header/HeaderNavbar"

function AboutHeader() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderLogo />
        {/* <HeaderNavbar /> */}
      </HeaderWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div``

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;

  @media screen and (max-width: 1024px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export default AboutHeader
