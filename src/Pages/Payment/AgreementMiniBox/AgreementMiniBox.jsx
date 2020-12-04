import React, { useState } from 'react';
import { PAYAGREEMENT, NOTICE } from '../../../data';
import styled from 'styled-components';
import { flexCenter, theme } from '../../../Styles/CommonStyle';

const AgreementMiniBox = ({ allCheck, setAllCheck, setCheckBox }) => {
  const handleAllCheck = () => {
    [...PAYAGREEMENT].map((agr) => {
      return (agr.isCheck = !allCheck);
    });
    setAllCheck(!allCheck);
  };

  const handleCheck = (e) => {
    let MapCheckBox = [...PAYAGREEMENT].map((agr) => {
      if (agr.id === e.id) {
        agr.isCheck = !agr.isCheck;
      }
      return agr;
    });
    setCheckBox(MapCheckBox);
    let AllTrue = MapCheckBox.every((el) => {
      return el.isCheck === true;
    });
    AllTrue ? setAllCheck(!allCheck) : setAllCheck(false);
  };
  return (
    <Wrap>
      <AgreementBox color={allCheck}>
        <div className="allAgreementBox">
          <input id="ck1" type="checkbox" />
          <label for="ck1" className="allAgreement" name="all" checked={allCheck} onClick={handleAllCheck} />
          <span>전체 약관 동의하기</span>
        </div>
        <Line />
        {PAYAGREEMENT.map((agr) => {
          return (
            <MapAgreementBox key={agr.id} color2={agr.isCheck}>
              <input id={agr.id} type="checkbox" />
              <label for={agr.id} className="choice" checked={agr.isCheck} onClick={() => handleCheck(agr)} />
              <span>{agr.choice}</span>
              <span className="comment">{agr.comment}</span>
            </MapAgreementBox>
          );
        })}
      </AgreementBox>
      <TextBox>
        {[...NOTICE].map((notice) => {
          return (
            <div className="text" key={notice.id}>
              {notice.round}
              {notice.comment}
            </div>
          );
        })}
      </TextBox>
    </Wrap>
  );
};

export default AgreementMiniBox;

const Wrap = styled.div`
  margin-top: 30px;
`;

const AgreementBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  padding-bottom: 20px;

  .allAgreementBox {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    margin: 20px 0 15px 0;

    input[id='ck1'] {
      display: none;
    }

    input[id='ck1'] + label {
      width: 15px;
      height: 15px;
      margin: 0 5px 0 0;
      background-color: ${(props) => (props.color === true ? theme.yellow : 'white')};
      border: 2px solid ${theme.yellow};
    }
  }
`;

const MapAgreementBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-size: 15px;

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label {
    width: 15px;
    height: 15px;
    margin: 0 5px 0 0;
    background-color: ${(props) => (props.color2 === true ? theme.yellow : 'white')};
    border: 2px solid ${theme.yellow};
  }
`;

const Line = styled.div`
  ${flexCenter}
  border-bottom: 0.5px solid #cccccc;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-size: 12px;
    line-height: 20px;
    color: #999999;
  }
`;
