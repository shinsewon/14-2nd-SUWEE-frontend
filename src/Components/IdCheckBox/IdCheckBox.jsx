import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ADJECTIVE, NAME } from '../../data';
import { flexCenter, theme } from '../../Styles/CommonStyle';

const IdCheckBox = ({ title, userId, setUserId, handleIdCheck }) => {
  const [value, setValue] = useState('');

  const randomName = () => {
    const adjective = ADJECTIVE[Math.floor(Math.random() * ADJECTIVE.length)];
    const name = NAME[Math.floor(Math.random() * NAME.length)];
    const funnyName = [adjective, name].join(' ');
    return funnyName;
  };

  useEffect(() => {
    setUserId(randomName());
  }, []);

  return (
    <>
      <h3>{title}</h3>
      <IdCheckContainer>
        <InputBox>
          <Input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
          <Button onClick={handleIdCheck}>중복 확인</Button>
        </InputBox>
      </IdCheckContainer>
    </>
  );
};

export default IdCheckBox;

const IdCheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const InputBox = styled.div`
  display: flex;
  height: 40px;
`;

const Input = styled.input`
  width: 80%;
  border: 1px solid #cccccc;
  margin-right: 10px;
  padding-left: 15px;

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

const Button = styled.button`
  width: 20%;
  font-size: 14px;
  border: none;
  outline: none;
  background-color: ${theme.yellow};
`;
const NextBox = styled.footer`
  ${flexCenter}
  position:absolute;
  bottom: 0;
  width: 700px;
  height: 56px;
  font-size: 16px;
  font-weight: 700;
  background-color: ${theme.yellow};
`;
