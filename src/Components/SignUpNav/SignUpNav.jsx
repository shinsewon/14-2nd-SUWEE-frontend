import React from 'react';
import styled from 'styled-components';

const SignUpNav = (props) => {
  return (
    <div>
      <PhoneCertifyBox>
        <nav>
          <h2>{props.name}</h2>
        </nav>
      </PhoneCertifyBox>
    </div>
  );
};

export default SignUpNav;

const PhoneCertifyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;

  nav {
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      color: #000000;
      font-size: 18px;
      font-weight: 700;
    }
  }
`;
