import React from 'react';
import PhoneCertifyBox from '../../../Components/PhoneCertifyBox/PhoneCertifyBox';
import FindResidentNumber from '../../../Components/ResidentNumber/ResidentNumber';
import SignUpNav from '../../../Components/SignUpNav/SignUpNav';
import styled from 'styled-components';
import { flexCenter, theme } from '../../../Styles/CommonStyle';

const PasswordFind = () => {
  return (
    <>
      <SignUpNav name={'비밀번호 찾기'} />
      <Wrap>
        <div className="phoneCertifyWrap">
          <FindResidentNumber />
          <div className="phoneCertifyBoxWrap">
            <PhoneCertifyBox />
          </div>
        </div>
        <NextBox>다음</NextBox>
      </Wrap>
    </>
  );
};

export default PasswordFind;

const Wrap = styled.div`
  ${flexCenter}
  flex-direction:column;
  width: 100%;
  height: 100%;

  .phoneCertifyWrap {
    width: 700px;

    .phoneCertifyBoxWrap {
      margin-top: 20px;
      color: #666666;
    }
  }
`;

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
