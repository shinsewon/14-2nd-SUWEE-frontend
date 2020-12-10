import styled from 'styled-components';
import Nav from '../../Components/Nav/Nav';
import MainImageCarousel from '../../Pages/SuweeMain/MainImageCarousel/MainImageCarousel';
import TodaysBook from '../../Pages/SuweeMain/TodaysBook/TodaysBook';
import NewBook from '../../Pages/SuweeMain/NewBook/NewBook';
import BestSeller from '../../Pages/SuweeMain/BestSeller/BestSeller';
import RecommendedBook from '../../Pages/SuweeMain/RecommendedBook/RecommendedBook';
import CommingSoonBook from '../../Pages/SuweeMain/CommingSoonBook/CommingSoonBook';
import Footer from '../../Components/Footer/Footer';

function SuweeMain() {
  return (
    <MainContainer>
      <Nav />
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
  ${({ theme }) => console.log(theme.flexCenter)}
`;

export default SuweeMain;
