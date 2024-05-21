import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

const randomNumber = 1000000;



function App() {
  const [books, setBook] = useState([]);

  const createBook = (bookTitle) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * randomNumber), title: bookTitle },
    ];
    setBook(updateBooks);
  };

  const deleteBookByID = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBook(updatedBooks);
  };

  const updateBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      } 
      return book;
    });
    setBook(updatedBooks);
  };

  return (
    <div className="app">
    <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList
        onEdit={updateBookById}
        onDelete={deleteBookByID}
        books={books}
      />
    </div>
  );
}

export default App;
