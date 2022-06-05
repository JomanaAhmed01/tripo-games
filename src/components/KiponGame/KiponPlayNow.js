import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Quicksand:wght@300&family=Roboto:wght@300&display=swap');
</style>

function KiponPlayNow() {
    return (
        <Wrapper>
            <Header>Play Now</Header>

            <IconsWrapper>
                <Icon src='./img/app-store.png' />
                <Icon src='./img/google-play.png' />
            </IconsWrapper>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  background-color: #FFFFFF;
  width: 568px;
  height: 221px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-left: auto;
  margin-right: auto; 

  @media screen and (max-width: 630px) {
    width: 90%;
  }
`

export const Header = styled.p`
  color: #272443;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
  text-align: center;
  padding-top: 30px;

  @media screen and (max-width: 630px) {
    font-size: 40px;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -10px;

  @media screen and (max-width: 630px) {
    width: 50%;
    margin-top: 0px;
  }
`

export const Icon = styled.img`
  width: 135px;
  height: 46px;

  @media screen and (max-width: 630px) {
    margin-left: 10px;
  }
`

export default KiponPlayNow;