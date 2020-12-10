import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SignUpNav from '../../../Components/SignUpNav/SignUpNav';
import IdCheckBox from '../../../Components/IdCheckBox/IdCheckBox';
import styled from 'styled-components';
import { AGREEMENT } from '../../../data';
import { DUBBLE_CHECK } from '../../../config';
import { flexCenter, theme } from '../../../Styles/CommonStyle';

const Agreement = ({ state, passwordCheck }) => {
  const location = useLocation();
  const history = useHistory();
  const [allCheck, setAllCheck] = useState(false);
  const [checkBox, setCheckBox] = useState(AGREEMENT);
  const [userId, setUserId] = useState('');
  const [usableId, setUsableId] = useState(false);

  //백엔드와 맞춰볼 location.state 확인용입니다.
  // console.log('passwordCheck : ', location.state.passwordCheck);
  // console.log('userNumber : ', location.state.test.userNumber);

  const handleAllCheck = () => {
    let checkBox2 = [...checkBox].map((check) => {
      return (check.isCheck = !allCheck);
    });
    setAllCheck(!allCheck);
  };

  const handelCheck = (e) => {
    const checkBox2 = [...checkBox];
    let filterCheckBox = checkBox2.map((check) => {
      if (check.id === e.id) {
        check.isCheck = !check.isCheck;
      }
      return check;
    });
    setCheckBox(filterCheckBox);
    let arr = filterCheckBox.every((el) => {
      return el.isCheck === true;
    });

    if (arr) {
      setAllCheck(!allCheck);
    }
    if (!arr) {
      setAllCheck(false);
    }
  };

  const goToMain = () => {
    let comparison = checkBox.filter((el) => {
      return !el.isCheck && el;
    });
    if (comparison.length) {
      alert(`'${comparison[0].comment}'를 체크해주세요.`);
    }
    if (!comparison.length && usableId) {
      alert('가입을 축하드립니다!');
      history.push('/login');
    }
    if (!usableId) {
      alert('필명 중복 체크 해주세요.');
    }
  };

  // 중복확인 props handle(백엔드랑 통신)
  const handleIdCheck = (e) => {
    e.preventDefault();
    fetch(`${DUBBLE_CHECK}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname: userId, phone_number: location.state.test.userNumber, password: location.state.passwordCheck }),
    }).then((res) => {
      if (res.status === 201) {
        alert('사용가능한 필명 입니다.');
        setUsableId(true);
      }
      if (res.status === 409) {
        alert('이미 사용중인 필명입니다.');
      }
    });
  };

  return (
    <>
      <SignUpNav name={'서비스 이용 동의 및 확인'} />
      <Wrap>
        <AgreementContainer>
          <h3>약관동의</h3>
          <AgreementBox color={allCheck}>
            <div className="allAgreementBox">
              <input id="allCheck" type="checkbox" />
              <label for="allCheck" className="allAgreement" onClick={handleAllCheck} name="all" checked={allCheck} />
              <span>전체 동의하기</span>
            </div>
            <div className="line"></div>
            {AGREEMENT.map((agr) => {
              return (
                <MapAgreementBox key={agr.id} subColor={agr.isCheck}>
                  <input id={agr.id} type="checkbox" />
                  <label for={agr.id} className="choice" onClick={() => handelCheck(agr)} checked={agr.isCheck} />
                  <span>{agr.choice}</span>
                  <span className="comment">{agr.comment}</span>
                </MapAgreementBox>
              );
            })}
          </AgreementBox>
          <div className="line" />
          <IdCheckBox title="필명" handleIdCheck={handleIdCheck} userId={userId} setUserId={setUserId} />
        </AgreementContainer>
        <NextBox onClick={(checkBox) => goToMain(checkBox)}>가입완료</NextBox>
      </Wrap>
    </>
  );
};

export default Agreement;

const Wrap = styled.div`
  ${flexCenter}
  flex-direction:column;
  width: 100%;
  height: 100%;
`;

const AgreementContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 100%;

  h3 {
    margin: 20px 0 10px 0;
    font-size: 20px;
  }

  .line {
    ${flexCenter}
    margin:8px 10px;
    border-bottom: 0.5px solid #cccccc;
  }
`;

const AgreementBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  padding-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 10px;

  .allAgreementBox {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin: 20px 0 20px 10px;

    input[id='allCheck'] {
      display: none;
    }

    input[id='allCheck'] + label {
      width: 20px;
      height: 20px;
      margin: 0 5px 0 0;
      border-radius: 50%;
      background-color: ${(props) => (props.color === true ? theme.yellow : 'white')};

      border: 2px solid ${theme.yellow};
    }
  }
`;

const MapAgreementBox = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0 0 10px;
    font-size: 15px;

    input[type='checkbox'] {
      display: none;
    }

    input[type='checkbox'] + label {
      width: 15px;
      height: 15px;
      margin: 0 5px 0 0;
      background-color: ${(props) => (props.subColor === true ? theme.yellow : 'white')};
      border: 2px solid ${theme.yellow};
    }
  }

  .line {
    ${flexCenter}
    margin:30px;
    border-bottom: 0.5px solid #cccccc;
  }

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
