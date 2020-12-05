import React from 'react';
import styled from 'styled-components';

const ChatBookCardjsx = () => {
  return (
    <BookCard data-aos="zoom-in">
      <MainCard>
        <img src="https://d3udu241ivsax2.cloudfront.net/common/images/company/brand/millieBookCard2Bg.png" alt="챗북" />
      </MainCard>
      <SubCard>
        <img src="https://d3udu241ivsax2.cloudfront.net/common/images/company/brand/millieBookCard2Img.png" alt="책북2" />
      </SubCard>
      <ThirdCard>
        <img
          src="https://trello-attachments.s3.amazonaws.com/5fc465951dfcce1dc3a95814/5fc48e535151e366256bb3ef/94a95323723359acd007408502170c9f/%EC%8B%A0%EC%84%B8%EC%9B%90_%ED%9D%91%EB%B0%B1%EB%B0%8F%EB%88%84%EB%81%BC%EC%9A%94%EC%B2%AD.png"
          alt="들어보기"
        />
      </ThirdCard>
    </BookCard>
  );
};

export default ChatBookCardjsx;

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
  right: 0%;
  bottom: 25%;
  width: 250px;
  height: 300px;
`;
