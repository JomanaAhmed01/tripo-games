import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function AboutDesc() {
    return (
        <Wrapper>
          <HeaderText>We Are Tripo</HeaderText>
          <Header>We're creating the best in interactive entertainment by making games that change the way people have fun.</Header>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  margin-left: 100px;
  margin-top: 80px;
`

export const HeaderText = styled.p`
  color: #272443;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  width: 770px;
`

export const Header = styled.p`
  color: #272443;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
  width: 770px;
`

export default AboutDesc;