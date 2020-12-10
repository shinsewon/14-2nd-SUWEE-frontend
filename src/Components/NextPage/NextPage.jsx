import React from 'react';
import styled from 'styled-components';
import { flexCenter, theme } from '../../Styles/CommonStyle';

const NextPage = ({ comment, goToKakaoPayment }) => {
  return (
    <>
      <NextBox onClick={goToKakaoPayment}>{comment}</NextBox>
    </>
  );
};

export default NextPage;

const NextBox = styled.footer`
  ${flexCenter}
  position:absolute;
  bottom: 0;
  width: 700px;
  height: 56px;
  font-size: 16px;
  font-weight: 700;
  background-color: ${theme.yellow};
`;
