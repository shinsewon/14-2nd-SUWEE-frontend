import React from 'react';
import SignUpNav from '../../../Components/SignUpNav/SignUpNav';
import PhoneCertify from './PhoneCertify';

const SignUpPhoneCertify = () => {
  return (
    <>
      <SignUpNav name={'휴대폰 인증'} />
      <PhoneCertify name="세원" />
    </>
  );
};

export default SignUpPhoneCertify;
