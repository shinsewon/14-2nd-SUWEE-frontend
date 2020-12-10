import React from 'react';
import styled from 'styled-components';

const BottomText = ({ color, firstComment, secondComment, thirdComment, colorComment }) => {
  return (
    <CommentBox>
      <Comment>{firstComment}</Comment>
      <Comment color={color}>
        <span className="colorComment">{colorComment}</span>
        <span>{secondComment}</span>
      </Comment>
      <Comment>{thirdComment}</Comment>
    </CommentBox>
  );
};

export default BottomText;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Comment = styled.div`
  color: white;
  font-size: 15px;
  line-height: 20px;

  .colorComment {
    color: ${(props) => props.color || 'white'};
  }
`;
