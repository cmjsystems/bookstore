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

  useEffect(() => {
    // Change the background color when the component mounts
    document.body.style.backgroundColor = '#e3f2fd';
  
    // Change it back when the component unmounts
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#e3f2fd', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: '#007BFF', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '2em' }}>Update Book Page</h1>
  
      <form onSubmit={handleBookIdSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <label style={{ color: '#007BFF', fontSize: '1.2em' }}>Book Id: </label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          style={{ padding: '10px', fontSize: '1.2em' }}
        />
        <button type="submit" style={{ margin: '20px', padding: '15px', fontSize: '18px', backgroundColor: '#007BFF', color: 'white', border: '1px solid black' }}>Confirm</button>
        {error && <div className="error" style={{ color: 'red', fontSize: '1.2em' }}><p>{error}</p></div>}
      </form>
  
      <hr />
  
      <form onSubmit={handleUpdateBookSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
  
        <label style={{ color: '#007BFF', fontSize: '1.2em' }}>Title: </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          disabled={formDisabled}
          onChange={handleInputChange}
          style={{ padding: '10px', fontSize: '1.2em' }}
        />
  
        <label style={{ color: '#007BFF', fontSize: '1.2em' }}>Author: </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          disabled={formDisabled}
          onChange={handleInputChange}
          style={{ padding: '10px', fontSize: '1.2em' }}
        />
  
        <label style={{ color: '#007BFF', fontSize: '1.2em' }}>ISBN: </label>
        <input
          type="text"
          name="ISBN"
          value={formData.ISBN}
          disabled={formDisabled}
          onChange={handleInputChange}
          style={{ padding: '10px', fontSize: '1.2em' }}
        />
  
        <label style={{ color: '#007BFF', fontSize: '1.2em' }}>Price: </label>
        <input
          type="text"
          name="price"
          value={formData.price}
          disabled={formDisabled}
          onChange={handleInputChange}
          style={{ padding: '10px', fontSize: '1.2em' }}
        />
  
        <button type="submit" disabled={formDisabled} style={{ margin: '20px', padding: '15px', fontSize: '18px', backgroundColor: '#007BFF', color: 'white', border: '1px solid black' }}>
          Update Book
        </button>
  
      </form>
  
      <button onClick={handleMainPageClick} style={{ margin: '20px', padding: '15px', fontSize: '18px', backgroundColor: '#007BFF', color: 'white', border: '1px solid black' }}>Main Page</button>
    </div>
  );
}

export default UpdateBookPage;