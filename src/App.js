import { useEffect } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import useBooksContext from "./Hooks/use-books-context";

function App() {
  const { fetchAllBooks } = useBooksContext()
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
