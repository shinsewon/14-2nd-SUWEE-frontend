import React from 'react';
import styled from 'styled-components';

const InputBox1 = ({ header, color, placeholder, border, text, type, handlePassword, password, validPw }) => {
  const red = { color: 'red' };
  return (
    <Wrap>
      <h3>{header}</h3>
      <Phone color={color}>
        <InputBox>
          <Input type={type} name="passwordBox" value={password} placeholder={placeholder} onChange={handlePassword} />
        </InputBox>
      </Phone>
      <Text border={border}>
        {validPw && <span>{text}</span>}
        {!validPw && <span style={{ color: 'red' }}>비밀번호는 영문 대/소문자, 숫자 및 특수문자의 조합으로 8자 이상 입력해야 합니다.</span>}
      </Text>
    </Wrap>
  );
};

export default InputBox1;

const Wrap = styled.div`
  margin-top: 20px;
  h3 {
    font-size: 16px;
    color: #666666;
  }
`;

const Phone = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 5px;
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
  margin: 5px 0;
  width: 100%;
  font-size: 12px;
  color: #999999;
  border-bottom: ${(props) => (props.border === 'true' ? '1px solid #999999' : '')};

  span {
    margin-bottom: ${(props) => (props.border === 'true' ? '10px' : '')};
  }
`;
