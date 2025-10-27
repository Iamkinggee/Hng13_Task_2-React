import React from 'react';
import BookForm from './BookForm';
import { useParams, useNavigate } from 'react-router-dom';
import  Nav  from '../components/Nav';

const EditBook = ({ books, setBooks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((b) => b.id !== id);
    setBooks([book, ...filteredBooks]);
    navigate('/list');
  };

  return (
    <div>
      <Nav/>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
