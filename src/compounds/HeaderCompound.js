import React from 'react';
import styled from "styled-components"
import HeaderLogo from '../components/HeaderLogo';
import img from '../img/bg.jpg'

function HeaderCompound() {
  return (
    <Wrapper>
      <HeaderLogo />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  background-image: url(${img});
`

export default HeaderCompound;