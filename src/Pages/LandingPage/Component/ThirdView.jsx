import React from 'react';
import BottomTextComponent from './BottomText';
import BookListComponent from './BookList/BookList';
import LeftSideTextComponent from './LeftSideText/LeftSideText';
import styled from 'styled-components';

const ThirdView = ({ books }) => {
  const sentences = ['모두의', '취향을', '만족시키는', ''];
  const colorSentence = ['10만 권', '의 전자책중'];
  const lastSentence = ['골라 읽어요'];

  return (
    <ThirdViewer>
      <Wrap>
        <LeftSideTextComponent
          sentences={sentences}
          colorSentence={colorSentence}
          lastSentence={lastSentence}
          bookColor={({ theme }) => theme.yellow}
        />
        <BottomTextComponent firstComment="어제," secondComment="오늘 그리고" thirdComment="미래의 베스트 셀러까지!" />
        <BottomTextComponent
          firstComment="무제한 독서를 통해"
          color={({ theme }) => theme.yellow}
          colorComment="당신의 인생책"
          secondComment="을"
          thirdComment="만나보세요."
        />
        <BookChart>
          <BookListComponent books={books} />
        </BookChart>
      </Wrap>
    </ThirdViewer>
  );
};

export default ThirdView;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const ThirdViewer = styled(Section)`
  position: relative;
  ${({ theme }) => theme.flexCenter}
`;

const Wrap = styled.div`
  position: relative;
  width: 80%;
  height: 1024px;
  margin-top: 100px;
`;

const LeftTextBar = styled.div`
  position: relative;
  z-index: 9;
`;

const TitleText = styled.div`
  color: white;
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
  color: white;

  .purpleText {
    color: ${({ theme }) => theme.purple};
  }
`;

const BookChart = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  top: 25%;
  left: -3%;
`;
