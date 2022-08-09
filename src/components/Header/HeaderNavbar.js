import React from 'react';
import { useHistory } from 'react-router-dom'
import styled from "styled-components"
import { Menu } from '@styled-icons/feather/Menu'

function HeaderNavbar() {

  const history = useHistory()

  return (
    <Wrapper>
      <Items>
        <ItemOne onClick={() => history.push('/')}>
          <TextOne>Home</TextOne>
        </ItemOne>

        <ItemTwo>
          <TextTwo>Games</TextTwo>
          <GamesWrapper>
            <Game>
              <GameName>Kipon</GameName>
            </Game>
            <Game>
              <GameName>Robotrix</GameName>
            </Game>
            <Game>
              <GameName>Treasure Box</GameName>
            </Game>
          </GamesWrapper>
        </ItemTwo>

        <ItemThree onClick={() => history.push('/CareersCompound')}>
          <TextThree>Careers</TextThree>
        </ItemThree>


        <ItemFour onClick={() => history.push('/AboutPageCompound')}>
          <TextFour>About</TextFour>
        </ItemFour>

        <ItemFive onClick={() => history.push('/')}>
          <TextFive>Contact</TextFive>
        </ItemFive>
      </Items>
      <MenuIcon />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  @media screen and (max-width: 768px) {
    background-color: #FFFFFF;
  }
`

export const Items = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ItemOne = styled.div`
  width: 104px;
  height: 60px;
  background-color: #DA392B;
  border-bottom-left-radius: 12px;
  cursor: pointer;
`

export const ItemTwo = styled.div`
  width: 104px;
  height: 60px;
  background-color: #FFFFFF;
  cursor: pointer;
`

export const GamesWrapper = styled.div`
  display: none;
  background-color: #FFFFFF;
  margin-top: 40px;
  border-radius: 10px;
`

export const Game = styled.div`
  width: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #DA392B;
    color: #FFFFFF;
  }
`

export const GameName = styled.p`
  
`

export const ItemThree = styled.div`
  width: 104px;
  height: 60px;
  background-color: #FFFFFF;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #DA392B;
    transition-duration: 0.5s;
  }
`

export const ItemFour = styled.div`
  width: 104px;
  height: 60px;
  background-color: #FFFFFF;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #DA392B;
    transition-duration: 0.5s;
  }
`

export const ItemFive = styled.div`
  width: 104px;
  height: 60px;
  background-color: #FFFFFF;
  border-bottom-right-radius: 12px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #DA392B;
    transition-duration: 0.5s;
  }
`

export const TextOne = styled.p`
  text-align: center;
  color: #FFFFFF;
  font-size: 16px;
`

export const TextTwo = styled.p`
  text-align: center;
  color: #272443;
  font-size: 16px;
`

export const TextThree = styled.p`
  text-align: center;
  color: #272443;
  font-size: 16px;

  :hover {
    color: #FFFFFF;
  }
`

export const TextFour = styled.p`
  text-align: center;
  color: #272443;
  font-size: 16px;

  :hover {
    color: #FFFFFF;
  }
`
export const TextFive = styled.p`
  text-align: center;
  color: #272443;
  font-size: 16px;

  :hover {
    color: #FFFFFF;
  }
`

export const MenuIcon = styled(Menu)`
  width: 40px;
  height: 40px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  color: #272443; 
  display: none;

  @media screen and (max-width: 768px) {
    display: initial;
  }
`

export default HeaderNavbar;