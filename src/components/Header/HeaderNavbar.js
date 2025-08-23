import React from 'react';
import { useHistory } from 'react-router-dom'
import { useState } from "react"
import styled from "styled-components"
import { Menu } from '@styled-icons/feather/Menu'
import { Close } from '@styled-icons/ionicons-outline/Close'

function HeaderNavbar() {

  const [showGamesMenu, setShowGamesMenu] = useState(false)
  const [showGamesMenuResponsive, setShowGamesMenuResponsive] = useState(false)
  const [showMenuGames, setShowMenuGames] = useState(false)

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
              <Game onClick={() => history.push('/')}>
                <GameName>Kipon</GameName>
              </Game>
              <Game onClick={() => history.push('/')}>
                <GameName>Robotrix</GameName>
              </Game>
              <Game onClick={() => history.push('/')}>
                <GameName>Treasure Box</GameName>
              </Game>
            </GamesWrapper>
          ) : (
            null
          )}
        </ItemTwo>

        <ItemThree onClick={() => history.push('/')}>
          <TextThree>Careers</TextThree>
        </ItemThree>


        <ItemFour onClick={() => history.push('/')}>
          <TextFour>About</TextFour>
        </ItemFour>

        <ItemFive onClick={() => history.push('/')}>
          <TextFive>Contact</TextFive>
        </ItemFive>
      </Items>

      {showGamesMenuResponsive && (
        <>
          <Overlay onClick={() => setShowGamesMenuResponsive(false)} />
          <MenuWrapper>
            <CloseIcon onClick={() => setShowGamesMenuResponsive(false)} />
            <MenuItemsWrapper>
              <MenuItem onClick={() => { setShowMenuGames(false); history.push('/') }}>Home</MenuItem>
              <MenuItem onClick={() => setShowMenuGames(true)}>Games</MenuItem>
              <MenuItem onClick={() => { setShowMenuGames(false); history.push('/') }}>Careers</MenuItem>
              <MenuItem onClick={() => { setShowMenuGames(false); history.push('/') }}>About</MenuItem>
              <MenuItem onClick={() => { setShowMenuGames(false); history.push('/') }}>Contact</MenuItem>
            </MenuItemsWrapper>
          </MenuWrapper>
          {showMenuGames && (
            <>
              <GamesOverlay onClick={() => setShowMenuGames(false)} />
              <GamesMenuWrapper>
                <GamesCloseIcon onClick={() => setShowMenuGames(false)} />
                <GamesMenuItemsWrapper>
                  <GamesMenuTitle>Games</GamesMenuTitle>
                  <GamesMenuItem onClick={() => { setShowMenuGames(false); setShowGamesMenuResponsive(false); history.push('/') }}>Kipon</GamesMenuItem>
                  <GamesMenuItem onClick={() => { setShowMenuGames(false); setShowGamesMenuResponsive(false); history.push('/') }}>Robotrix</GamesMenuItem>
                  <GamesMenuItem onClick={() => { setShowMenuGames(false); setShowGamesMenuResponsive(false); history.push('/') }}>Treasure Box</GamesMenuItem>
                </GamesMenuItemsWrapper>
              </GamesMenuWrapper>
            </>
          )}
        </>
      )}
      {!showGamesMenuResponsive && (
        <MenuIcon onClick={() => setShowGamesMenuResponsive(true)} />
      )}
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  @media screen and (max-width: 768px) {
    background-color: #FFFFFF;
    margin-right: 30px;
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
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
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
  font-family: Arial, Helvetica, sans-serif;
`

export const TextTwo = styled.p`
  text-align: center;
  color: #272443;
  font-size: 16px;
  padding-top: 2px;
  font-family: Arial, Helvetica, sans-serif;
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
  font-family: Arial, Helvetica, sans-serif;
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
  font-family: Arial, Helvetica, sans-serif;
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
  font-family: Arial, Helvetica, sans-serif;

  :hover {
    background-color: #DA392B;
    transition-duration: 0.5s;
    color: #FFFFFF;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  z-index: 99;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFFFFF;
  width: 70vw;
  max-width: 240px;
  min-width: 160px;
  min-height: 220px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.3);
  z-index: 100;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const CloseIcon = styled(Close)`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  z-index: 101;
  @media screen and (max-width: 470px) {
    width: 22px;
    height: 22px;
  }
`;

export const MenuItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin: 24px 0 24px 0;
`;

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

export const MenuGamesWrapper = styled.div`
  
`

export const MenuGameName = styled.p`
  color: #272443;
  font-size: 18px;
  padding-bottom: 10px;
  text-align: center;

  :hover {
    color: #DA392B;
  }

  @media screen and (max-width: 470px) {
    font-size: 16px;
  }
`

export const CloseIconGamesMenu = styled(Close)`
  width: 30px;
  height: 30px;
  position: relative;
  left: 95px;

  @media screen and (max-width: 470px) {
    width: 20px;
    height: 20px;
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
`;

// Add missing styled components for the games modal
export const GamesOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  z-index: 110;
`;

export const GamesMenuWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 65vw;
  max-width: 220px;
  min-width: 140px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.4);
  z-index: 120;
`;

export const GamesCloseIcon = styled(Close)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 121;
`;

export const GamesMenuItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 36px 0 24px 0;
`;

export const GamesMenuTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #272443;
  margin-bottom: 10px;
`;

export const GamesMenuItem = styled.div`
  color: #272443;
  font-size: 18px;
  padding: 8px 0;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  &:hover {
    background: #DA392B;
    color: #fff;
  }
`;

export default HeaderNavbar;