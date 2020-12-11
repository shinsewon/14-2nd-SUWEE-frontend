import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { LOGINIMAGES } from './data/data';
import { KAKAO_API, SIGN_IN } from '../../config';
import { flexCenter } from '../../Styles/CommonStyle';

const Login = () => {
  const history = useHistory();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  //카카오톡 로그인
  const goToKakao = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${KAKAO_API}`, {
          method: 'POST',
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            //카카오 응답 테스트 console.log
            // console.log('res : ', res);
            if (!localStorage.Kakao_token) {
              localStorage.setItem('Kakao_token', res.access_token);
              if (res.access_token) {
                alert('SUWEE의 서재에 오신걸 환영합니다!');
                history.push({ pathname: '/SuweeMain', state: { res } });
              }
            } else {
              alert('이미 로그인 되어 있습니다.');
              history.push({ pathname: '/SuweeMain', state: { res } });
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  //휴대폰 번호로 로그인
  const goToMain = (e) => {
    e.preventDefault();
    fetch(`${SIGN_IN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone_number: mobileNumber,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('백엔드 응답 : ', res);
        if (res.access_token) {
          localStorage.setItem('token', `${res.access_token}`);
          alert('로그인에 성공하셨습니다.');
          history.push({ pathname: '/SuweeMain', state: { res } });
        } else {
          alert('휴대폰 번호 또는 비밀번호를 확인해주세요.');
        }
      });
  };
  return (
    <StyleLogin>
      <BackgroundImgContainer>
        <LoginBoxContainer>
          <img className="backgroundImg" src="/images/library.jpg" alt="배경화면" />
        </LoginBoxContainer>
      </BackgroundImgContainer>
      <LoginContainer>
        <LogoWrap>
          <Wrap>
            <LogoBox>
              <div className="LogoImgBox">
                <img src="/images/suweelogo.png" alt="로고 사진" />
              </div>
            </LogoBox>
          </Wrap>
          <InputPhoneId type="number" value={mobileNumber} placeholder="휴대폰 번호" onChange={(e) => setMobileNumber(e.target.value)}></InputPhoneId>
          <InputPassword type="password" value={password} placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}></InputPassword>
          <Button onClick={goToMain}>휴대폰 번호로 로그인</Button>
          <OrText>⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼ 또는 ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</OrText>
          <SnsContainer>
            {LOGINIMAGES.map((img) => {
              return (
                <SnsBox onClick={img.alt === '카카오' ? goToKakao : ''}>
                  <img key={img.id} src={img.src} alt={img.alt} />
                </SnsBox>
              );
            })}
          </SnsContainer>
          <MemberShipBox>
            <Link to="/signup">
              <SignUp>회원가입</SignUp>
            </Link>
            <None>|</None>
            <Link to="password-find">
              <PasswordReset>비밀번호 재설정</PasswordReset>
            </Link>
          </MemberShipBox>
        </LogoWrap>
      </LoginContainer>
    </StyleLogin>
  );
};

export default Login;

const { Kakao } = window;

const StyleLogin = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  box-shadow: inset 0 -55em 50em 18em rgba(0, 0, 0, 0.95);
`;

const BackgroundImgContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const LoginBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .backgroundImg {
    width: 100%;
    position: absolute;
    opacity: 0.4;
    z-index: 3;
  }
`;

const LoginContainer = styled.div`
  ${flexCenter};
  height: 100%;
`;

const LogoWrap = styled.div`
  width: 240px;
  height: 80%;
  z-index: 9;
`;

const Wrap = styled.div`
  height: 450px;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  margin: 0 50px;

  .LogoImgBox {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

const InputPhoneId = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  text-decoration: none solid rgb(255, 255, 255);
  color: #fff;
  padding: 0 0 0 15px;
  margin: 0 0 12px 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  boder-bottom: 1px solid #cccccc;

  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: #959494;
    text-shadow: 0 0 2px black;
  }
`;

const InputPassword = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  text-decoration: none solid rgb(255, 255, 255);
  color: #fff;
  padding: 0 0 0 15px;
  margin: 0 0 12px 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  boder-bottom: 1px solid #cccccc;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #959494;
    text-shadow: 0 0 2px black;
  }
`;

const Button = styled.button`
  width: 100%;
  outline: rgb(255, 0, 0);
  font-size: 16px;
  color: white;
  text-shadow: 0 0 2px gray;
  padding: 12px 0;
  margin-top: 20px;
  background: linear-gradient(45deg, #be7ed2, #f2d57c);
  opacity: 0.9;
  cursor: pointer;
  transition: opacity 500ms;
  border: none;
  border-radius: 50px;

  &:hover {
    opacity: 1;
  }
`;

const OrText = styled.section`
  font-size: 12px;
  color: #959494;
  margin-top: 20px;
`;

const SnsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  margin-top: 20px;
`;

const SnsBox = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;

const MemberShipBox = styled.footer`
  ${flexCenter};
  padding-top: 20px;
`;

const SignUp = styled.span`
  color: #ffffff;
`;

const None = styled.span`
  color: #ffffff;
  padding: 0 5px;
`;
const PasswordReset = styled.span`
  color: #ffffff;
`;
