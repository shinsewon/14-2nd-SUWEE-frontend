import React, { useState } from 'react';
import { font18, theme } from '../../../Styles/CommonStyle';
import { flexCenter } from '../../../Styles/CommonStyle';
import styled from 'styled-components';

const PayWay = ({ title, kakaoClick, phoneClick, setKakaoClick, setPhoneClick }) => {
  const handleClick = (e) => {
    const { innerText } = e.target;
    if (innerText === '카카오페이') {
      setKakaoClick(!kakaoClick);
      if (kakaoClick === false || true) {
        return setPhoneClick(true);
      }
    }
    if (innerText === '휴대폰결제') {
      setPhoneClick(!phoneClick);
      if (phoneClick === false || true) {
        return setKakaoClick(true);
      }
    }
  };

  return (
    <Wrap>
      <h3>{title}</h3>
      <PaymentBox>
        <KakaoPayClick kakaoClick={kakaoClick} onClick={handleClick}>
          <KaKaoPayImgBoxClick>
            <img src="/images/kakaopay.png" alt="카카오페이" />
          </KaKaoPayImgBoxClick>
          <KakaoTextClick>카카오페이</KakaoTextClick>
        </KakaoPayClick>
        <PhonePayClick phoneClick={phoneClick} onClick={handleClick}>
          <PhonePayImgBoxClick>
            <img src="/images/mobile.png" alt="모바일페이" />
          </PhonePayImgBoxClick>
          <PhoneTextClick>휴대폰결제</PhoneTextClick>
        </PhonePayClick>
      </PaymentBox>
    </Wrap>
  );
};

export default PayWay;

const Wrap = styled.div`
  margin-top: 30px;
  h3 {
    ${font18}
    line-height:30px;
  }
`;

const PaymentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const KakaoPayClick = styled.div`
  ${flexCenter}
  width: 340px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid ${theme.yellow};
  cursor: pointer;
  -webkit-filter: ${(props) => (props.kakaoClick ? 'grayscale(100%)' : '')};
  box-shadow: ${(props) => (props.kakaoClick ? '' : '0 8px 20px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1)')};
`;

const KaKaoPayImgBoxClick = styled.div`
  width: 40px;
  height: 20px;
  background-color: white;

  img {
    border-radius: 20px;
  }
`;

const KakaoTextClick = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const PhonePayClick = styled.div`
  ${flexCenter}
  width: 340px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid ${theme.yellow};
  cursor: pointer;
  -webkit-filter: ${(props) => (props.phoneClick ? 'grayscale(100%)' : '')};
  box-shadow: ${(props) => (props.phoneClick ? '' : '0 8px 20px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1)')};
`;

const PhonePayImgBoxClick = styled.div`
  width: 30px;
  height: 30px;

  img {
    filter: invert(100%) sepia(41%) saturate(3474%) hue-rotate(323deg) brightness(107%) contrast(102%);
  }
`;

const PhoneTextClick = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;
