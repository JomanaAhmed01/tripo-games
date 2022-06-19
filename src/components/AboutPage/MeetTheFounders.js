import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function MeetTheFounders() {
    return (
        <Wrapper>
            <Header>Meet The Founders</Header>
            <FoundersWrapper>
              <FounderInfo>
                <Image src='./img/founder-one.png' />
                <FounderName>Daisy Suarez</FounderName>
                <FounderJob>CTO</FounderJob>
              </FounderInfo>

              <FounderInfo>
                <Image src='./img/founder-two.png' />
                <FounderName>Ray Finigan</FounderName>
                <FounderJob>Senior Game Developer</FounderJob>
              </FounderInfo>

              <FounderInfo>
                <Image src='./img/founder-three.png' />
                <FounderName>Tao Deng</FounderName>
                <FounderJob>Senior Game Designer</FounderJob>
              </FounderInfo>

              <FounderInfo>
                <Image src='./img/founder-four.png' />
                <FounderName>Ben Singleton</FounderName>
                <FounderJob>Senior Game Developer</FounderJob>
              </FounderInfo>
            </FoundersWrapper>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  background-color: #272443;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`

export const Header = styled.p`
  color: #FFFFFF;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 70px;
`

export const FoundersWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  padding-bottom: 50px;
  max-width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const FounderInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }
`

export const Image = styled.img`
  border-radius: 20px;

  @media screen and (max-width: 1024px) {
    width: 280px;
  }
`

export const FounderName = styled.p`
  color: #FFFFFF;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`

export const FounderJob = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-top: -10px;
`

export default MeetTheFounders;