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

  return (
    <MainContainer>
      <Nav Token={Token} searchValue={searchValue} setSearchValue={setSearchValue} setSearchEnter={setSearchEnter} />
      {searchEnter && <SeachNav bookList={bookList} />}
      <MainImageCarousel />
      <TodaysBook />
      <NewBook />
      <BestSeller />
      <RecommendedBook />
      <CommingSoonBook />
      <Footer />
      <Popup>
        <div>독서, 어렵지 않아요</div>
        <div>
          꼭 읽어야만 독서인가요?
          <br />
          독서 습관을 만드는 가장 쉬운 방법
        </div>
        <Button
          onClick={() => {
            history.push('/payment');
          }}
        >
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

  div {
    &:first-child {
      box-sizing: border-box;
      height: 31px;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    &:last-child {
      box-sizing: border-box;
      font-size: 16px;
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.4px;
    }
  }
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
