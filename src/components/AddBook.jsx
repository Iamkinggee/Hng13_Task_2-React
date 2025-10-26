import React from 'react';
import BookForm from './BookForm';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const AddBook = ({ books, setBooks }) => {
  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate('/dash'); 
  };

  return (
    <>
      <Header />
   
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
     </>
  );
};

export default AddBook;
