import React from 'react';
import styled from 'styled-components';

const Book = ({ img, title, subTitle }) => {
  return (
    <BookContainer>
      <BookImgBox img={img}>
        <img src={img} alt="책" />
      </BookImgBox>
      <TextBox title={title} subTitle={subTitle}>
        <div className="title">sdsdsd{title}</div>
        <div className="subtitle">{subTitle}</div>
      </TextBox>
    </BookContainer>
  );
};

export default Book;

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 160px;
  height: 260px;
  margin: 30px 30px;
  border: 1px solid red;
`;

const BookImgBox = styled.div`
  height: 85%;
  border: 1px solid blue;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 15%;

  .title {
    font-size: 14px;
    font-weight: 700;
    color: #444444;
  }
  .subtitle {
    margin-top: 3px;
    font-size: 12px;
    color: #777777;
    line-height: 15.6px;
  }
`;
