import React, { useState } from 'react';
import SignUpNavComponent from '../../Components/SignUpNav/SignUpNav';
import PayAmountComponent from './Pay/PayAmount';
import PayWayComponent from './Pay/PayWay';
import PayInputComponent from './Pay/PayInput';
import NextPageComponent from '../../Components/NextPage/NextPage';
import AgreementMiniBoxComponent from './AgreementMiniBox/AgreementMiniBox';
import { PAYDATA, PAYAGREEMENT } from '../../data';
import { font18, font16, commonContainer } from '../../Styles/CommonStyle';
import styled from 'styled-components';

const Payment = (props) => {
  const [allCheck, setAllCheck] = useState(false);
  const [checkBox, setCheckBox] = useState(PAYAGREEMENT);
  const [kakaoClick, setKakaoClick] = useState(true);
  const [phoneClick, setPhoneClick] = useState(true);
  const [phoneNumber, setPhoneNember] = useState('01097751541');

  //결제함수 실행을 위한 콜백 함수
  const callback = (response) => {
    const { success, error_msg } = response;
    if (success) {
      alert('결제 성공');
      return props.history.push('/SuweeMain');
    } else {
      alert(`${error_msg}`);
    }
  };

  //카카오 결제 실행
  const goToKakaoPayment = () => {
    const { IMP } = window;
    IMP.init('imp19415445');
    if (!kakaoClick && allCheck) {
      IMP.request_pay(PAYDATA, callback);
    }
    if (kakaoClick) {
      alert('결제 수단을 선택해주세요.');
    }
    if (allCheck === false) {
      alert('전체 약관동의를 체크해주세요.');
    }
  };

  return (
    <div>
      <SignUpNavComponent name="결제정보 입력" />
      <Wrap>
        <Subscription>
          <div>
            <RegularSubscription>월 정기구독</RegularSubscription>
            <PeriodTitle>구독기간</PeriodTitle>
            <PeriodLine>|</PeriodLine>
            <PeriodMonth>2020/12/05~2021/01/05</PeriodMonth>
          </div>
          <div>
            <NextPayment>다음 결제일</NextPayment>
            <PeriodLine>|</PeriodLine>
            <PeriodMonth>2021/01/05</PeriodMonth>
          </div>
        </Subscription>
        <PayAmountComponent title="결제 금액" />
        <PayWayComponent
          title="결제 수단"
          kakaoClick={kakaoClick}
          setKakaoClick={setKakaoClick}
          phoneClick={phoneClick}
          setPhoneClick={setPhoneClick}
        />
        <PayInputComponent
          header="휴대폰 번호"
          color="#f5f5f5"
          text="휴대폰번호 수정은 관리 > 내정보 관리메뉴에서 가능합니다."
          phoneNumber={phoneNumber}
          setPhoneNember={setPhoneNember}
        />
        <AgreementMiniBoxComponent allCheck={allCheck} setAllCheck={setAllCheck} checkBox={checkBox} setCheckBox={setCheckBox} />
        <NextPageComponent comment="9,900원 결제하기" goToKakaoPayment={goToKakaoPayment} />
      </Wrap>
    </div>
  );
};

export default Payment;

const Wrap = styled.div`
  ${commonContainer};
`;

const Subscription = styled.header`
  height: 70px;
  margin-top: 30px;
  line-height: 20px;
`;

const RegularSubscription = styled.h2`
  ${font18}
  margin-bottom:10px;
`;

const PeriodTitle = styled.span`
  ${font16}
  margin-right: 25px;
`;
const PeriodLine = styled.line`
  ${font16}
`;

const PeriodMonth = styled.span`
  ${font16}
  margin-left: 10px;
`;

const NextPayment = styled.span`
  ${font16}
  margin-right: 7px;
`;
