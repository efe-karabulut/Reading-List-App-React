import { useEffect, useContext } from "react";
import BooksContext from "./Context/books";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const { fetchAllBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
