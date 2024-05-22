import { useState, useEffect } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import axios from "axios";

function App() {
  const [books, setBook] = useState([]);

  const fetchAllBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBook(response.data);
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const createBook = async (bookTitle) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: bookTitle,
    });
    const updateBooks = [...books, response.data];
    setBook(updateBooks);
  };

  const deleteBookByID = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBook(updatedBooks);
  };

  const updateBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
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
