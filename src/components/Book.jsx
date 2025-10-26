// // delet works

// import React from 'react';
// import { Button, Card } from 'react-bootstrap';

// const Book = ({
//   id,
//   bookname,
//   author,
//   price,
//   quantity,
//   date,
//   handleRemoveBook
// }) => {
//   return (
//     <Card style={{ width: '18rem' }} className="book">
//       <Card.Body>
//         <Card.Title className="book-title">{bookname}</Card.Title>
//         <div className="book-details">
//           <div>Author: {author}</div>
//           <div>Quantity: {quantity} </div>
//           <div>Price: {price} </div>
//           <div>Date: {new Date(date).toDateString()}</div>
//         </div>
//         <Button variant="primary">Edit</Button>{' '}
//         <Button variant="danger" onClick={() => handleRemoveBook(id)}>
//           Delete
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Book;








// import React from 'react';
// import { Button, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Book = ({
//   id,
//   bookname,
//   author,
//   price,
//   quantity,
//   date,
//   handleRemoveBook
// }) => {
//   const navigate = useNavigate();

//   return (
//     <Card style={{ width: '18rem' }} className="[box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] ">
//       <Card.Body>
//         <Card.Title className="book-title">{bookname}</Card.Title>
//         <div className="book-details">
//           <div>Author: {author}</div>
//           <div>Quantity: {quantity}</div>
//           <div>Price: {price}</div>
//           <div>Date: {new Date(date).toDateString()}</div>
//         </div>
//         <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>
//           Edit
//         </Button>{' '}
//         <Button variant="danger" onClick={() => handleRemoveBook(id)}>
//           Delete
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Book;





import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Trash, X } from "react-feather"; // icons for delete + close

const Book = ({
  id,
  bookname,
  author,
  price,
  quantity,
  date,
  handleRemoveBook,
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Confirm deletion
  const confirmDelete = () => {
    handleRemoveBook(id);
    setOpen(false);
  };

  return (
    <>
      <Card
        style={{ width: "15rem", margin:"5px" }}
        className=" [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)]  items-center "
      >
        <Card.Body>
          <Card.Title className="book-title">{bookname}</Card.Title>
          <div className="book-details">
            <div>Package: {author}</div>
            <div>Quantity: {quantity}</div>
            <div>Price: {price}</div>
            <div>Date: {new Date(date).toDateString()}</div>
          </div>

          <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={() => setOpen(true)}>
             Delete
          </Button>
        </Card.Body>
      </Card>

      {/* === Inline Modal Component === */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 flex justify-center items-center 
            bg-black/20 backdrop-blur-sm z-10
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative bg-white  rounded-xl shadow-lg p-6 
              w-72 transition-all scale-100 opacity-100
            "
          >
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-2 right-2 p-1 rounded-lg text-gray-400 
                hover:bg-gray-50 hover:text-gray-600
              "
            >
              <X size={18} />
            </button>

            <div className="text-center">
              <Trash size={48} className="mx-auto text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-gray-800">Confirm Delete</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">
                Are you sure you want to delete <b>{bookname}</b>?
              </p>

              <div className="flex gap-3">
                <button
                  className="btn btn-danger w-full"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
                <button
                  className="btn btn-light w-full"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Book;
