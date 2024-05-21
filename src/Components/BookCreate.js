import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
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
