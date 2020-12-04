import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../Styles/CommonStyle';
const Timer = () => {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);
  return (
    <>
      <Time>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Time>
    </>
  );
};

export default Timer;

const Time = styled.span`
  color: ${theme.purpleOpacity};
  font-weight: 700;
`;
