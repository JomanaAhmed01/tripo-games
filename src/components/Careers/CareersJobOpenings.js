import React from 'react';
import styled from "styled-components"
import { jobs } from '../../Data/jobs'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function CareersJobOpenings() {
  return (
    <Wrapper>
      <Header>Job Openings</Header>
      <JobOpeningsWrapper>
        {jobs.map((item) =>
        (
          <JobOpening key={item.id}>
            <Image src={item.image} />
            <TextWrapper>
              <TextHeader>{item.title}</TextHeader>
              <TextHeaderTwo>{item.location}</TextHeaderTwo>
              <Desc>{item.Description}</Desc>
              <Button href='/CommunityManagerCompound'>{item.apply}</Button>
            </TextWrapper>
          </JobOpening>
        )
        )}
      </JobOpeningsWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #DA392B;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const Header = styled.p`
  color: #FFFFFF;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
  text-align: center;
  padding-top: 70px;
  padding-bottom: 40px;
`

export const JobOpeningsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 80px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`

export const JobOpening = styled.div`
  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 202px;
  height: 202px;
  border-radius: 20px;

  @media screen and (max-width: 1024px) {
    width: 402px;
    height: 402px;
  }

  @media screen and (max-width: 450px) {
    width: 60%;
    height: 60%;
  }
`

export const TextWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const TextHeader = styled.p`
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 21px;
  font-weight: bold;
  width: 174px;
  line-height: 30px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`

export const TextHeaderTwo = styled.p`
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-top: -15px;
  margin-bottom: 20px;
`

export const Desc = styled.p`
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  width: 195px;
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    width: 70%;
    text-align: center;
  }
`

export const Button = styled.a`
  background-color: #272443;
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 10px;
  text-decoration: none;

  :hover {
    background-color: #302d53;
  }
`

export default CareersJobOpenings;