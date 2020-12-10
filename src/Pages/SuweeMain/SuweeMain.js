import { useEffect, useState } from 'react';
import styled from 'styled-components';
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
  const [bookList, setBookList] = useState([]);
  const [searchEnter, setSearchEnter] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch(`${BOOK_LIST}`)
      .then((res) => res.json())
      .then((res) => setBookList(res));
  }, []);
  return (
    <MainContainer>
      <Nav searchValue={searchValue} setSearchValue={setSearchValue} setSearchEnter={setSearchEnter} />
      {searchEnter && <SeachNav bookList={bookList} />}
      <MainImageCarousel />
      <TodaysBook />
      <NewBook />
      <BestSeller />
      <RecommendedBook />
      <CommingSoonBook />
      <Footer />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin-top: 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SuweeMain;
