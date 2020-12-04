import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SignUpNav from '../../../Components/SignUpNav/SignUpNav';
import InputBox1 from '../../../Components/InputBox/InputBox1';
import InputBox2 from '../../../Components/InputBox/InputBox2';
import ResidentNumber from '../../../Components/ResidentNumber/ResidentNumber';
import styled from 'styled-components';
import { flexCenter, theme } from '../../../Styles/CommonStyle';

const PasswordRegister = ({ name, userNumber }) => {
  const location = useLocation();
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [validPw, setValidPw] = useState(true);
  const [validDoubleCheck, setValidDoubleCheck] = useState(true);
  const [frontResidentNum, setFrontResident] = useState('');
  const [backResidentNum, setBackResident] = useState('');
  const [frontResidentCheck, setFrontResidentCheck] = useState(false);
  const [backResidentCheck, setBackResidentCheck] = useState(false);
  const [test, setTest] = useState(location.state);
  //백엔드와 맞춰볼 location.state 확인용입니다.
  // console.log('passwordCheck : ', location.state.passwordCheck);
  // console.log('location.state.test.userNumber : ', location.state.test.userNumber);
  // console.log('location : ', location.state.userNumber);
  // console.log('location.state : ', location.state);

  //비밀번호, 비밀번호 재확인 인증 체크
  const validationCheck = (name, value) => {
    if (name === 'passwordBox') {
      let passwordRules = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
      const validPw = passwordRules.test(value);
      setValidPw(validPw);
      return;
    }
    if (name === 'passwordRecheck') {
      const validDoubleCheck = password === value;
      setValidDoubleCheck(validDoubleCheck);
      return;
    }
  };
  const handlePassword = (e) => {
    const { name, value } = e.target;
    validationCheck(name, value);
    setPassword(value);
  };

  const handlePasswordCheck = (e) => {
    const { name, value } = e.target;
    validationCheck(name, value);
    setPasswordCheck(value);
  };

  const goToNextPage = () => {
    if (validPw && validDoubleCheck && frontResidentCheck && backResidentCheck) {
      history.push({ pathname: '/agreement', state: { test, passwordCheck } });
    } else {
      alert('다시 한번 확인 해주세요.');
    }
  };
  return (
    <div>
      <SignUpNav name={'비밀번호 등록'} />
      <Wrap>
        <div className="inputContainer">
          <InputBox1
            value={password}
            type={'password'}
            header={'로그인 시 사용할 비밀번호'}
            placeholder={'비밀번호 입력'}
            text={'영문,숫자를 포함한 8~16자 조합으로 입력해 주세요.'}
            handlePassword={handlePassword}
            validPw={validPw}
          />
          <InputBox2
            value={passwordCheck}
            type={'password'}
            placeholder={'비밀번호 재입력'}
            text={'비밀번호 확인을 위해 비밀번호를 다시 한 번 입력해 주세요.'}
            color="#999999"
            color2="#666666"
            border="true"
            handlePasswordCheck={handlePasswordCheck}
            validDoubleCheck={validDoubleCheck}
          />

          <ResidentNumber
            border="false"
            frontResidentNum={frontResidentNum}
            setFrontResident={setFrontResident}
            backResidentNum={backResidentNum}
            setBackResident={setBackResident}
            setFrontResidentCheck={setFrontResidentCheck}
            setBackResidentCheck={setBackResidentCheck}
          />
        </div>
        <NextBox onClick={goToNextPage}>다음</NextBox>
      </Wrap>
    </div>
  );
};

export default PasswordRegister;

const Wrap = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  margin-top: 5px;

  .inputContainer {
    width: 40%;
    height: 100%;
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
