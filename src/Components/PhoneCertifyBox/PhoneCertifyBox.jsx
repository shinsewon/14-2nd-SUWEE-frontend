import React, { useState } from 'react';
import Timer from '../../Components/Timer/Timer';
import { CERTIFY_REQUEST } from '../../../src/config';
import styled from 'styled-components';
import { theme } from '../../Styles/CommonStyle';

const PhoneCertifyBox = ({ setUserNumber, userNumber, certifyNumber, setCertifyNumber }) => {
  const [click, setClick] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setUserNumber(value);
    let numStrChange = String(userNumber);
    if (numStrChange.length > 10) {
      alert('휴대폰 번호는 11자 이하여야 합니다.');
      return setUserNumber('');
    }
  };

  //(인증 요청)인증 번호 요청
  const showCertifyBox = () => {
    setClick(true);
    fetch(`${CERTIFY_REQUEST}`, {
      method: 'POST',
      body: JSON.stringify({
        phone_number: userNumber,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <h3>휴대폰 번호</h3>
      <Phone>
        <div className="inputBox">
          <input type="number" value={userNumber} placeholder={`휴대폰 번호 입력('-')`} onChange={handleChange}></input>
          <button className="certifyButton" onClick={showCertifyBox}>
            인증 요청
          </button>
        </div>
        <TimerBox>
          {click && (
            <input
              className="numberInputBox"
              value={certifyNumber}
              type="number"
              placeholder={`인증번호 입력`}
              onChange={(e) => setCertifyNumber(e.target.value)}
            ></input>
          )}
          {click && (
            <span className="timer">
              <Timer />
            </span>
          )}
        </TimerBox>
      </Phone>
    </>
  );
};

export default PhoneCertifyBox;

const Phone = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 5px;

  .inputBox {
    display: flex;
    height: 40px;

    input {
      width: 80%;
      border: 1px solid #cccccc;
      margin-right: 10px;

      &:focus {
        outline: none;
      }

      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &::placeholder {
        color: #cccccc;
        padding-left: 10px;
      }
    }
    button {
      width: 20%;
      font-size: 14px;
      border: none;
      outline: none;
      background-color: ${theme.yellow};
    }
  }
`;

const TimerBox = styled.div`
  display: flex;
  position: relative;

  .numberInputBox {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    border: 1px solid #cccccc;

    &:focus {
      outline: none;
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      color: #cccccc;
      padding-left: 10px;
    }
  }
  .timer {
    position: absolute;
    top: 50%;
    right: 10px;
    color:${theme.purpleOpacity}
    font-size: 16px;
  }
`;
