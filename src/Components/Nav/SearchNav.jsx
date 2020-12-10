import React from 'react';
import styled from 'styled-components';
import Book from './Book/Book';

const SearchNav = ({ bookList }) => {
  return (
    <SearchBox>
      <Wrap>
        {bookList.map((item, idx) => {
          return <Book key={idx} img={item.img} title={item.title} subTitle={item.subTitle} />;
        })}
        <Book />
      </Wrap>
    </SearchBox>
  );
};

export default SearchNav;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  border: 2px solid blue;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  border: 1px solid red;
`;
