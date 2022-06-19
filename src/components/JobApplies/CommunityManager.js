import React from 'react';
import styled from "styled-components";
import HeaderLogo from '../Header/HeaderLogo'
import HeaderNavbar from '../Header/HeaderNavbar'
import FooterCompound from '../../compounds/FooterCompound'
<style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function CommunityManager() {
    return (
        <Wrapper>
            <HeaderWrapper>
                <HeaderLogo />
                <HeaderNavbar />
            </HeaderWrapper>

            <CommManager>
                <HeaderText>Careers</HeaderText>
                <Header>Community Manager</Header>
                <Location>Location: San Francisco</Location>
                <Employ>Employment Type: Contract</Employ>
                <Button>Apply Now</Button>
            </CommManager>

            <DescWrapper>
                <TextWrapperOne>
                    <TextHeaderOne>What You’ll Do</TextHeaderOne>
                    <TextOne>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</TextOne>
                    <TextOne>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are. </TextOne>
                    <TextOne>At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like to benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers. To keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!</TextOne>
                </TextWrapperOne>

                <TextWrapperTwo>
                    <TextHeaderTwo>Who You Are</TextHeaderTwo>
                    <TextTwo>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</TextTwo>
                    <TextTwo>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are. </TextTwo>
                    <TextTwo>At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like to benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers. To keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!</TextTwo>
                </TextWrapperTwo>
            </DescWrapper>
            
            <FooterCompound />
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  background-image: url('./img/community-manager-bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 875px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;

  @media screen and (max-width: 1024px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const CommManager = styled.div`
  padding-left: 100px;
  padding-top: 70px;

  @media screen and (max-width: 1024px) {
    padding-left: 30px;
  }
`

export const HeaderText = styled.p`
  color: #FFFFFF;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;

  @media screen and (max-width: 610px) {
    font-size: 18px;
  }
`

export const Header = styled.p`
  color: #FFFFFF;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
  margin-top: 0px;

  @media screen and (max-width: 610px) {
    font-size: 35px;
  }
`

export const Location = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;

  @media screen and (max-width: 610px) {
    font-size: 16px;
  }
`

export const Employ = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 60px;

  @media screen and (max-width: 610px) {
    font-size: 16px;
  }
`

export const Button = styled.a`
  background-color: #FCFF72;
  color: #272443;
  font-size: 16px;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: #FFFFFF;
  }

  @media screen and (max-width: 610px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`

export const DescWrapper = styled.div`
  background: linear-gradient(90deg, #DA392B 50%, #FFFFFF 50%);
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    background: none;
  }
`

export const TextWrapperOne = styled.div`
  @media screen and (max-width: 1024px) {
    width: 100%;
    background-color: #DA392B;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const TextHeaderOne = styled.p`
  color: #FFFFFF;
  font-size: 34px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  padding-top: 120px;
`

export const TextOne = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  line-height: 30px;
  width: 397px;

  @media screen and (max-width: 1024px) {
    width: 70%;
  }
`

export const TextWrapperTwo = styled.div`
  @media screen and (max-width: 1024px) {
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const TextHeaderTwo = styled.p`
  color: #272443;
  font-size: 34px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  padding-top: 120px;
`

export const TextTwo = styled.p`
  color: #272443;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  line-height: 30px;
  width: 397px;

  @media screen and (max-width: 1024px) {
    width: 70%;
  }
`

export default CommunityManager;