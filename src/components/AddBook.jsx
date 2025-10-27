import React from 'react';
import BookForm from './BookForm';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

const AddBook = ({ books, setBooks }) => {
  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate('/list'); 
  };

  return (
    <>
      <Nav />
   
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
     </>
  );
};

export default AddBook;
