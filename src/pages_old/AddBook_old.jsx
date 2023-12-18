import React, { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../contexts/InventoryProvider";
import { useNavigate } from 'react-router-dom';

import "./../App.css";

function AddBookPage() {
  const navigate = useNavigate();
  const inventory = useContext(InventoryContext);
  const initialBook = { title: '', author: '', ISBN: '', price: 0.0 }
  const [formData, setFormData] = useState({ amount: 0, ...initialBook });
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [createdBooks, setCreatedBooks] = useState(0);

  const handleMainPageClick = () => {
    navigate('/main');
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleAmountSubmit = (e) => {
    e.preventDefault();

    const totalBooks = parseInt(formData.amount) + inventory.books.length;

    if (totalBooks > inventory.maxBooks) {
      const remainingBooks = inventory.maxBooks - inventory.books.length;
      setError(`You can only have ${remainingBooks} more book(s) in inventory.`);
      return
    }

    setError('')
    setShowForm(true)
  };

  const handleAddBookSubmit = (e) => {
    e.preventDefault();

    if (createdBooks >= formData.amount) {
      setError(`You have already created ${createdBooks} books.`);
      return
    }

    if (inventory.books.length >= inventory.maxBooks) {
      setError(`You can't add more books.`);
      return
    }
  };

  // Add the book to the inventory
  inventory.addBook(formData.title, formData.author, formData.ISBN, formData.price);

  // Increment the created books counter
  setCreatedBooks(createdBooks + 1);

  // Reset the book form
  setFormData({ ...formData, ...initialBook });

  return (
    <>
      <h1>New Books Page</h1>

      <form onSubmit={handleAmountSubmit}>
        <label>Amount of Books: </label>
        <input type="text" name="amount" value={formData.amount} onChange={handleInputChange} />
        <br />
        <button type="submit">Confirm</button>
        <br />
        {error && <div className="error"><p>{error}</p></div>}
      </form>

      <hr />

      {showForm && (
        <form onSubmit={handleAddBookSubmit}>

          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />

          <label>Author: </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />

          <label>ISBN: </label>
          <input
            type="text"
            name="ISBN"
            value={formData.ISBN}
            onChange={handleInputChange}
          />

          <label>Price: </label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />

          <br />

          <button type="submit">Add Book</button>

          <br />

        </form>
      )}

      <button onClick={handleMainPageClick}>Main Page</button>
    </>
  );
}

export default AddBookPage;
