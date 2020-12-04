import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PhoneCertifyBox from '../../../Components/PhoneCertifyBox/PhoneCertifyBox';
import { CERTIFY_REQUEST } from '../../../config';
import styled from 'styled-components';
import { flexCenter, theme } from '../../../Styles/CommonStyle';

const PhoneCertify = () => {
  const history = useHistory();
  const [userNumber, setUserNumber] = useState('');
  const [certifyNumber, setCertifyNumber] = useState('');

  //(다음) 인증 번호 받고 다음 페이지 이동
  const handleCertifyChange = (e) => {
    fetch(`${CERTIFY_REQUEST}?phone_number=${userNumber}&auth_number=${certifyNumber}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('인증 번호 : ', res);
        alert('인증에 성공하였습니다.');
        history.push('/agreement');
      });
  };
  //백엔드랑 테스트 할때 쓰려고 적어놨습니다. 나중에 최종 완성때 지우겠습니다.
  // console.log('부모 phone_number : ', userNumber);
  // console.log('부모 certifyNumber : ', certifyNumber);
  return (
    <PhoneCertifyBody>
      <CertifyBox>
        <PhoneCertifyBox userNumber={userNumber} setUserNumber={setUserNumber} certifyNumber={certifyNumber} setCertifyNumber={setCertifyNumber} />
        <PhoneCertifyBox2>
          <TextBox>
            <span>
              <div className="text">◎ 본인 명의의 휴대폰 정보를 정확히 입력해 주시기 바랍니다.</div>
              <div className="text">◎ 휴대폰 로그인의 경우, 해외 번호는 이용이 불가능하니 양해 바랍니다.</div>
              <div className="text">
                ◎ 타인의 명의를 도용하여 부정인증을 시도한 경우, 관련 법령에 따라 처벌 (3년 이하의 징역 또는 1천만원 이하의 벌금)을 받을 수 있습니다.
              </div>
            </span>
          </TextBox>
        </PhoneCertifyBox2>
      </CertifyBox>
      <NextBox onClick={handleCertifyChange}>다음</NextBox>
    </PhoneCertifyBody>
  );
};

export default PhoneCertify;

const PhoneCertifyBody = styled.div`
  ${flexCenter};
  flex-direction: column;
`;

const CertifyBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 20px;
  width: 700px;
  height: 150px;
`;

const PhoneCertifyBox2 = styled.section`
  width: 100%;

  h3 {
    height: 20px;
    font-size: 16px;
  }
`;

const TextBox = styled.div`
  display: flex;
  margin-top: 10px;

  span {
    .text {
      font-size: 12px;
      line-height: 17px;
      color: #999999;
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
