import React from 'react';
import styled from 'styled-components';
import { flexCenter, theme } from '../../../../Styles/CommonStyle';

const Tiket = ({
  colorTitle,
  title,
  subscription,
  firstText,
  secondText,
  monthPrice,
  yearPrice,
  totalPrice,
  firstComment,
  secondComment,
  backgroundColor,
  fontColor,
  firstBoxColor,
  secondBoxColor,
}) => {
  const MP = +monthPrice;
  const YP = +yearPrice;
  const TP = +totalPrice;

  return (
    <Container data-aos="zoom-in">
      <ColorBox backgroundColor={backgroundColor} fontColor={fontColor}>
        <Wrap>
          <TopTitle fontColor={fontColor}>
            <h2>"</h2>
            <span className="colorTitle">{colorTitle}</span>
            <span className="title">{title}</span>
            <h2>{subscription}</h2>
          </TopTitle>
          <MainTitle>
            <h2>{firstText}</h2>
            <b>{secondText}</b>
            <h2>정기구독</h2>
          </MainTitle>
          <PriceTitle>
            <div className="monthTicket">
              <span className="month">월</span>
              <span className="monthPrice">{MP.toLocaleString(2)}</span>
            </div>
            <div className="yearTicket">
              <span className="year">연</span>
              <span className="yearPrice">{YP.toLocaleString(2)}</span>
              <span className="totalPrice">{TP.toLocaleString(2)}</span>
            </div>
          </PriceTitle>
        </Wrap>
      </ColorBox>
      <SecondWrap>
        <TextContainer>
          <li className="colorText">전자책 10만원권 무제한</li>
          <div className="textBox">
            <li className="colorText">밀리 단톡 콘텐츠</li>
            <span>오디오북,챗북</span>
          </div>
          {firstComment && <li className="colorText">{firstComment}</li>}
          {secondComment && <li className="colorText">{secondComment}</li>}
          <li className="freeMonth">첫달무료</li>
          <div className="bottomText">연 정기구독시 3개월 무료 꼴</div>
          <div className="bottomText">유료 전환시, 미사용 여부가 확인되면 7일 내 환불 100%</div>
        </TextContainer>
      </SecondWrap>
      <ThirdWrap>
        <div className="subscriptionBox">
          <Subscription fontColor={fontColor} firstBoxColor={firstBoxColor}>
            월 정기구독
          </Subscription>
          <Subscription fontColor={fontColor} secondBoxColor={secondBoxColor}>
            연 정기구독
          </Subscription>
        </div>
      </ThirdWrap>
    </Container>
  );
};

export default Tiket;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 10px;
  width: 350px;
  height: 790px;
  border-radius: 10px;
  background-color: #ffffff;
`;

const ColorBox = styled.div`
  ${flexCenter}
  width: 100%;
  flex-direction: column;
  min-height: 424px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: ${(props) => props.fontColor || 'black'};
  background-color: ${(props) => props.backgroundColor || theme.yellow};
`;

const Wrap = styled.div`
  width: 90%;
`;

const TopTitle = styled(Section)`
  font-size: 20px;

  font-family: 'Noto Serif KR', serif;
  line-height: 25px;

  h2 {
    font-family: 'Noto Serif KR', serif;
  }

  .colorTitle {
    font-size: 20px;
    font-weight: 900;
    color: ${(props) => props.fontColor || '#343434'};
  }
`;

const MainTitle = styled(Section)`
  font-size: 40px;
  font-weight: 900;
  line-height: 60px;
`;

const PriceTitle = styled(Section)`
  .monthTicket {
    .month {
      font-size: 24px;
    }
    .monthPrice {
      margin-left: 5px;
      font-size: 32px;
      font-weight: 900;
    }
  }

  .yearTicket {
    .year {
      font-size: 24px;
    }
    .yearPrice {
      margin-left: 5px;
      font-size: 32px;
      font-weight: 900;
    }
    .totalPrice {
      margin-left: 5px;
      font-size: 32px;
      color: #afa250;
      text-decoration-line: line-through; 
      }
    }
  }
`;

const SecondWrap = styled.div`
  width: 90%;
  height: 190px;
  margin-top: 10px;
`;

const TextContainer = styled.ul`
  list-style: none;
  padding-bottom: 100px;
  li {
    display: flex;
    align-items: center;
    height: 20px;
    font-size: 14px;
    margin: 2px 0;
  }
  li:before {
    content: '✓';
    width: 16px;
    height: 16px;
    background-size: 10px;
    opacity: 0.5;
  }

  .colorText {
    font-weight: bold;
  }
  .freeMonth {
    font-weight: bold;
    color: red;
  }
  .textBox {
    display: flex;

    span {
      display: flex;
      align-items: center;
      padding-left: 5px;
    }
  }

  .bottomText {
    padding: 5px 0 0 16px;
    line-height: 15px;
    font-size: 12px;
    opacity: 0.6;
    color: #343434;
  }
`;

const ThirdWrap = styled.div`
  position: relative;
  width: 90%;
  height: 100vh;
  margin-top: 10px;

  .subscriptionBox {
    position: absolute;
    width: 100%;
    bottom: 10%;
  }
`;

const Subscription = styled.div`
  ${flexCenter}
  height: 40px;
  color: ${(props) => props.fontColor || '#343434'};
  margin-bottom: 10px;
  border-radius: 50px;
  background-color: ${(props) => props.firstBoxColor || props.secondBoxColor || theme.yellow};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
`;
