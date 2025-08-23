import React from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Quicksand:wght@300&family=Roboto:wght@300&display=swap');
</style>

function HeaderLogo() {

  const history = useHistory()

  return (
    <Wrapper onClick={() => history.push('/')}>
      <Link>Tripo Games</Link>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  background-color: #DA392B;
  width: 166px;
  height: 59px;
  display: flex;
  justify-content: center;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    margin-left: 30px;
  }

  @media screen and (max-width: 470px) {
    margin-left: 10px;
  }
`

export const Link = styled.a`
  font-family: 'Dancing Script', cursive;
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  padding-top: 12px;
`

export default HeaderLogo;