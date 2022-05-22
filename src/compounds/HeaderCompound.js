import React from 'react';
import styled from "styled-components"
import HeaderLogo from '../components/HeaderLogo';
import HeaderNavbar from '../components/HeaderNavbar';
import img from '../img/bg.jpg'

function HeaderCompound() {
  return (
    <Wrapper>
      <HeaderLogo />
      <HeaderNavbar />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  border: 3px solid red;
  background-image: url(${img});
  display: flex;
  justify-content: space-around;
`

export default HeaderCompound;