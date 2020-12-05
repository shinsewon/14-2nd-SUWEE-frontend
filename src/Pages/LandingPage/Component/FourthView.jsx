import React from 'react';
import LeftSideTextComponent from './LeftSideText/LeftSideText';
import ChartBookCardComponent from './BookCard/ChatBookCard';
import BookCardComponent from './BookCard/BookCard';
import { AUDIOMAINIMG, AUDIOSUBIMG, AUDIOTHIRDIMG, CHARTMAINIMG, CHARTSUBIMG, CHARTTHIRDIMG } from '../../../data';
import styled from 'styled-components';
import { flexCenter } from '../../../Styles/CommonStyle';

const FourthView = () => {
  const sentences = ['아직', '독서가', '어려운', '당신을 위한'];
  const colorSentence = ['쉽고 ', '재밌는'];
  const lastSentence = ['독서법으로 읽어요'];

  return (
    <FourthViewer backgroundColor="#FCFAF3">
      <Wrap>
        <LeftSideTextComponent
          sentences={sentences}
          colorSentence={colorSentence}
          lastSentence={lastSentence}
          color="black"
          bookColor={({ theme }) => theme.purple}
        />
        <div className="audioBookBox">
          <BookCardComponent MAINIMG={AUDIOMAINIMG} SUBIMG={AUDIOSUBIMG} THIRDIMG={AUDIOTHIRDIMG} />
        </div>
        <div className="chartBookBox">
          <BookCardComponent MAINIMG={CHARTMAINIMG} SUBIMG={CHARTSUBIMG} THIRDIMG={CHARTTHIRDIMG} />
        </div>
      </Wrap>
    </FourthViewer>
  );
};

export default FourthView;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 800px;
  margin-top: 100px;

  .audioBookBox {
    position: absolute;
    right: 30%;
  }
  .chartBookBox {
    position: absolute;
    top: 10%;
    right: 2%;
  }
`;

const FourthViewer = styled(Section)`
  position: relative;
  ${flexCenter}
  background-color: ${(props) => props.backgroundColor || 'none'} /* ${({ theme }) => theme.purple} */
`;
