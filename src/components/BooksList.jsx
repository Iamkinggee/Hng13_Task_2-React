

import React from "react";
import _ from "lodash";
import Book from "../components/Book";
import Nav from '../components/Nav';

const BooksList = ({ books, setBooks }) => {
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <>
   <Nav/>

    <div className="flex flex-wrap justify-center items-center">

      {!_.isEmpty(books) ? (
        books.map((book) => (
          <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
        ))
      ) : (
        <p className="text-[#0e1b1e] text-3xl font-bold pt-12 ml-2">No Tickets available. Please add some Tickets.</p>
      )}
    </div>
      </>
  );
};

export default BooksList;





















