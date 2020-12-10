import React, { useState, useEffect, useCallback } from 'react';
import ViewBoxComponent from './Component/ViewBox';
import TitleText from '../../Components/TitleText/TitleText';
import SecondViewComponent from './Component/SecondView';
import ThirdViewerComponent from './Component/ThirdView';
import FourthViewerComponent from './Component/FourthView';
import FifthViewerComponent from './Component/FifthView';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();
  const [books, setBooks] = useState([]);
  const [unSubscription, setUnSubscription] = useState(false);

  const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0,
    });
    const onScroll = (e) => {
      if (window.scrollY < 3500) {
        setUnSubscription(true);
      }
      if (window.scrollY > 3500) {
        setState({ y: window.scrollY });
        setUnSubscription(false);
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return state;
  };
  const { y } = useScroll();
  console.log(y);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 500,
    });
  }, []);

  const getBookList = () => {
    fetch('http://192.168.200.103:8000/books/randing_page')
      .then((res) => res.json())
      .then((res) => setBooks(res.books));
    const bookSlice = [...books].slice(0, 40);
    setBooks(bookSlice);
  };

  const goToSignUp = () => {
    history.push('/signup');
  };

  useEffect(() => {
    getBookList();
  }, []);

  return (
    <StyleContainer>
      <ViewBoxComponent />
      <TitleText firstComment="독서의" colorComment="미래" secondComment="를" thirdComment="만들다" top="5%" left="45%" />
      {unSubscription && (
        <GoToMain onClick={goToSignUp}>
          <div>첫달 무료 인생책 만나기</div>
        </GoToMain>
      )}
      <Viewer>
        <SecondViewComponent />
      </Viewer>
      <Viewer>
        <ThirdViewerComponent books={books} />
      </Viewer>
      <Viewer>
        <FourthViewerComponent />
      </Viewer>
      <FourthViewer>
        <FifthViewerComponent />
      </FourthViewer>
    </StyleContainer>
  );
};

export default LandingPage;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const ViewBox = styled(Section)`
  height: 100%;
`;

const StyleContainer = styled(Section)`
  position: relative;
  background: linear-gradient(180deg, #030710, rgba(22, 43, 75, 0.85));
  height: 100%;
`;

const Viewer = styled.div`
  ${({ theme }) => theme.flexCenter}
  position:relative;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 150px;
  height: 55px;
`;

const FourthViewer = styled.div`
  ${({ theme }) => theme.flexCenter}
  position:relative;
  flex-direction: column;
  height: 100%;

  background-color: ${(props) => (props.y > 3000 ? 'white' : '')};
  animation-name: ${(props) => (props.y > 3000 ? 'example' : '')};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  transition: all 200ms ${(props) => (props.y > 3000 ? 'ease-in' : 'ease-out')};

  @keyframes example {
    0% {
      background-color: 'none';
    }
    25% {
      background-color: #999999;
    }
    50% {
      background-color: #666666;
    }
    100% {
      background-color: #333333;
    }
  }
`;

const GoToMain = styled.div`
  ${({ theme }) => theme.flexCenter}
  position: fixed;
  bottom: 5%;
  left: 40%;
  right: 40%;
  width: 330px;
  height: 60px;
  background-color: white;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.purple};

  z-index: 3;
  border-radius: 50px;

  div {
    position: sticky;
  }
`;
