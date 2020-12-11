import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import MainImageCarousel from '../../Pages/SuweeMain/MainImageCarousel/MainImageCarousel';
import TodaysBook from '../../Pages/SuweeMain/TodaysBook/TodaysBook';
import NewBook from '../../Pages/SuweeMain/NewBook/NewBook';
import BestSeller from '../../Pages/SuweeMain/BestSeller/BestSeller';
import RecommendedBook from '../../Pages/SuweeMain/RecommendedBook/RecommendedBook';
import CommingSoonBook from '../../Pages/SuweeMain/CommingSoonBook/CommingSoonBook';
import Footer from '../../Components/Footer/Footer';
import SeachNav from '../../Components/Nav/SearchNav';

//목데이터
const BOOK_LIST = 'http://localhost:3000/data/BOOK_LIST_MOCK_DATA.json';

function SuweeMain() {
  const location = useLocation();
  const history = useHistory();
  const [Token, setToken] = useState('');
  const [bookList, setBookList] = useState([]);
  const [searchEnter, setSearchEnter] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  console.log('location.state : ', location.state);

  useEffect(() => {
    fetch(`${BOOK_LIST}`)
      .then((res) => res.json())
      .then((res) => setBookList(res));
  }, []);

  const renderToken = () => {
    if (location.state === 'undefined') {
      setToken('');
    }
    if (location.state) {
      setToken(location.state.res.access_token);
    }
  };

  useEffect(() => {
    renderToken();
  }, []);

  return (
    <MainContainer>
      <Nav
        Token={Token}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchEnter={setSearchEnter}
      />
      {searchEnter && <SeachNav bookList={bookList} />}
      <MainImageCarousel />
      <TodaysBook />
      <NewBook />
      <BestSeller />
      <RecommendedBook />
      <CommingSoonBook />
      <Footer />
      <Popup>
        <Title>
          <div>독서, 어렵지 않아요</div>
          <img src="./images/delete.png" alt="delete" />
        </Title>
        <SubTitle>
          꼭 읽어야만 독서인가요?
          <br />
          독서 습관을 만드는 가장 쉬운 방법
        </SubTitle>
        <Button
          onClick={() => {
            history.push('/payment');
          }}>
          <span>무제한</span> 독서 <span>시작</span> 하기
        </Button>
      </Popup>
    </MainContainer>
  );
}

const Popup = styled.div`
  box-sizing: border-box;
  position: fixed;
  padding: 32px 24px;
  bottom: 56px;
  right: 56px;
  border-radius: 40px;
  color: #fff;
  z-index: 100;
  width: 460px;
  height: 230px;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    box-sizing: border-box;
    height: 31px;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const SubTitle = styled.div`
  box-sizing: border-box;
  font-size: 17px;
  width: 100%;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  background: #ffeb60;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  color: #242424;
  margin-top: 24px;
  font-size: 16px;
  bottom: 0;

  span {
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
  }
`;

const MainContainer = styled.div`
  box-sizing: border-box;
  margin-top: 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SuweeMain;
