import React from 'react';
import { useHistory } from 'react-router-dom'
import { useState } from "react"
import styled from "styled-components"
import { Menu } from '@styled-icons/feather/Menu'
import { Close } from '@styled-icons/ionicons-outline/Close'

function HeaderNavbar() {

  const [showGamesMenu, setShowGamesMenu] = useState(false)
  const [showGamesMenuResponsive, setShowGamesMenuResponsive] = useState(false)

  const history = useHistory()

  return (
    <Wrapper>
      <Items>
        <ItemOne onClick={() => history.push('/')}>
          <TextOne>Home</TextOne>
        </ItemOne>

        <ItemTwo onMouseOver={() => setShowGamesMenu(true)} onMouseOut={() => setShowGamesMenu(false)}>
          <TextTwo>Games</TextTwo>
          {showGamesMenu ? (
            <GamesWrapper>
              <Game onClick={() => history.push('/KiponGameCompound')}>
                <GameName>Kipon</GameName>
              </Game>
              <Game onClick={() => history.push('/RobotrixGameCompound')}>
                <GameName>Robotrix</GameName>
              </Game>
              <Game onClick={() => history.push('/TreasureBoxGameCompound')}>
                <GameName>Treasure Box</GameName>
              </Game>
            </GamesWrapper>
          ) : (
            null
          )}
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

      {showGamesMenuResponsive ? (
        <MenuWrapper>
          <CloseIcon onClick={() => setShowGamesMenuResponsive(false)} />
          <MenuItemsWrapper>
            <MenuItem onClick={() => history.push('/')}>Home</MenuItem>
            <MenuItem>Games</MenuItem>
            <MenuItem onClick={() => history.push('/CareersCompound')}>Careers</MenuItem>
            <MenuItem onClick={() => history.push('/AboutPageCompound')}>About</MenuItem>
            <MenuItem onClick={() => history.push('/ContactCompound')}>Contact</MenuItem>
          </MenuItemsWrapper>
        </MenuWrapper>
      ) : (
        <>
          <MenuIcon onClick={() => setShowGamesMenuResponsive(true)} />
        </>
      )}
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
  background-color: #FFFFFF;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  margin-top: 21px;
`

export const Game = styled.div`
  width: 100%;
  text-align: center;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #DA392B;
    color: #FFFFFF;
  }
`

export const GameName = styled.p`
  
`

export const ItemThree = styled.div`
  
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
  width: 104px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: -1px;
  background-color: #DA392B;
  cursor: pointer;
  transition: 0.3s;
  border-bottom-left-radius: 10px;
`

export const TextTwo = styled.p`
  text-align: center;
  color: #272443;
  font-size: 16px;
  padding-top: 2px;
`

export const TextThree = styled.p`
  text-align: center;
  color: #272443;
  font-size: 16px;
  width: 104px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: -1px;
  background-color: #FFFFFF;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #DA392B;
    transition-duration: 0.5s;
    color: #FFFFFF;
  }
`

export const TextFour = styled.p`
  text-align: center;
  color: #272443;
  font-size: 16px;
  width: 104px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: -1px;
  background-color: #FFFFFF;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #DA392B;
    transition-duration: 0.5s;
    color: #FFFFFF;
  }
`
export const TextFive = styled.p`
  text-align: center;
  color: #272443;
  font-size: 16px;
  width: 104px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: -1px;
  background-color: #FFFFFF;
  cursor: pointer;
  transition: 0.3s;
  border-bottom-right-radius: 10px;

  :hover {
    background-color: #DA392B;
    transition-duration: 0.5s;
    color: #FFFFFF;
  }
`

export const MenuWrapper = styled.div`
  background-color: #FFFFFF;
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 100;

  @media screen and (max-width: 470px) {
    width: 170px;
  }
`

export const MenuItemsWrapper = styled.div`
  margin-top: -20px;
`

export const MenuItem = styled.p`
  color: #272443;
  font-size: 20px;
  padding-bottom: 10px;
  text-align: center;

  :hover {
    color: #DA392B;
  }

  @media screen and (max-width: 470px) {
    font-size: 18px;
  }
`

export const CloseIcon = styled(Close)`
  width: 40px;
  height: 40px;
  margin-right: -130px;
  padding-top: 10px;

  @media screen and (max-width: 470px) {
    width: 30px;
    height: 30px;
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