import React, { useEffect } from 'react';
import { font18, font16 } from '../../../Styles/CommonStyle';
import styled from 'styled-components';

const PayInput = ({ header, color, text, phoneNumber, setPhoneNember }) => {
  useEffect(() => {
    setPhoneNember();
  }, []);
  return (
    <Wrap>
      <h3>{header}</h3>
      <Phone>
        <InputBox>
          <Input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            color={color}
            placeholder="일단 휴대폰 정보 나중에 들어가야함"
            onChange={() => setPhoneNember('01097751541')}
          />
        </InputBox>
      </Phone>
      <Text>
        <span>{text}</span>
      </Text>
    </Wrap>
  );
};

export default PayInput;

const Wrap = styled.div`
  margin-top: 30px;
  h3 {
    ${font18}
  }
`;

const Phone = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 10px;
`;

const InputBox = styled.div`
  display: flex;
  height: 40px;
`;

const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.color || 'none'};
  outline: none;
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
`;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0;
  width: 100%;
  font-size: 12px;
  color: #999999;
  border-bottom: ${(props) => (props.border === 'true' ? '1px solid #999999' : '')};

  span {
    margin-bottom: ${(props) => (props.border === 'true' ? '10px' : '')};
  }
`;
