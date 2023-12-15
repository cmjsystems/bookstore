import React, { useContext, useState } from "react";
import { InventoryContext } from "../contexts/InventoryProvider";
import { useNavigate } from 'react-router-dom';

import "./../App.css";

const tableStyle = {
  borderCollapse: 'collapse',
  width: '80%',
  textAlign: 'left',
  marginBottom: '50px'
};

const thStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#007BFF',
  color: 'white'
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px'
};

const pageStyle = {
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center', 
  height: '100vh',
  backgroundColor: '#f0f8ff' // AliceBlue color
};

const titleStyle = {
  marginBottom: '50px', 
  color: '#007BFF', 
  fontSize: '3em', 
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)' 
};


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
    <div style={pageStyle}>
      <h1 style={titleStyle}>Books by Author</h1>
  
      <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <label style={{ color: '#007BFF', fontSize: '1.2em' }}>Author: </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          style={{ padding: '10px', fontSize: '1.2em' }}
        />
        <button type="submit" style={{ margin: '20px', padding: '15px', fontSize: '18px', backgroundColor: '#007BFF', color: 'white', border: '1px solid black' }}>Confirm</button>
        {error && <div className="error" style={{ color: 'red', fontSize: '1.2em' }}><p>{error}</p></div>}
      </form>
  
      <p>Books: ({books.length})</p>
  
      {showBooks > 0 && (
        <>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Id</th>
                <th style={thStyle}>Title</th>
                <th style={thStyle}>Author</th>
                <th style={thStyle}>ISBN</th>
                <th style={thStyle}>Price</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td style={tdStyle}>{book.id}</td>
                  <td style={tdStyle}>{book.title}</td>
                  <td style={tdStyle}>{book.author}</td>
                  <td style={tdStyle}>{book.isbn}</td>
                  <td style={tdStyle}>{book.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
  
      <button onClick={handleMainPageClick} style={{ margin: '20px', padding: '15px', fontSize: '18px', backgroundColor: '#007BFF', color: 'white', border: '1px solid black' }}>Main Page</button>
    </div>
  );
}

export default BooksByAuthorPage;

