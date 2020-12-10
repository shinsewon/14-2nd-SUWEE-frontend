/*eslint-disable */
import { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineComment } from 'react-icons/ai';
import './Footer.scss';

const FOOTERMENU = [
  {
    menuName: '고객센터',
  },
  {
    menuName: '환불신청',
  },
  {
    menuName: '이용약관',
  },
  {
    menuName: '개인정보처리방침',
  },
  {
    menuName: '저작권/도서오류 신고',
  },
  {
    menuName: '뷰어 다운로드',
  },
  {
    menuName: '종료 예정 도서',
  },
  {
    menuName: 'B2B 문의',
  },
  {
    menuName: '콘텐츠 문의',
  },
];
function Footer() {
  let [footerMenu, dropDown] = useState(false);

  return (
    <FooterBackground>
      <FooterContainer>
        <div className='footerTop'>
          <div className='companyLogo'>(주)수위의 서재</div>
          <div className='snsBox'>
            <ul>
              <li>
                <AiFillYoutube />
              </li>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <AiOutlineComment />
              </li>
            </ul>
          </div>
        </div>
        <div className='footerMiddle'>
          <p
            onClick={() => {
              dropDown(!footerMenu);
            }}>
            사업자 정보 펼쳐보기 ▽
          </p>
          <div className='companyInfoSide'>
            {footerMenu === true ? <CompanyInfo /> : null}
          </div>
        </div>
        <div className='footerMenu'>
          <ul>
            {FOOTERMENU.map((menu, idx) => {
              return <li key={idx}>{menu.menuName}</li>;
            })}
          </ul>
          <small>Copyright ⓒ2020 수위의 서재 All Rights Reserved.</small>
        </div>
      </FooterContainer>
    </FooterBackground>
  );
}

function CompanyInfo() {
  return (
    <div className='companyInfo'>
      <p>대표이사 : 고수희 &nbsp;&nbsp; 사업자등록번호:123-45-67890</p>
      <p>
        통신판매업 신고번호 : 2015-서울강남-2301호 &nbsp;&nbsp; 주소 : 서울
        강남구 테헤란로 427 위워크타워
      </p>
      <p>
        고객정보보호 책임자 : 고수희(suhee@suwee.town) 마케팅 제휴 문의 :
        bussiness@suwee.town
      </p>
    </div>
  );
}

const FooterBackground = styled.div`
  width: 100%;
  height: 200px;
  /* position: fixed; */
  /* bottom: 0; */
  /* left: 0; */
  display: flex;
  border-top: 1px solid #eee;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const FooterContainer = styled.div`
  width: 1280px;
  max-width: 1280px;
  height: 200px;
  padding: 20px 13px 5px 13px;
  position: relative;
`;

export default Footer;
