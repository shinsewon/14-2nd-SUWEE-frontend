import { css } from 'styled-components';

export const commonContainer = css`
  width: 700px;
  margin: 0 auto;
`;

export const clearFix = css`
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const positionCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const font18 = css`
  font-size: 18px;
  font-weight: 700;
  color: #333333;
`;

export const font16 = css`
  font-size: 16px;
  color: #666666;
`;

export const theme = {
  yellow: 'rgba(252, 235, 96, 1)',
  purple: 'rgba(164, 81, 247, 1)',
  boldPurple: '#6A31A4',
  yellowOpacity: 'rgba(252, 235, 96, 0.5)',
  purpleOpacity: 'rgba(164, 81, 247, 0.5)',
  commonContainer,
  clearFix,
  positionCenter,
  flexCenter,
  font18,
  font16,
};

export default theme;
