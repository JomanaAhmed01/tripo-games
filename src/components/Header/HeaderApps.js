import React from 'react';
import styled from "styled-components";

function HeaderApps() {
    return (
        <Wrapper>
            <ImageOne src='./img/download-on-the-app-store.png' />
            <ImageTwo src='./img/get-it-on-google-play.png' />
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  /* border: 3px solid purple; */
  padding-bottom: 290px;
  padding-left: 100px;
  width: 450px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    padding-left: 30px;
    width: 350px;
  }

  @media screen and (max-width: 440px) {
    width: 220px;
  }
`

export const ImageOne = styled.img`
  /* border: 3px solid purple; */
  width: 200px;
  height: 60px;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 160px;
    height: 50px;
  }

  @media screen and (max-width: 440px) {
    width: 105px;
    height: 35px;
    border-radius: 5px;
  }
`

export const ImageTwo = styled.img`
  /* border: 3px solid yellow; */
  width: 200px;
  height: 60px;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 160px;
    height: 50px;
  }

  @media screen and (max-width: 440px) {
    width: 105px;
    height: 35px;
    border-radius: 5px;
  }
`

export default HeaderApps;