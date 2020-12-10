import React from 'react';
import { font18, font16 } from '../../../Styles/CommonStyle';
import styled from 'styled-components';

const PayAmount = ({ title }) => {
  return (
    <Wrap>
      <h3>{title}</h3>
      <PaymentBox>
        <TotalPay>총 결제금액</TotalPay>
        <Pay>9,900원</Pay>
      </PaymentBox>
    </Wrap>
  );
};

export default PayAmount;

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
  border: 1px solid #cccccc;
`;

const TotalPay = styled.span`
  ${font16}
  margin: 0 10px;
`;

const Pay = styled.span`
  margin: 0 10px;
  font-weight: 900;
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
`;
