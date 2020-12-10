import React from 'react';
import styled from 'styled-components';
import { flexCenter, theme } from '../../../../Styles/CommonStyle';

const AudioBookCard = () => {
  return (
    <BookCard data-aos="zoom-in">
      <MainCard>
        <img src="https://d3udu241ivsax2.cloudfront.net/common/images/company/brand/millieBookCard1Bg_20200210.png" alt="오디오북" />
      </MainCard>
      <SubCard>
        <img src="https://d3udu241ivsax2.cloudfront.net/common/images/company/brand/millieBookCard1Img.png" alt="연예인" />
      </SubCard>
      <ThirdCard>
        <img src="https://www.millie.co.kr/company/assets/millieBookCard1Btn.svg" alt="들어보기" />
      </ThirdCard>
    </BookCard>
  );
};

export default AudioBookCard;

const BookCard = styled.div`
  position: relative;
  width: 390px;
  height: 800px;
`;

const MainCard = styled.div`
  position: absolute;
`;

const SubCard = styled.div`
  position: absolute;
  bottom: 25%;
  width: 200px;
  height: 300px;
`;

const ThirdCard = styled.div`
  position: absolute;
  left: 25%;
  bottom: 25%;
`;
