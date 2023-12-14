import React, { useContext, useState } from "react";
import { InventoryContext } from "../contexts/InventoryProvider";
import { useNavigate } from 'react-router-dom';

import "./../App.css";

function BooksUnderPricePage() {
  const navigate = useNavigate();
  const inventory = useContext(InventoryContext);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ priceFrom: 0.0, priceTo: 0.0 });
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

    if (formData.priceFrom === null || formData.priceTo === '') {
      setBooks([]);
      setShowBooks(false);
    } else {
      const booksUnderPriceRange = inventory.findBooksByPrice(parseFloat(formData.priceFrom), parseFloat(formData.priceTo));
      setBooks(booksUnderPriceRange);
      setShowBooks(booksUnderPriceRange.length > 0);
    }
  };

  return (
    <>
      <h1>Books Under Price</h1>

      <hr />

      <form onSubmit={handleOnSubmit}>
        <label>Price Range: </label>
        <input type="text" name="priceFrom" value={formData.priceFrom} onChange={handleInputChange} />
        <input type="text" name="priceTo" value={formData.priceTo} onChange={handleInputChange} />
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

export default BooksUnderPricePage;