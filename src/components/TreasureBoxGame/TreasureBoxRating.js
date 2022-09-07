import React from 'react';
import styled from "styled-components"
import { reviews } from '../../Data/reviews'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Quicksand:wght@300&family=Roboto:wght@300&display=swap');
</style>

function TreasureBoxRating() {
  return (
    <Wrapper>
      <RatingWrapper>
        <ImageWrapper><Image src='./img/rating.png' /></ImageWrapper>
        <Header>Reviews</Header>
      </RatingWrapper>

      <ReviewsWrapper>
        {reviews.map((item) =>
        (
          <TextWrapper key={item.id}>
            <ReviewText>{item.review}</ReviewText>
            <ReviewAuthor>{item.writer}</ReviewAuthor>
          </TextWrapper>
        )
        )}
      </ReviewsWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 100px;
  padding-bottom: 100px;
  width: 90%;

  @media screen and (max-width: 1070px) {
    padding-left: 0px;
  }
`

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;

  @media screen and (max-width: 1070px) {
    flex-direction: column-reverse;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
  }
`

export const ImageWrapper = styled.div`
  
`

export const Image = styled.img`
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const Header = styled.p`
  color: #272443;
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
`

export const ReviewsWrapper = styled.div`
  border: 1px solid #272443;
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1070px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: transparent;
    width: 100%;
  }
`

export const TextWrapper = styled.div`
  border-left: 1px solid #272443;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 380px;
  height: 357px;

  @media screen and (max-width: 1024px) {
    border-bottom: 1px solid #272443;
    border-left: transparent;
    width: 100%;
  }
`

export const ReviewText = styled.p`
  width: 250px;
  color: #272443;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    width: 80%;
    font-size: 25px;
    text-align: center;
  }
`

export const ReviewAuthor = styled.p`
  color: #272443;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 21px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    font-size: 21px;
  }
`

export default TreasureBoxRating;