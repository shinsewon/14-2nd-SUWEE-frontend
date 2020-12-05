import React from 'react';
import TitleText from '../../../Components/TitleText/TitleText';
import styled from 'styled-components';
import { flexCenter } from '../../../Styles/CommonStyle';

const SecondView = () => {
  return (
    <SecondViewer>
      <ImgContainer>
        <ImgBox>
          <img data-aos="slide-down" src="/images/firstBook.svg" alt="책" />
        </ImgBox>
        <ImgBox2>
          <img data-aos="slide-down" src="/images/secondBook.svg" alt="책" />
        </ImgBox2>
        <ImgBox3>
          <img data-aos="slide-down" src="/images/thirdBook.svg" alt="책" />
        </ImgBox3>
      </ImgContainer>
      <TitleText firstComment="독서와" colorComment="무제" secoundComment="한" thirdComment="친해지리" slideDown="slide-down" />
      <Footer>
        <img src="/images/name.svg" alt="밀리의서재" />
      </Footer>
    </SecondViewer>
  );
};

export default SecondView;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 1340px;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const SecondViewer = styled(Section)`
  min-height: 1024px;
  position: relative;
  ${flexCenter}
`;

const ImgBox = styled.div`
  position: relative;
  top: -5%;
  left: -60%;
  width: 600px;
  height: 200px;
`;

const ImgBox2 = styled.div`
  position: relative;
  left: 80%;
  width: 600px;
  height: 200px;
`;
const ImgBox3 = styled.div`
  position: relative;
  left: -40%;
  bottom: -10%;
  width: 600px;
  height: 200px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 150px;
  height: 55px;

  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(350deg) brightness(107%) contrast(104%);
`;
