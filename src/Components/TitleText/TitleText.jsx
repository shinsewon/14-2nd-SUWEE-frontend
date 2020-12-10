import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../Styles/CommonStyle';

const TitleText = ({ top, left, firstComment, secondComment, thirdComment, colorComment, slideDown }) => {
  return (
    <ThemeProvider theme={theme}>
      <SubTitleBox top={top} left={left}>
        <Text data-aos={slideDown}>{firstComment}</Text>
        <TextBox>
          <div data-aos={slideDown} className="secoundComment">
            {colorComment}
          </div>
          <div data-aos={slideDown} className="thirdComment">
            {secondComment}
          </div>
        </TextBox>
        <Text data-aos={slideDown}>{thirdComment}</Text>
      </SubTitleBox>
    </ThemeProvider>
  );
};

export default TitleText;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const SubTitleBox = styled(Section)`
  position: absolute;
  top: ${(props) => props.top || '40%'};
  left: ${(props) => props.left || ''};
  width: auto;
  padding: 50px 0;
  z-index: 3;
`;

const Text = styled.div`
  color: white;
  font-size: 48px;
  font-family: 'Noto Serif KR', serif;
`;

const TextBox = styled.div`
  display: flex;

  .secoundComment {
    color: ${theme.yellow};
    font-size: 48px;
    font-family: 'Noto Serif KR', serif;
  }

  .thirdComment {
    color: white;
    font-size: 48px;
    font-family: 'Noto Serif KR', serif;
  }
`;
