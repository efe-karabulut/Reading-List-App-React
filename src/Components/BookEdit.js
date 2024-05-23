import { useState } from "react";

import useBooksContext from "../Hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { updateBookById } = useBooksContext();

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    updateBookById(book.id, title);
  };

  return (
    <form onSubmit={handleFormSubmit} className="book-edit">
      <label>Title</label>
      <input
        autoFocus
        value={title}
        onChange={handleInputChange}
        placeholder="Enter New Title"
        className="input"
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
