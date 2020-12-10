import React from 'react';
import styled from 'styled-components';

const BookCard = ({ MAINIMG, SUBIMG, THIRDIMG }) => {
  return (
    <BookCardContainer data-aos="zoom-in">
      <MainCard>
        <MainCardImg src={MAINIMG} alt="책" />
      </MainCard>
      <SubCard>
        <SubCardImg src={SUBIMG} />
      </SubCard>
      <ThirdCard>
        <ThirdCardImg src={THIRDIMG} />
      </ThirdCard>
    </BookCardContainer>
  );
};

export default BookCard;

const BookCardContainer = styled.div`
  position: relative;
  width: 390px;
  height: 800px;
`;

const MainCard = styled.div`
  position: absolute;
`;

const MainCardImg = styled.img``;

const SubCard = styled.div`
  position: absolute;
  bottom: 25%;
  width: 200px;
  height: 300px;
`;
const SubCardImg = styled.img``;

const ThirdCard = styled.div`
  position: absolute;
  left: 25%;
  bottom: 25%;
`;

const ThirdCardImg = styled.img``;
