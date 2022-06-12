import React from 'react';
import styled from "styled-components"

function AboutCreatingGame() {
    return (
        <>
            <Wrapper>
                <BgWrapper />
                <TextWrapper>
                    <TextOne>I'm a paragraph.
                        Click here to add your own text and edit me.
                        It’s easy.
                        Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        Feel free to drag and drop me anywhere you like on your page.
                        I’m a great place for you to tell a story and let your users know a little more about you.
                    </TextOne>

                    <TextTwo>This is a great space to write a long text about your company and your services.
                        You can use this space to go into a little more detail about your company.
                        Talk about your team and what services you provide.
                        Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
                        Make your company stand out and show your visitors who you are.
                    </TextTwo>
                </TextWrapper>
            </Wrapper>

            <ResponsiveDesign>
                <Image src='./img/about-img.png' />
                <ResponsiveTextWrapper>
                    <TextOne>I'm a paragraph.
                        Click here to add your own text and edit me.
                        It’s easy.
                        Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        Feel free to drag and drop me anywhere you like on your page.
                        I’m a great place for you to tell a story and let your users know a little more about you.
                    </TextOne>

                    <TextTwo>This is a great space to write a long text about your company and your services.
                        You can use this space to go into a little more detail about your company.
                        Talk about your team and what services you provide.
                        Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
                        Make your company stand out and show your visitors who you are.
                    </TextTwo>
                </ResponsiveTextWrapper>
            </ResponsiveDesign>
        </>
    );
}

export const Wrapper = styled.div`
  background-image: url('./img/about-img.png');
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row-reverse;

  @media screen and (max-width: 920px) {
    display: none;
  }
`

export const BgWrapper = styled.div`
  
`

export const TextWrapper = styled.div`
  background-color: #DA392B;
  height: 590px;
  width: 60%;
`

export const TextOne = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  width: 467px;
  line-height: 27px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;

  @media screen and (max-width: 920px) {
    padding-top: 110px;
    margin-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
    width: 80%;
  }
`

export const TextTwo = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  width: 465px;
  line-height: 27px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 920px) {
    padding-top: 110px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 110px;
    width: 80%;
  }
`

export const ResponsiveDesign = styled.div`
  display: none;

  @media screen and (max-width: 920px) {
    display: initial;
  }
`

export const Image = styled.img`
  width: 100%;
`

export const ResponsiveTextWrapper = styled.div`
  background-color: #DA392B;
`

export default AboutCreatingGame;