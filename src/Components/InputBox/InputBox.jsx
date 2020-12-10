import React from 'react';
import styled from 'styled-components';

const InputBox = ({
  header,
  color,
  placeholder,
  border,
  text2,
  text,
  type,
  handlePassword,
  validPw,
  textChange,
  backgroundColor,
  handlePasswordCheck,
  validDoubleCheck,
  pwValue,
  name,
  secondSign,
  firstSign,
  rePwValue,
}) => {
  return (
    <Wrap>
      <h3>{header}</h3>
      <Phone color={color}>
        <InputContainer>
          <Input
            type={type}
            name={name}
            backgroundColor={backgroundColor}
            value={pwValue || rePwValue}
            placeholder={placeholder}
            onChange={handlePassword || handlePasswordCheck}
          />
        </InputContainer>
      </Phone>
      <Text border={border}>
        {validPw && firstSign && <TextBox>{text}</TextBox>}
        {!validPw && firstSign && <TextBox validPw={validPw}>{textChange}</TextBox>}
        {validDoubleCheck && secondSign && <SubTextBox>{text2}</SubTextBox>}
        {!validDoubleCheck && secondSign && <SubTextBox validDoubleCheck={validDoubleCheck}>{textChange}</SubTextBox>}
      </Text>
    </Wrap>
  );
};

export default InputBox;

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

const InputContainer = styled.div`
  display: flex;
  height: 40px;
`;

const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.backgroundColor || props.backgroundColor || 'none'};
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
  border-bottom: ${({ border }) => (border ? '1px solid #999999' : '')};

  span {
    margin-bottom: ${(props) => (props.border === 'true' ? '10px' : '')};
  }
`;

const TextBox = styled.span`
  color: ${(props) => (props.validPw === false ? 'red' : '#999999')};
`;

const SubTextBox = styled.span`
  color: ${(props) => (props.validDoubleCheck === false ? 'red' : '#999999')};
`;
