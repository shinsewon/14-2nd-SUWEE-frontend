import React, { Component } from 'react';
import styled from 'styled-components';
import { BsCheckBox } from 'react-icons/bs';
import './TodaysBook.scss';

const TodaysBook = () => {
  return (
    <TodaysBookContainer>
      <div className='subject'>오늘의 책</div>
      <SectionGroup width='100%'>
        <div className='leftSide'>
          <div className='leftSideContainer'>
            <img
              src='https://img.millie.co.kr/400x/service/cover/37778329/b7392f7b916948028fce790b1f1ce6a0.jpg'
              alt=''
            />
            <div className='leftSideText'>
              <p>참 소중한 너라서</p>
              <p>김지훈</p>
            </div>
          </div>
        </div>
        <div className='righttSide'>
          <div className='rightUpSide'>
            <span>
              <BsCheckBox />
              &nbsp; "너에게 주는 위로" >{' '}
            </span>{' '}
            &nbsp;&nbsp;{' '}
            <span>
              <BsCheckBox />
              &nbsp; 술술 읽다 보면 어느새 위로 받는 책 >
            </span>
            <span>
              <BsCheckBox />
              &nbsp; 완독할 확률 64% | 완독 예상 시간 5시간 5분 >
            </span>
          </div>
          <div className='rightDownSide'>
            <div className='userProfile'>
              <img src='./images/profile.png' alt='' />
              <div className='userInfo'>
                <Comment>ryuwisdom의 추천평</Comment>
                <Description>한 줄 소개말</Description>
              </div>
            </div>
            <div className='BestReview'>
              <p>
                "있는 그대로 참 소중한 당신에게 전하는 진심 가득한 위로의 말"
              </p>
            </div>
          </div>
        </div>
      </SectionGroup>
    </TodaysBookContainer>
  );
};

const TodaysBookContainer = styled.div`
  width: 1280px;
  height: 340px;
  max-width: 1280px;
  margin-top: 70px;
`;

const SectionGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: ${(props) => props.width};
`;

const Comment = styled.p`
  font-size: 15px;
  font-weight: 700;
`;
const Description = styled.p`
  font-size: 15px;
  font-weight: 700;
`;

export default TodaysBook;
