import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LOGINIMAGES } from '../Login/data/data';
import { flexCenter, theme } from '../../Styles/CommonStyle';

const SignUp = () => {
  return (
    <StyleLogin>
      <BackgroundImgContainer>
        <LoginBoxContainer>
          <img className="backgroundImg" src="/images/library2.jpg" alt="배경화면" />
        </LoginBoxContainer>
      </BackgroundImgContainer>
      <LoginContainer>
        <LogoWrap>
          <Wrap>
            <TextBox>
              <h2 className="freeOneMonth">
                첫달은 <br />
                <span>무료로</span>
                <br />
                시작하기
              </h2>
            </TextBox>
          </Wrap>
          <InputPhoneId type="number" placeholder="휴대폰 번호"></InputPhoneId>
          <InputPassword type="password" placeholder="비밀번호"></InputPassword>
          <Button>
            <Link to="/signupphone">휴대폰 번호로 시작하기</Link>
          </Button>
          <OrText>⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼ 또는 ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</OrText>
          <SnsContainer>
            {LOGINIMAGES.map((img) => {
              return (
                <SnsBox>
                  <img key={img.id} src={img.src} alt={img.alt} />
                </SnsBox>
              );
            })}
          </SnsContainer>
          <MemberShipBox>
            <Link to="/">이미 회원이신가요? 로그인</Link>
          </MemberShipBox>
        </LogoWrap>
      </LoginContainer>
    </StyleLogin>
  );
};

export default SignUp;

const StyleLogin = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  box-shadow: inset 0 -55em 50em 18em rgba(0, 0, 0, 0.95);
`;

const BackgroundImgContainer = styled.div`
  ${flexCenter};
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
  height: 100%;
  height: 80%;
  z-index: 9;
`;

const Wrap = styled.div`
  height: 450px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 50px 0;

  .freeOneMonth {
    color: white;
    font-size: 48px;
    font-family: 'Noto Serif KR', serif;
    transform: rotate(-0.007turn);

    span {
      color: ${theme.yellow};
      line-height: 60px;
    }
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
  color: #fff;
`;
