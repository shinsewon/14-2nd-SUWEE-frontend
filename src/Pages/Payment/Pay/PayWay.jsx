import React, { useState } from 'react';
import { font18, theme } from '../../../Styles/CommonStyle';
import { flexCenter } from '../../../Styles/CommonStyle';
import styled from 'styled-components';

const PayWay = ({ title, kakaoClick, phoneClick, setKakaoClick, setPhoneClick }) => {
  const handleKakaoClick = () => {
    setKakaoClick(!kakaoClick);
    if (kakaoClick === false || true) {
      return setPhoneClick(true);
    }
  };

  const handlePhoneClick = () => {
    setPhoneClick(!phoneClick);
    if (phoneClick === false || true) {
      return setKakaoClick(true);
    }
  };
  return (
    <div>
      <Wrap>
        <h3>{title}</h3>
        <PaymentBox>
          {kakaoClick && (
            <KakaoPayFirst onClick={handleKakaoClick}>
              <KaKaoPayImgBoxFirst>
                <img src="/images/kakaopay.png" alt="카카오페이" />
              </KaKaoPayImgBoxFirst>
              <KakaoTextFirst>카카오페이</KakaoTextFirst>
            </KakaoPayFirst>
          )}

          {!kakaoClick && (
            <KakaoPaySecond onClick={handleKakaoClick}>
              <KaKaoPayImgBoxSecond>
                <img src="/images/kakaopay.png" alt="카카오페이" />
              </KaKaoPayImgBoxSecond>
              <KakaoTextSecond>카카오페이</KakaoTextSecond>
            </KakaoPaySecond>
          )}

          {phoneClick && (
            <PhonePayFirst onClick={handlePhoneClick}>
              <PhonePayImgBoxFirst>
                <img src="/images/mobile.png" alt="모바일페이" />
              </PhonePayImgBoxFirst>
              <PhoneTextFirst>휴대폰결제</PhoneTextFirst>
            </PhonePayFirst>
          )}

          {!phoneClick && (
            <PhonePaySecond onClick={handlePhoneClick}>
              <PhonePayImgBoxSecond>
                <img src="/images/mobile.png" alt="모바일페이" />
              </PhonePayImgBoxSecond>
              <PhoneTextSecond>휴대폰결제</PhoneTextSecond>
            </PhonePaySecond>
          )}
        </PaymentBox>
      </Wrap>
    </div>
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

const KakaoPaySecond = styled.div`
  ${flexCenter}
  width: 340px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid ${theme.yellow};
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const KaKaoPayImgBoxSecond = styled.div`
  width: 40px;
  height: 20px;
  background-color: white;

  img {
    border-radius: 20px;
  }
`;

const KakaoTextSecond = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const KakaoPayFirst = styled.div`
  ${flexCenter}
  width: 340px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid ${theme.yellow};
  cursor: pointer;
  -webkit-filter: grayscale(100%);
`;

const KaKaoPayImgBoxFirst = styled.div`
  width: 40px;
  height: 20px;
  background-color: white;

  img {
    border-radius: 20px;
  }
`;

const KakaoTextFirst = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const PhonePaySecond = styled.div`
  ${flexCenter}
  width: 340px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid ${theme.yellow};
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PhonePayImgBoxSecond = styled.div`
  width: 30px;
  height: 30px;

  img {
    filter: invert(100%) sepia(41%) saturate(3474%) hue-rotate(323deg) brightness(107%) contrast(102%);
  }
`;

const PhoneTextSecond = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const PhonePayFirst = styled.div`
  ${flexCenter}
  width: 340px;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #cccccc;
  cursor: pointer;
  filter: grayscale(100%);
`;

const PhonePayImgBoxFirst = styled.div`
  width: 30px;
  height: 30px;

  img {
    filter: invert(100%) sepia(41%) saturate(3474%) hue-rotate(323deg) brightness(107%) contrast(102%);
  }
`;

const PhoneTextFirst = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;
