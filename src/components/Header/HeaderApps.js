import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

function HeaderApps() {
  const history = useHistory();
  return (
    <Wrapper>
      <ImageOne src='./img/app-store.png' onClick={() => history.push('/')} style={{cursor: 'pointer'}} />
      <ImageTwo src='./img/google-play.png' onClick={() => history.push('/')} style={{cursor: 'pointer'}} />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  padding-bottom: 190px;
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