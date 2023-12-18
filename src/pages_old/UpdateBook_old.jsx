import React, { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../contexts/InventoryProvider";
import { useNavigate } from 'react-router-dom';

import "./../App.css";

function UpdateBookPage() {
  const navigate = useNavigate();
  const inventory = useContext(InventoryContext);
  const initialBook = { title: '', author: '', ISBN: '', price: 0.0 }
  const initialFormData = { id: 0, ...initialBook }
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');
  const [formDisabled, setFormDisabled] = useState(true);

  const handleMainPageClick = () => {
    navigate('/main');
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleBookIdSubmit = (e) => {
    e.preventDefault();

    if (formData.id === undefined || formData.id === null || parseInt(formData.id) === 0) {
      setError(`Please enter a valid book id.`);
      return
    }

    const book = inventory.getBook(parseInt(formData.id))

    if (!book) {
      setError(`Book with id ${formData.id} not found.`);
      return
    }

    setFormData({ ...formData, title: book.title, author: book.author, ISBN: book.ISBN, price: book.price })

    setError('')
    setFormDisabled(false)
  };

  const handleUpdateBookSubmit = (e) => {
    e.preventDefault();

    // Check if the form data is valid
    if (!formData.title || !formData.author || !formData.ISBN || !formData.price) {
      setError('Please fill in all the fields.');
      return;
    }

    // Update the book in the inventory
    inventory.updateBook(parseInt(formData.id), formData.title, formData.author, formData.ISBN, formData.price);

    // Reset the form data and disable the form
    setFormData(initialFormData);
    setFormDisabled(true);
  };

  return (
    <>
      <h1>Update Book Page</h1>

      <form onSubmit={handleBookIdSubmit}>
        <label>Book Id: </label>
        <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        <br />
        <button type="submit">Confirm</button>
        <br />
        {error && <div className="error"><p>{error}</p></div>}
      </form>

      <hr />

      <form onSubmit={handleUpdateBookSubmit}>

        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          disabled={formDisabled}
          onChange={handleInputChange}
        />

        <label>Author: </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          disabled={formDisabled}
          onChange={handleInputChange}
        />

        <label>ISBN: </label>
        <input
          type="text"
          name="ISBN"
          value={formData.ISBN}
          disabled={formDisabled}
          onChange={handleInputChange}
        />

        <label>Price: </label>
        <input
          type="text"
          name="price"
          value={formData.price}
          disabled={formDisabled}
          onChange={handleInputChange}
        />

        <br />

        <button type="submit" disabled={formDisabled}>
          Update Book
        </button>

        <br />

      </form>

      <button onClick={handleMainPageClick}>Main Page</button>
    </>
  );
}

export default UpdateBookPage;