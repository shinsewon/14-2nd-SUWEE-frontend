import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter, Link } from 'react-router-dom';
import { COMMINGSOONBOOK_API } from '../../../config';
import { FaRegBell } from 'react-icons/fa';
import styled from 'styled-components';

const CommingSoonBook = () => {
  const [commingSoonBooks, setCommingSoonBook] = useState([]);

  const history = useHistory();

  const handleClick = () => {
    history.push(`/detail/${this.props.product.id}`);
  };

  useEffect(() => {
    fetch(COMMINGSOONBOOK_API)
      .then((res) => res.json())
      .then((res) => {
        setCommingSoonBook(res.commingSoonBook);
      })
      .catch((err) => console.log('Catched errors!!', err));
  }, []);

  return (
    <Slide width='1280px'>
      <Category>커밍순, 놓치기 아쉬운 책</Category>
      <SlideWrapper>
        {commingSoonBooks.map((tag, idx) => {
          return (
            <Item key={idx} onClick={handleClick}>
              <img src={tag.image} alt='책' />
              <Title>{tag.title}</Title>
              <Author>{tag.author}</Author>
              <Notification>
                {' '}
                <FaRegBell /> &nbsp; 알림 받기
              </Notification>
            </Item>
          );
        })}
      </SlideWrapper>
    </Slide>
  );
};

const Slide = styled.div`
  width: ${(props) => props.width};
  height: 400px;
  margin: 50px 0 100px 0;
`;

const Category = styled.div`
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 380px;
  padding: 0px 20px;
  padding-bottom: 90px;
  display: flex;
  justify-content: left;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    visibility: hidden;
  }
`;

const Item = styled.div`
  height: 265px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  position: relative;
  cursor: pointer;
  img {
    width: 125px;
    object-fit: contain;
    height: 214px;
  }
`;

const Title = styled.div`
  width: 125px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;
`;

const Author = styled.div`
  width: 125px;
  height: 20px;
  font-size: 12px;
  margin-top: 3px;
  color: #909090;
`;

const Notification = styled.div`
  margin-top: 30px;
  width: 125px;
  height: 32px;
  background-color: #ffeb60;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: absolute;
  bottom: -50px;
`;

export default CommingSoonBook;
