import React, { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../contexts/InventoryProvider";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

    if (isNaN(formData.amount) || formData.amount < 1) {
      alert("Please enter a valid amount of books.");
      return;
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

    // Add the book to the inventory
    inventory.addBook(formData.title, formData.author, formData.ISBN, formData.price);

    // Increment the created books counter
    setCreatedBooks(createdBooks + 1);

    // Reset the book form
    setFormData({ ...formData, ...initialBook });
  };

  return (
  <>
    <div style={{ backgroundColor: '#e3f2fd', height: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#007BFF' }}>New Books Page</h1>
  
      <form onSubmit={handleAmountSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ margin: '10px' }}>Amount of Books: </label>
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          style={{ margin: '10px', padding: '10px' }}
        />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button type="submit" style={{ margin: '20px', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: '1px solid black' }}>Confirm</button>
          <div style={{ margin: '20px', padding: '10px', backgroundColor: '#007BFF', color: 'white', textDecoration: 'none', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black' }}>
            <Link to="/main" style={{ color: 'white', textDecoration: 'none' }}>Go Back</Link>
          </div>
        </div>
        <br />
        {error && <div className="error" style={{ color: 'red' }}><p>{error}</p></div>}
      </form>
  
      <hr />
  
      {showForm && (
        <form onSubmit={handleAddBookSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#e3f2fd' }}>
          <label style={{ margin: '10px' }}>Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            style={{ margin: '10px', padding: '10px' }}
          />
  
          <label style={{ margin: '10px' }}>Author: </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            style={{ margin: '10px', padding: '10px' }}
          />
  
          <label style={{ margin: '10px' }}>ISBN: </label>
          <input
            type="text"
            name="ISBN"
            value={formData.ISBN}
            onChange={handleInputChange}
            style={{ margin: '10px', padding: '10px' }}
          />
  
          <label style={{ margin: '10px' }}>Price: </label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            style={{ margin: '10px', padding: '10px' }}
          />
  
          <br />
  
          <button type="submit" style={{ margin: '20px', padding: '10px', backgroundColor: '#007BFF', color: 'white' }}>Add Book</button>
        </form>
      )}
      </div>
    </>
  );
}

export default AddBookPage;
