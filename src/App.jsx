

// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Header from './components/Header' 
// import AddBook from './components/AddBook';
// import BooksList from './components/BooksList'
// import useLocalStorage from './hooks/useLocalStorage'
// import EditBook from './components/EditBook';






// const App = () => {
//   const [books, setBooks] = useLocalStorage('books', []);

//   return (
//     <>
//       <Header />
//       <div className="main-content">
//         <Routes>
//           <Route
//             path="/"
//             element={<BooksList books={books} setBooks={setBooks} />}
//           />
//           <Route
//             path="/add"
//             element={<AddBook books={books} setBooks={setBooks} />}
//           />
//           <Route
//             path="/edit/:id"
//             element={<EditBook books={books} setBooks={setBooks} />}
//           />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </div>
//     </>
//   );
// };

// export default App;
















import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header' 
import AddBook from './components/AddBook';
import BooksList from './components/BooksList'
import useLocalStorage from './hooks/useLocalStorage'
import EditBook from './components/EditBook';
import Hero from './Pages/Hero';
import Form1 from './Pages/Form1'
import Home from './Pages/Home';






const App = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <>
      {/* <Header /> */}
      <div className="main-content">
        <Routes>

          
          <Route
            path="/"
            element={<Hero/>}
          />
          
          <Route
            path="/header"
            element={<Header/>}
          />

          <Route
            path="/list"
            element={<BooksList books={books} setBooks={setBooks} />}
          />

          <Route
            path="/home"
            element={<Home />}
          />


          <Route
            path="/Form1"
            element={<Form1  />}
          />

          <Route
            path="/add"
            element={<AddBook books={books} setBooks={setBooks} />}
          />

          <Route
            path="/edit/:id"
            element={<EditBook books={books} setBooks={setBooks} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
};

export default App;







