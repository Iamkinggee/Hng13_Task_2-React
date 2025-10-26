// @ts-nocheck

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [book, setBook] = useState({
    bookname: props.book ? props.book.bookname : '',
    author: props.book ? props.book.author : '',
    quantity: props.book ? props.book.quantity : '',
    price: props.book ? props.book.price : '',
    date: props.book ? props.book.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { bookname, author, price, quantity } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date()
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div  className="text-[#222] text-lg w-[70%] mx-auto mt-12 pt-10 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] p-10">
      {errorMsg && <p className="text-[#f21e08] bg-[#fff0f0] p-2 rounded">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name" className="mb-6">
          <Form.Label className="block font-semibold mb-2">Name</Form.Label>
          <Form.Control
             className="block w-full border border-gray-300 text-gray-600 bg-white h-12 text-lg rounded-none mb-6 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-300"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter Name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Package: vip or regular</Form.Label>
          <Form.Control
           className="block w-full border border-gray-300 text-gray-600 bg-white h-12 text-lg rounded-none mb-6 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-300"
            type="text"
            name="author"
            value={author}
            placeholder="Enter Package"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="block w-full border border-gray-300 text-gray-600 bg-white h-12 text-lg rounded-none mb-6 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-300"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter Quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price </Form.Label>
          <Form.Control
           className="block w-full border border-gray-300 text-gray-600 bg-white h-12 text-lg rounded-none mb-6 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-300"
            type="text"
            name="price"
            value={price}
            placeholder="Enter Price ($)"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit"  className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded transition-all duration-300 w-full">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;








