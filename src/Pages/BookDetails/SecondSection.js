import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { componentGuide } from "../../../src/Styles/CommonStyle";
import { FIRST_API } from "../../config";
import HalfDoughnut from "../../Pages/BookDetails/Component/HalfDoughnut";

function SecondSection() {
  const [time, setTime] = useState([]);

  useEffect(() => {
    fetch(`${FIRST_API}`)
      .then((res) => res.json())
      .then((res) => setTime(res.Data.Time));
  }, []);

  return (
    <SecondContainer>
      <BestSeller>
        <img src="./images/second.png" alt="second" />
        <span>분야 주간 베스트 2위</span>
      </BestSeller>
      <Average>
        <Text>
          <img src="./images/book.png" alt="book" />
          <span>SUWEE 완독 지수</span>
          <img src="./images/question.png" alt="question" />
        </Text>
        <Box>
          <ResultBox>
            <HalfDoughnut />
          </ResultBox>
          <ResultBox>
            <img src="./images/clock.png" alt="clock" />
            <First>완독 예상 시간</First>
            <Second>{time.time}</Second>
            <Third>
              경제경영 분야 평균 <span>{time.average}</span>
            </Third>
          </ResultBox>
        </Box>
      </Average>
    </SecondContainer>
  );
}

const SecondContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  ${componentGuide}
`;

const BestSeller = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 52px;
  width: 100%;
  margin: 0;
  padding: 15px 24px;
  border-bottom: 1px solid #f7f7f7;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    padding: 5px 0 0 10px;
    font-weight: 700;
    font-size: 15px;
    color: #242424;
  }
`;

const Average = styled.div`
  box-sizing: border-box;
  padding: 15px 24px;
  line-height: 1.6;
`;

const Text = styled.div`
  box-sizing: border-box;
  display: flex;
  img {
    &:first-child {
      width: 20px;
    }
    &:last-child {
      width: 15px;
    }
  }

  span {
    font-size: 15px;
    margin: 0 8px 0 10px;
    font-weight: 500;
  }
`;

const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 30px 0;
`;

const ResultBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 466px;
  height: 177px;
  border-radius: 20px;
  background-color: #f7f7f7;
  padding: 25px 0;
  margin: 0 10px;

  canvas {
    width: 150px;
  }

  img {
    width: 35px;
    height: 35px;
  }
`;

const First = styled.div`
  font-size: 13px;
  font-weight: 700;
  margin-top: 10px;
`;

const Second = styled.div`
  font-size: 24px;
  font-weight: bolder;
`;

const Third = styled.div`
  font-size: 12px;
  color: #a5a5a5;

  span {
    font-weight: bolder;
  }
`;
export default SecondSection;
