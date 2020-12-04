import React from 'react';
import styled from 'styled-components';

const InputBox2 = ({ header, color, color2, placeholder, border, text, type, passwordCheck, handlePasswordCheck, validDoubleCheck }) => {
  return (
    <Wrap>
      <h3>{header}</h3>
      <Phone>
        <InputBox>
          <Input
            type={type}
            color={color}
            color2={color2}
            name="passwordRecheck"
            value={passwordCheck}
            placeholder={placeholder}
            onChange={handlePasswordCheck}
          />
        </InputBox>
      </Phone>
      <Text border={border}>
        {validDoubleCheck && <span>{text}</span>}
        {!validDoubleCheck && <span style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</span>}
      </Text>
    </Wrap>
  );
};

export default InputBox2;

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
    color: ${(props) => props.color2 || 'none'};
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
