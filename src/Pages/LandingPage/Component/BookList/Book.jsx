import React from 'react';
import styled from 'styled-components';
import { flexCenter, theme } from '../../../../Styles/CommonStyle';

const Book = ({ books }) => {
  return (
    <BookList>
      {[...books].map((book) => {
        if (book.id < 12) {
          return (
            <FadeLeftBook key={book.id}>
              <img data-aos="fade-left" src={book.image_url} alt="책" />
            </FadeLeftBook>
          );
        }
        if (book.id > 41) {
          return '';
        } else {
          return (
            <AfterFadeLeftBook key={book.id}>
              <img data-aos="fade-left" src={book.image_url} alt="책" />
            </AfterFadeLeftBook>
          );
        }
      })}
    </BookList>
  );
};

export default Book;

const BookList = styled.div`
  ${flexCenter}
  position:relative;
  bottom: 50px;
  flex-wrap: wrap;
`;

const AfterFadeLeftBook = styled.div`
  width: 115px;
  height: 160px;
  margin: 10px;
`;

const FadeLeftBook = styled.div`
  width: 115px;
  height: 160px;
  margin: 10px;
  opacity: 0.5;
`;
