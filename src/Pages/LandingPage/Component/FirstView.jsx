import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../../Styles/CommonStyle';

const FirstView = () => {
  return (
    <Wrap>
      <FirstViewer>
        <div className="viewTextBox">
          <div className="viewerText">새로워진</div>
          <div className="viewerText">뷰어.</div>
        </div>
        <PictureBox>
          <img src="/images/viewer.png" alt="뷰어" />
        </PictureBox>
      </FirstViewer>
    </Wrap>
  );
};

export default FirstView;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const Wrap = styled.div`
  ${flexCenter}
  width: 700px;
  height: 100%;
  position: absolute;
`;

const PictureBox = styled(Section)`
  position: absolute;
  top: 60%;
  left: 10%;
  width: 300px;
  height: 350px;
`;

const FirstViewer = styled.div`
  ${flexCenter}
  position: absolute;
  flex-direction: column;
  top: 10%;
  width: auto;

  .viewTextBox {
    display: flex;
    flex-direction: column;

    .viewerText {
      font-size: 70px;
      font-weight: 900;
      color: white;
    }
  }
`;
