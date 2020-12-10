import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../Styles/CommonStyle';

const SignUpNav = (props) => {
  return (
    <PhoneCertifyBox>
      <nav>
        <h2>{props.name}</h2>
      </nav>
    </PhoneCertifyBox>
  );
};

export default SignUpNav;

const PhoneCertifyBox = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100%;
  background-color: white;

  nav {
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    h2 {
      ${flexCenter}
      height: 50px;
      color: #000000;
      font-size: 18px;
      font-weight: 700;
    }
  }
`;
