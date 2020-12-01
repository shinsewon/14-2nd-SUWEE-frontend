import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsCheckBox } from 'react-icons/bs';
import { TODAYBOOK_API } from '../../../config';
import './TodaysBook.scss';

const TodaysBook = () => {
  const [todaysBook, setTodaysBook] = useState([]);

  useEffect(() => {
    fetch(TODAYBOOK_API)
      .then((res) => res.json())
      .then((res) => {
        setTodaysBook(res.todayBook);
      })
      .catch((err) => console.log('Catched errors!!', err));
  }, []);
  console.log(todaysBook[0]);
  return (
    <TodaysBookContainer>
      <div className='subject'>오늘의 책</div>
      <SectionGroup width='100%'>
        <div className='leftSide'>
          <div className='leftSideContainer'>
            <img src={todaysBook[0] && todaysBook[0].image} alt='오늘의 책' />
            <div className='leftSideText'>
              <p>{todaysBook[0] && todaysBook[0].title}</p>
              <p>{todaysBook[0] && todaysBook[0].author}</p>
            </div>
          </div>
        </div>
        <div className='righttSide'>
          <div className='rightUpSide'>
            <span>
              <BsCheckBox />
              &nbsp; "나도 이제 디지털 노마드" >{' '}
            </span>{' '}
            &nbsp;&nbsp;{' '}
            <span>
              <BsCheckBox />
              &nbsp; {todaysBook[0] && todaysBook[0].reviewContent} >
            </span>
            <span>
              <BsCheckBox />
              &nbsp; 완독할 확률 64% | 완독 예상 시간 5시간 5분 >
            </span>
          </div>
          <div className='rightDownSide'>
            <div className='userProfile'>
              <img src={todaysBook[0] && todaysBook[0].reviewerImage} alt='' />
              <div className='userInfo'>
                <Comment>
                  {todaysBook[0] && todaysBook[0].reviewerName}의 추천평
                </Comment>
                <Description>한 줄 소개말</Description>
              </div>
            </div>
            <div className='BestReview'>
              <p>{todaysBook[0] && todaysBook[0].description}</p>
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
