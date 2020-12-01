import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { BOOKLIST } from '../../../config';

const NewBook = () => {
  const [newBooks, setNewBook] = useState([]);
  const [categoryButton, setCategoryButton] = useState(1);

  const history = useHistory();

  // const handleClick = (selected) => {
  //   history.push(`/detail/${selected.id}`);
  // };

  const handleClick = ({ id }) => history.push(`/detail/${id}`);

  useEffect(() => {
    fetch(BOOKLIST)
      .then((res) => res.json())
      .then((res) => {
        setNewBook(res.oneMonthBook);
      })
      .catch((err) => console.log('Catched errors!!', err));
  }, []);

  return (
    <Slide width='1280px'>
      <Category>한 달 이내에 출간된 책</Category>
      <SlideWrapper>
        {newBooks.map((tag) => {
          return (
            <Item key={tag.id} onClick={() => handleClick(tag)}>
              <img src={tag.image} alt='책' />
              <Title>{tag.title}</Title>
              <Author>{tag.author}</Author>
            </Item>
          );
        })}
      </SlideWrapper>
    </Slide>
  );
};

const Slide = styled.div`
  width: ${(props) => props.width};
  height: 370px;
  margin-top: 50px;
`;

const Category = styled.div`
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 297px;
  padding: 0px 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  overflow-x: auto;
  &::-webkit-scrollbar {
    visibility: hidden;
  }
`;
const Item = styled.div`
  height: 265px;
  margin-right: 15px;
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

export default NewBook;
