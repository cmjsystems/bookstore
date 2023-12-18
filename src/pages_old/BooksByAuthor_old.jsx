import React, { useContext, useState } from "react";
import { InventoryContext } from "../contexts/InventoryProvider";
import { useNavigate } from 'react-router-dom';

import "./../App.css";

function BooksByAuthorPage() {
  const navigate = useNavigate();
  const inventory = useContext(InventoryContext);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ author: '' });
  const [books, setBooks] = useState([]);
  const [showBooks, setShowBooks] = useState(false);

  function handleMainPageClick() {
    navigate('/main');
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (formData.author === null || formData.author === '') {
      setBooks([]);
      setShowBooks(false);
    } else {
      const booksByAuthor = inventory.findBooksByAuthor(formData.author);
      setBooks(booksByAuthor);
      setShowBooks(booksByAuthor.length > 0);
    }
  };

  return (
    <>
      <h1>Books by Author</h1>

      <hr />

      <form onSubmit={handleOnSubmit}>
        <label>Author: </label>
        <input type="text" name="author" value={formData.author} onChange={handleInputChange} />
        <br />
        <button type="submit">Confirm</button>
        <br />
        {error && <div className="error"><p>{error}</p></div>}
      </form>

      <p>Books: ({books.length})</p>

      {showBooks > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <button onClick={handleMainPageClick}>Main Page</button>
    </>
  );
}

export default BooksByAuthorPage;
