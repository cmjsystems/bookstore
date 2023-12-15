import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { InventoryContext } from "../contexts/InventoryProvider";

function SetupPage() {
  const [formData, setFormData] = useState({ maxBooks: 0 });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const inventory = useContext(InventoryContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Parse the input as an integer
    const maxBooks = parseInt(formData.maxBooks);

    // Check if the input is NaN, 0, or null
    if (isNaN(maxBooks) || maxBooks === 0) {
      alert("Enter a valid number!");
      return;
    }

    // Set the max number of books
    inventory.maxBooks = maxBooks;

    // Navigate to the main page
    navigate('/main');
  };

  // Go back to the home page
  function handleHomePageClick() {
    navigate('/');
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#f0f8ff' // AliceBlue color
    }}>
      <h1 style={{ 
        marginBottom: '50px', 
        color: '#007BFF', 
        fontSize: '3em', 
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)' 
      }}>
        Setup page
      </h1>
      <form onSubmit={handleOnSubmit} style={{ textAlign: 'center' }}>
        <label style={{ fontSize: '1.2em' }}>Maximum number of books </label>
        <input type="text" name="maxBooks" value={formData.maxBooks} onChange={handleInputChange} />
        <br />
        <button 
          type="submit" 
          style={{ 
            margin: '20px', 
            padding: '20px 40px', 
            fontSize: '1.2em', 
            backgroundColor: '#007BFF', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#007BFF'}
        >
          Confirm
        </button>
        <button 
          onClick={handleHomePageClick} 
          style={{ 
            margin: '20px', 
            padding: '20px 40px', 
            fontSize: '1.2em', 
            backgroundColor: '#007BFF', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#007BFF'}
        >
          Home
        </button>
        <br />
        {error && <div className="error"><p>{error}</p></div>}
      </form>
    </div>
  );
}

export default SetupPage;