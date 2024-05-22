import BookEdit from "./BookEdit";

import { useState, useContext } from "react";

import BooksContext from "../Context/books";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookByID } = useContext(BooksContext);

  const handleDeleteClick = () => {
    deleteBookByID(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button onClick={handleEditClick} className="edit">
          Edit
        </button>
        <button onClick={handleDeleteClick} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
