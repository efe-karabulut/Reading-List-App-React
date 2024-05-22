import { useState, useContext } from "react";
import BooksContext from "../Context/books";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle(" ");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            className="input"
            value={title}
            placeholder="Add a book..."
            onChange={handleChange}
          />
          <button className="button">Create</button>
        </label>
      </form>
    </div>
  );
}

export default BookCreate;
