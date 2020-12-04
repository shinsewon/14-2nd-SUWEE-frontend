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
        {kakaoClick && (
          <KakaoPayClickBefore onClick={handleClick}>
            <KaKaoPayImgBoxClickBefore>
              <img src="/images/kakaopay.png" alt="카카오페이" />
            </KaKaoPayImgBoxClickBefore>
            <KakaoTextClickBefore>카카오페이</KakaoTextClickBefore>
          </KakaoPayClickBefore>
        )}

        {!kakaoClick && (
          <KakaoPayClickAfter onClick={handleClick}>
            <KaKaoPayImgBoxClickAfter>
              <img src="/images/kakaopay.png" alt="카카오페이" />
            </KaKaoPayImgBoxClickAfter>
            <KakaoTextClickAfter>카카오페이</KakaoTextClickAfter>
          </KakaoPayClickAfter>
        )}

        {phoneClick && (
          <PhonePayClickBefore onClick={handleClick}>
            <PhonePayImgBoxClickBefore>
              <img src="/images/mobile.png" alt="모바일페이" />
            </PhonePayImgBoxClickBefore>
            <PhoneTextClickBefore>휴대폰결제</PhoneTextClickBefore>
          </PhonePayClickBefore>
        )}

        {!phoneClick && (
          <PhonePayClickAfter onClick={handleClick}>
            <PhonePayImgBoxClickAfter>
              <img src="/images/mobile.png" alt="모바일페이" />
            </PhonePayImgBoxClickAfter>
            <PhoneTextClickAfter>휴대폰결제</PhoneTextClickAfter>
          </PhonePayClickAfter>
        )}
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

const KakaoPayClickAfter = styled.div`
  ${flexCenter}
  width: 340px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid ${theme.yellow};
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const KaKaoPayImgBoxClickAfter = styled.div`
  width: 40px;
  height: 20px;
  background-color: white;

  img {
    border-radius: 20px;
  }
`;

const KakaoTextClickAfter = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const KakaoPayClickBefore = styled.div`
  ${flexCenter}
  width: 340px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid ${theme.yellow};
  cursor: pointer;
  -webkit-filter: grayscale(100%);
`;

const KaKaoPayImgBoxClickBefore = styled.div`
  width: 40px;
  height: 20px;
  background-color: white;

  img {
    border-radius: 20px;
  }
`;

const KakaoTextClickBefore = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const PhonePayClickAfter = styled.div`
  ${flexCenter}
  width: 340px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid ${theme.yellow};
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PhonePayImgBoxClickAfter = styled.div`
  width: 30px;
  height: 30px;

  img {
    filter: invert(100%) sepia(41%) saturate(3474%) hue-rotate(323deg) brightness(107%) contrast(102%);
  }
`;

const PhoneTextClickAfter = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const PhonePayClickBefore = styled.div`
  ${flexCenter}
  width: 340px;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #cccccc;
  cursor: pointer;
  filter: grayscale(100%);
`;

const PhonePayImgBoxClickBefore = styled.div`
  width: 30px;
  height: 30px;

  img {
    filter: invert(100%) sepia(41%) saturate(3474%) hue-rotate(323deg) brightness(107%) contrast(102%);
  }
`;

const PhoneTextClickBefore = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;
