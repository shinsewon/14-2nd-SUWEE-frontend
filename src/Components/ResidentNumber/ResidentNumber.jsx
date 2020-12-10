import React from 'react';
import { ROUND } from '../../../src/data';
import styled from 'styled-components';
import { flexCenter, theme } from '../../Styles/CommonStyle';

const ResidentNumber = ({
  border,
  frontResidentNum,
  setFrontResident,
  backResidentNum,
  setBackResident,
  setBackResidentCheck,
  setFrontResidentCheck,
}) => {
  const handleFrontChange = (e) => {
    setFrontResident(e.target.value);
    let numStringChange = String(frontResidentNum);
    if (numStringChange.length > 5) {
      alert('주민등록번호 앞자리를 확인해주시기 바랍니다.');
      setFrontResident('');
    }
    return setFrontResidentCheck(true);
  };

  const handleBackChange = (e) => {
    const { value } = e.target;
    setBackResident(value);
    let pattern = /^\d{1}$/;
    if (!pattern.test(value)) {
      return setBackResident('');
    }
    setBackResidentCheck(true);
  };

  return (
    <FindResidentNumberWrap>
      <div className="textBox">
        <span className="residentNumber">주민등록번호 앞 7자리</span>
        <span className="check">(본인확인 용도)</span>
      </div>
      <Wrap>
        <input type="number" value={frontResidentNum} className="frontResident" placeholder={`YYMMDD`} onChange={handleFrontChange} />
        <span>-</span>
        <input type="number" value={backResidentNum} className="backResident" onChange={handleBackChange} />
        {ROUND.map((round) => {
          return <span key={round.id}>{round.round}</span>;
        })}
      </Wrap>
      <BirthdayText border={border}>
        <span>생년월일과 주민번호 뒤 첫번째 숫자를 입력해 주세요.</span>
      </BirthdayText>
    </FindResidentNumberWrap>
  );
};

export default ResidentNumber;

const FindResidentNumberWrap = styled.div`
  ${flexCenter}
  margin-top:50px;
  flex-direction: column;

  .textBox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 5px;

    .residentNumber {
      font-size: 20px;
    }
    .check {
      font-size: 12px;
      color: #666666;
    }
  }
`;

const Wrap = styled.div`
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
  border-bottom: ${(props) => (props.border === 'true' ? '1px solid #cccccc' : '')};
`;
