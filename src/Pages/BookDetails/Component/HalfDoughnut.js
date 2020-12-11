import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { FIRST_API } from '../../../config';

function HalfDoughnut() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${FIRST_API}`)
      .then((res) => res.json())
      .then((res) => setData(res.Data.Data));
  }, []);

  const state = {
    labels: ['완독 가능🙋🏻‍♀️', '완독 불가😭'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['#37b067', '#dfdfdf'],
        hoverBackgroundColor: ['#37b067', '#dfdfdf'],
        hoverBorderWidth: 3,
        borderWidth: 0,
        data: [43, 57],
        radius: 100,
      },
    ],
  };

  const settings = {
    width: 400,
    height: 400,
    data: state,
    options: {
      legend: {
        display: true,
        position: 'right',
      },
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      cutoutPercentage: 70,
      responsive: false,
      responsiveAnimationDuration: 10,
    },
  };

  return (
    <Doughnut {...settings}>
      <First>완독할 확률</First>
      <Second>%</Second>
      <Third>
        경제경영 분야 평균 <span>%</span>
      </Third>
    </Doughnut>
  );
}

const First = styled.div`
  font-size: 13px;
  font-weight: 700;
  margin-top: 10px;
`;

const Second = styled.div`
  font-size: 24px;
  font-weight: bolder;
`;

const Third = styled.div`
  font-size: 12px;
  color: #a5a5a5;

  span {
    font-weight: bolder;
  }
`;

export default HalfDoughnut;
