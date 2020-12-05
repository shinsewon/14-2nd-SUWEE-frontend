import React from 'react';
import FifthLeftSideTextComponent from './LeftSideText/FifthLeftSideText';
import TiketComponent from './BookCard/Tiket';
import styled from 'styled-components';
import { flexCenter, theme } from '../../../Styles/CommonStyle';

const FifthView = () => {
  return (
    <FifthViewer>
      <Wrap>
        <FifthLeftSideTextComponent />
        <div className="tiketBox">
          <TiketComponent
            colorTitle="전자책"
            subscription="무제한 구독"
            firstText="밀리의 서재"
            secondText="전자책"
            monthPrice="9900"
            yearPrice="99000"
            totalPrice="118800"
            secondBoxColor="#FFC003"
          />
          <TiketComponent
            fontColor="white"
            backgroundColor={theme.boldPurple}
            colorTitle="종이책"
            title="까지"
            subscription="소장하는"
            firstText="밀리 오리지널"
            secondText="종이책"
            monthPrice="15900"
            yearPrice="183000"
            totalPrice="202800"
            firstComment="최고 작가의 신작 종이책 배송"
            secondComment="한정판 가입 선물 100%증정"
            firstBoxColor={theme.purpleOpacity}
            secondBoxColor={theme.boldPurple}
          />
        </div>
      </Wrap>
    </FifthViewer>
  );
};

export default FifthView;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const FifthViewer = styled(Section)`
  position: relative;
  ${flexCenter}
`;

const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 1024px;
  margin-top: 100px;

  .tiketBox {
    display: flex;
    position: absolute;
    right: 10%;
    bottom: 0;
  }
`;

const FigureBox = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  .item {
    position: absolute;
    width: 200px;
    height: 200px;
    margin: 50px auto;
    padding-top: 75px;
    background: #ccc;
    text-align: center;
    color: #fff;
    font-size: 3em;
  }
`;
