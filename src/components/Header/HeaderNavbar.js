import React from 'react';
import styled from "styled-components"
import { Menu } from '@styled-icons/feather/Menu'

function HeaderNavbar() {
    return (
        <Wrapper>
            <Items>
                <ItemOne>
                    <TextOne>Home</TextOne>
                </ItemOne>

                <ItemTwo>
                    <TextTwo>Games</TextTwo>
                </ItemTwo>

                <ItemThree>
                    <TextThree>Careers</TextThree>
                </ItemThree>

                <ItemFour>
                    <TextFour>About</TextFour>
                </ItemFour>

                <ItemFive>
                    <TextFive>Contact</TextFive>
                </ItemFive>
            </Items>
            <MenuIcon />
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  /* border: 3px solid purple; */
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  @media screen and (max-width: 768px) {
    background-color: #FFFFFF;
  }
`

export const Items = styled.div`
  /* border: 3px solid purple; */
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ItemOne = styled.div`
  /* border: 3px solid yellow; */
  width: 104px;
  height: 60px;
  background-color: #DA392B;
  border-bottom-left-radius: 12px;
  cursor: pointer;
`

export const ItemTwo = styled.div`
/*  border: 3px solid yellow;
*/  width: 104px;
  height: 60px;
  background-color: #FFFFFF;
  cursor: pointer;
`

export const ItemThree = styled.div`
/*  border: 3px solid yellow;
*/  width: 104px;
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
/*  border: 3px solid yellow;
*/  width: 104px;
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
/*  border: 3px solid yellow;
*/  width: 104px;
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
  /* border: 3px solid green; */
  text-align: center;
  color: #FFFFFF;
  font-size: 16px;
`

export const TextTwo = styled.p`
  /* border: 3px solid green; */
  text-align: center;
  color: #272443;
  font-size: 16px;
`

export const TextThree = styled.p`
  /* border: 3px solid green; */
  text-align: center;
  color: #272443;
  font-size: 16px;

  :hover {
    color: #FFFFFF;
  }
`

export const TextFour = styled.p`
  /* border: 3px solid green; */
  text-align: center;
  color: #272443;
  font-size: 16px;

  :hover {
    color: #FFFFFF;
  }
`
export const TextFive = styled.p`
  /* border: 3px solid green; */
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