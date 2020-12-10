import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter, Link } from 'react-router-dom';
import { TASTEBOOK_SUBCATEGORY_DATA } from '../../SuweeMain/mainData';
import { RECOMMENDEDBOOK_API } from '../../../config';
import styled from 'styled-components';

const RecommendedBook = () => {
  const [recommendedBook, setRecommendedBook] = useState([]);

  useEffect(() => {
    fetch(RECOMMENDEDBOOK_API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.recommend);
        setRecommendedBook(res.recommend);
      })
      .catch((err) => console.log('Catched errors!!', err));
  }, []);

  return (
    <Slide width='1280px'>
      <Category>
        이번주 취향별 추천 책
        <SubCategory>
          <ul>
            {TASTEBOOK_SUBCATEGORY_DATA.map((tag, idx) => (
              <Genre
                key={idx}
                selected={tag.target === tag.idx ? '#222f3e' : null}>
                {tag.name}
              </Genre>
            ))}
          </ul>
        </SubCategory>
      </Category>
      <TasteBoxContainer>
        {recommendedBook.map((tag, idx) => (
          <TasteBox key={idx}>
            <TasteBookInfo>
              <img src={tag.image} alt='추천책' />
            </TasteBookInfo>
            <TasteBookTitle>{tag.title}</TasteBookTitle>
          </TasteBox>
        ))}
      </TasteBoxContainer>
    </Slide>
  );
};
const Slide = styled.div`
  width: ${(props) => props.width};
  height: 600px;
  margin-top: 100px;
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
  ${({ theme }) => theme.flexCenter}
  border-radius: 20px;
  margin-right: 13px;
  font-size: 16px;
  font-weight: lighter;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#222f3e' : '#ffffff')};
  color: ${(props) => (props.selected ? '#ffffff' : '#222f3e')};
`;

const TasteBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const TasteBox = styled.div`
  margin: 30px 0 0 20px;
  width: 400px;
`;
const TasteBookInfo = styled.div`
  height: 179px;
  width: 400px;
  border-radius: 25px;
  background-color: #f5f4ee;
  ${({ theme }) => theme.flexCenter}
  img {
    width: 100px;
    height: 147px;
  }
`;
const TasteBookTitle = styled.div`
  height: 20px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
`;

export default RecommendedBook;
