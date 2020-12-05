import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../Styles/CommonStyle';

const FifthLeftSideText = () => {
  return (
    <LeftTextBar>
      <SubText>
        <div className="textbox">
          <span className="purpleText">수위의</span>
          <span className="text">서재를</span>
          <div>정기구독하고</div>
        </div>
        <div className="text" />
      </SubText>
      <TitleText data-aos="example-colorChange">
        <h1 data-aos="example-colorChange">시간을</h1>
        <h1 data-aos="example-colorChange">가치있게</h1>
        <h1 data-aos="example-colorChange">채워</h1>
        <h1 data-aos="example-colorChange">나가세요</h1>
      </TitleText>
    </LeftTextBar>
  );
};

export default FifthLeftSideText;

const LeftTextBar = styled.div`
  position: relative;
  z-index: 9;
`;

const TitleText = styled.div`
  color: black;
  font-size: 50px;
  margin-top: 20px;

  h1 {
    line-height: 70px;
    font-weight: 800;
    font-family: 'Noto Serif KR', serif;
  }
  [data-aos='example-colorChange'] {
    color: black;
    transform: skewX(0deg);
    transition-property: background;
    &.aos-animate {
      transform: skewX(0);
      color: white;
      opacity: 1;
    }
  }
`;

const SubText = styled.div`
  margin-top: 10px;
  font-size: 22px;
  font-weight: 800;
  font-family: 'Noto Serif KR', serif;
  line-height: 30px;
  color: white;

  .purpleText {
    color: ${theme.yellow};
  }
`;
