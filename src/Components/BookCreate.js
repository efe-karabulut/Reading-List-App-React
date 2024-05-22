import { useState } from "react";
import useBooksContext from "../Hooks/use-books-context";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

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
