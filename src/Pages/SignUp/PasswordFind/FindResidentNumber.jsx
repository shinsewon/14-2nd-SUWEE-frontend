import React from 'react';
import ResidentNumber from '../../../Components/ResidentNumber/ResidentNumber';
import styled from 'styled-components';
import { ROUND } from '../../../Pages/Login/data/data';
import { flexCenter, theme } from '../../../Styles/CommonStyle';

const FindResidentNumber = () => {
  return (
    <FindResidentNumberWrap>
      <ResidentNumber />
      <Phone>
        <input type="number" className="frontResident" placeholder={`YYMMDD`} />
        <span>-</span>
        <input type="number" className="backResident" />
        {ROUND.map((round) => {
          return <span key={round.id}>{round.round}</span>;
        })}
      </Phone>
      <BirthdayText>
        <span>생년월일과 주민번호 뒤 첫번째 숫자를 입력해 주세요.</span>
      </BirthdayText>
    </FindResidentNumberWrap>
  );
};

export default FindResidentNumber;

const FindResidentNumberWrap = styled.div`
  ${flexCenter}
  margin-top:50px;
  flex-direction: column;
`;

const Phone = styled.div`
  display: flex;
  width: 100%;
  height: 40px;

  .frontResident {
    width: 80%;
    border: 1px solid #cccccc;
    margin-right: 5px;

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

  .backResident {
    width: 7%;
    border: 1px solid #cccccc;
    margin-left: 5px;

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
    background-color: ${theme.yellow};
  }
  span {
    ${flexCenter}
    margin: 0 1px;
  }
`;

const BirthdayText = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0;
  padding-bottom: 20px;
  width: 100%;
  color: #999999;
  border-bottom: 1px solid #cccccc;
`;
