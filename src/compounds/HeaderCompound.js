import React from 'react';
import styled from "styled-components"
import HeaderLogo from '../components/Header/HeaderLogo';
import HeaderNavbar from '../components/Header/HeaderNavbar';
import HeaderText from '../components/Header/HeaderText';
import img from '../img/bg.jpg'

function HeaderCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderLogo />
        <HeaderNavbar />
      </HeaderWrapper>
      <HeaderText />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  border: 3px solid red;
  background-image: url(${img});
`

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

export default HeaderCompound;