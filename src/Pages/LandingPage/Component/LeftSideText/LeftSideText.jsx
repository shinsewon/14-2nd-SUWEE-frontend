import React from 'react';
import styled from 'styled-components';

const LeftSideText = ({ color, bookColor, sentences, colorSentence, lastSentence }) => {
  return (
    <LeftTextBar>
      <TitleText color={color}>
        {sentences.map((sentence, idx) => (
          <h1 key={idx}>{sentence}</h1>
        ))}
      </TitleText>
      <SubText bookColor={bookColor} color={color}>
        <div className="textbox">
          <span className="purpleText">{colorSentence[0]}</span>
          <span className="text">{colorSentence[1]}</span>
        </div>
        <div className="finalText">{lastSentence}</div>
      </SubText>
    </LeftTextBar>
  );
};

export default LeftSideText;

const LeftTextBar = styled.div`
  position: relative;
  z-index: 9;
`;

const TitleText = styled.div`
  color: ${(props) => props.color || 'white'};
  font-size: 76px;

  h1 {
    line-height: 100px;
    font-weight: 800;
    font-family: 'Noto Serif KR', serif;
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
    color: ${(props) => props.bookColor || 'white'};
  }
  .text {
    color: ${(props) => props.bookColor || 'white'};
  }
  .finalText {
    color: ${(props) => props.color || 'white'};
  }
`;
