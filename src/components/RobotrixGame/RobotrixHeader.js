import React from 'react';
import styled from "styled-components"
import HeaderLogo from '../Header/HeaderLogo'
import HeaderNavbar from '../Header/HeaderNavbar'

function RobotrixHeader() {
  return (
    <Wrapper>
      <HeaderNavWrapper>
        <HeaderLogo />
        <HeaderNavbar />
      </HeaderNavWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  padding-left: 100px;
  padding-right: 100px;

  @media screen and (max-width: 1024px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 880px) {
    background-image: url('./img/robotrix-game-bg-one.png');
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
  }
`

export const HeaderNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default RobotrixHeader;