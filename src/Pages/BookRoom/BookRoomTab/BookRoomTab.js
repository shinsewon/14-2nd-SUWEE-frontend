import { useState, useEffect, Profiler } from 'react';
import React, { Component } from 'react';
import { Data } from './bookroomData';
import PickedBooks from './PickedBooks';
import Statistic from './Statistic';
import styled from 'styled-components';

const BookRoomTab = () => {
  const [activeBookRoomTab, setActiveBookRoomTab] = useState(1);

  function clickTabHandler(activeBookRoomTab) {
    setActiveBookRoomTab(activeBookRoomTab);
  }

  const mapper = {
    1: <PickedBooks />,
    2: <Statistic />,
  };

  return (
    <BookRoomTabContainer>
      <BookRoomPart>
        {Data.TAB_DATA.map((item, idx) => {
          return (
            <li key={item.id} onClick={() => clickTabHandler(idx + 1)}>
              {item.name}
            </li>
          );
        })}
      </BookRoomPart>
      {mapper[activeBookRoomTab]}
    </BookRoomTabContainer>
  );
};

const BookRoomTabContainer = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const BookRoomPart = styled.ul`
  width: 200px;
  ${({ theme }) => theme.flexCenter}
  background-color: white;
  > li {
    width: 100px;
    height: 30px;
    padding: 0 20px;
    margin-left: 5px;
    line-height: 30px;
    color: #212423;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default BookRoomTab;
