import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { LOGINIMAGES } from './data/data';
import { KAKAO_API } from '../../config';
import { flexCenter } from '../../Styles/CommonStyle';

const Login = () => {
  const history = useHistory();
  const goToKakao = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        console.log('authObj : ', authObj);
        fetch(`${KAKAO_API}`, {
          method: 'POST',
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log('res : ', res);
            localStorage.setItem('Kakao_token', res.access_token);
            if (res.access_token) {
              alert('SUWEE의 서재에 오신걸 환영합니다!');
              history.push('/signup');
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
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
          <InputPhoneId type="number" placeholder="휴대폰 번호"></InputPhoneId>
          <InputPassword type="password" placeholder="비밀번호"></InputPassword>
          <Button>휴대폰 번호로 로그인</Button>
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
