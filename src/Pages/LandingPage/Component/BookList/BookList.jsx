import React, { useEffect, useState } from 'react';
import BookComponent from './Book';

const BookList = ({ books }) => {
  return <BookComponent books={books} />;
};

export default BookList;
