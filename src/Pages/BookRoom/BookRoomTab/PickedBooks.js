import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BOOKROOM_BOOKLIST_API } from '../../../config';
import { Data } from './bookroomData';

const PickedBooks = () => {
  const [pickedBooks, setPickedBooks] = useState([]);
  const [ordering, setOrdering] = useState(1);

  const history = useHistory();

  // const handleClick = () => {
  //   history.push(`/detail/${this.props.product.id}`);
  // };

  function changeSorting(id) {
    setOrdering(id);
  }

  useEffect(() => {
    fetch(`${BOOKROOM_BOOKLIST_API}?ordering=${ordering}`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then((res) => res.json())
      .then((res) => {
        setPickedBooks(res.libraryBook);
      })
      .catch((err) => console.log('Catched errors!!', err));
  }, [ordering]);

  console.log(pickedBooks && pickedBooks);
  return (
    <PickedBooksContainer>
      <Slide width='1240px'>
        <NavTab>
          <Category>{pickedBooks && pickedBooks.length}권의 책</Category>
          <SubCategory>
            <ul>
              {Data.BOOKROOM_SUBCATEGORY_DATA.map((tag) => (
                <Genre
                  key={tag.id}
                  onClick={() => changeSorting(tag.id)}
                  selected={tag.target === tag.idx ? '#222f3e' : null}>
                  {tag.name}
                </Genre>
              ))}
            </ul>
          </SubCategory>
        </NavTab>

        <SlideWrapper>
          {pickedBooks &&
            pickedBooks.map((tag, idx) => {
              return (
                <Item
                  key={idx}
                  // onClick={handleClick}
                >
                  <img src={tag.image} alt='책' />
                  <Title>{tag.title}</Title>
                  <Author>{tag.author}</Author>
                </Item>
              );
            })}
        </SlideWrapper>
      </Slide>
    </PickedBooksContainer>
  );
};

const PickedBooksContainer = styled.div`
  width: 100%;
  height: 800px;
  border-radius: 20px;
  border: 1px solid lightgray;
  background-color: white;
  padding: 20px;
  margin-top: 10px;
`;

const Slide = styled.div`
  width: ${(props) => props.width};
  height: 370px;
  margin-top: 50px;
`;

const NavTab = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Category = styled.div`
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

const SubCategory = styled.div`
  height: 60px;
  margin-right: 20px;
  align-items: center;
  font-size: 16px;
  ul {
    display: flex;
    justify-content: left;
  }
`;
const Genre = styled.div`
  width: auto;
  height: 35px;
  padding: 0px 17px;
  line-height: 35px;
  ${({ theme }) => theme.flexCenter}
  /* ${({ theme }) => console.log('확인 : ', theme.flexCenter)} */
  border: 1.5px solid #222f3e;
  border-radius: 20px;
  margin-right: 13px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#ffffff' : '#222f3e')};
  color: ${(props) => (props.selected ? '#222f3e' : '#ffffff')};
`;

const SlideWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -20px;
  /* border: 1px solid red; */
  &::-webkit-scrollbar {
    visibility: hidden;
  }
`;
const Item = styled.div`
  /* width: 100%; */
  height: 265px;
  margin: 35px 7px 0 0;
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
  width: 145px;
  /* height: 20px; */
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;
`;
const Author = styled.div`
  width: 145px;
  height: 20px;
  font-size: 12px;
  margin-top: 3px;
  color: #909090;
`;

export default PickedBooks;
