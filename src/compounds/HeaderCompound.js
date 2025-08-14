import React from "react"
import styled from "styled-components"
import HeaderLogo from "../components/Header/HeaderLogo"
// import HeaderNavbar from '../components/Header/HeaderNavbar';
import HeaderText from "../components/Header/HeaderText"
import HeaderApps from "../components/Header/HeaderApps"

function HeaderCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderLogo />
        {/* <HeaderNavbar /> */}
      </HeaderWrapper>
      <HeaderText />
      <HeaderApps />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background-image: url("./img/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;

  @media screen and (max-width: 1024px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`

export default HeaderCompound
