import { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import Nav from './../../Components/Nav/Nav';
import Footer from './../../Components/Footer/Footer';
import BookRoomTab from './../BookRoom/BookRoomTab/BookRoomTab';
import styled from 'styled-components';

const BookRoom = () => {
  return (
    <BookRoomContainer>
      <Nav />
      <UserProfile />
      <BookRoomTab />
      <Footer />
    </BookRoomContainer>
  );
};

const BookRoomContainer = styled.div`
  margin-top: 64px;
  width: 100%;
  ${({ theme }) => theme.flexCenter}
  flex-direction: column;
`;

export default BookRoom;
