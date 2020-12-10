import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { BESTSELLER_API } from '../../../config';
import { BESTSELLER_SUBCATEGORY_DATA } from '../../SuweeMain/mainData';
// import '../../../Styles/CommonStyle';
// import axios from 'axios';

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);
  const [keyword, setKeyword] = useState(1);

  let history = useHistory();

  const handleClick = () => {
    history.push(`/detail/${this.props.product.id}`);
  };

  function changeCategory(id) {
    setKeyword(id);
    // 클릭한 e.target.id ===BESTSELLER_SUBCATEGORY_DATA.id 때
    // 클릭한 id에 해당하는 리스트만 출력한다.
    //color 변경
    // e.target === props.selected
  }
  useEffect(() => {
    // fetch(`${BEAPIROOT}/book?limit=55`)

    // axios.get(BOOKLIST)
    // .then((res) => {
    //   console.log(res.oneMonthBook);
    //   setNewBook(res.oneMonthBook);
    // });

    // fetch(`${BOOKLIST}/?limit=20`)
    fetch(`${BESTSELLER_API}&keyword=${keyword}`)
      .then((res) => res.json())
      .then((res) => {
        setBestSeller(res.bestSellerBook);
      })
      .catch((err) => console.log('Catched errors!!', err));
  }, [keyword]);

  return (
    <Slide width='1280px'>
      <Category>
        지금 서점 베스트 셀러
        <SubCategory>
          <ul>
            {BESTSELLER_SUBCATEGORY_DATA.map((tag) => (
              //클릭한 tag.name만 블랙으로
              //btnStatus = false, 클릭된 것만 ture
              <Genre
                key={tag.id}
                onClick={() => changeCategory(tag.id)}
                selected={tag.target === tag.idx ? '#222f3e' : null}>
                {tag.name}
              </Genre>
            ))}
          </ul>
        </SubCategory>
      </Category>
      <SlideWrapper>
        {bestSeller.map((tag, idx) => {
          return (
            <Item key={idx} onClick={handleClick}>
              <img src={tag.image} alt='책' />
              <Title>{tag.title}</Title>
              <Author>{tag.author}</Author>
            </Item>
          );
        })}
      </SlideWrapper>
    </Slide>
  );
};

const Slide = styled.div`
  width: ${(props) => props.width};
  height: 370px;
  margin-top: 50px;
`;

const Category = styled.div`
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

const SubCategory = styled.div`
  height: 60px;
  border-bottom: 1.5px solid #222f3e;
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  ul {
    display: flex;
    justify-content: left;
  }
`;
const Genre = styled.div`
  width: auto;
  height: 35px;
  padding: 0px 17px;
  line-height: 35px;
  /* @include flexCenter; */
  ${({ theme }) => theme.flexCenter}
  /* ${({ theme }) => console.log('확인 : ', theme.flexCenter)} */
  border: 1.5px solid #222f3e;
  border-radius: 20px;
  margin-right: 13px;
  font-size: 16px;
  font-weight: lighter;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#222f3e' : '#ffffff')};
  color: ${(props) => (props.selected ? '#ffffff' : '#222f3e')};
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 320px;
  padding: 0px 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  overflow-x: auto;
  margin-bottom: -20px;
  &::-webkit-scrollbar {
    visibility: hidden;
  }
`;
const Item = styled.div`
  height: 265px;
  margin-top: 35px 7px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  img {
    width: 145px;
    height: 214px;
    object-fit: contain;
  }
`;
const Title = styled.div`
  width: 145px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
`;
const Author = styled.div`
  width: 145px;
  height: 20px;
  margin-top: 3px;
  font-size: 12px;
  color: #909090;
`;

export default BestSeller;
