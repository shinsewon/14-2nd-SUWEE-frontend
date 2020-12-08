import { useState, useEffect, Profiler } from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';
import { BOOKROOM_STATISTIC_API } from '../../../config';

const Statistic = () => {
  const [statistic, setStatistic] = useState(0);

  useEffect(() => {
    fetch(BOOKROOM_STATISTIC_API)
      .then((res) => res.json())
      .then((res) => {
        // headers: { authorization: localStorage.getItem('token') },
        setStatistic(res.data);
      })
      .catch((err) => console.log('Catched errors!!', err));
  }, []);

  return (
    <StatisticContainer>
      <Layout>
        <Title>12월</Title>
        <Grouping>
          <Record>{statistic.total_book_count}권</Record>
          <Record>독서시간 : {statistic.total_read_time}</Record>
        </Grouping>
        <RecommendBook>
          <Author>Suwee의 추천 도서</Author>
          <Item>
            <img
              src={
                statistic.recommand_book && statistic.recommand_book.image_url
              }
              alt='Background-Picture'
            />
            <Author>
              {statistic.recommand_book && statistic.recommand_book.title}
            </Author>
            <Author>
              {statistic.recommand_book && statistic.recommand_book.author}
            </Author>
          </Item>
        </RecommendBook>
      </Layout>
    </StatisticContainer>
  );
};

const StatisticContainer = styled.div`
  width: 100%;
  height: 900px;
  border-radius: 20px;
  border: 1px solid lightgray;
  background-color: white;
  padding: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = styled.div`
  width: 800px;
  height: 800px;
  display: flex;
  border: 1px solid lightgray;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ede7f6;
`;
const Grouping = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid blue; */
`;

const Record = styled.div`
  width: 280px;
  height: 190px;
  /* border: 1px solid saddlebrown; */
  border-radius: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #222831;
`;
const Item = styled.div`
  /* width: 100%; */
  height: 265px;
  margin-top: 25px;
  margin-right: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  img {
    width: 145px;
    object-fit: contain;
    height: 214px;
  }
`;

const Title = styled.div`
  /* width: 145px; */
  /* height: 20px; */
  font-size: 36px;
  font-weight: 700;
  margin-top: 10px;
  padding: 30px 0;
  color: #222831;
`;
const Author = styled.div`
  /* width: 145px; */
  height: 20px;
  font-size: 12px;
  margin-top: 8px;
  color: #909090;
`;

const RecommendBook = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid palegreen; */
  border-radius: 20px;
  margin-top: 15px;
  background-color: white;
`;

export default Statistic;
