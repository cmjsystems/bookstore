import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { InventoryContext } from "../contexts/InventoryProvider";

import "./../App.css";

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

    // Set the max number of books
    inventory.maxBooks = formData.maxBooks;

    // Navigate to the main page
    navigate('/main');
  };

  // Go back to the home page
  function handleHomePageClick() {
    navigate('/');
  }

  return (
    <>
      <h1>Setup Page</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Max Number of Books: </label>
        <input type="text" name="maxBooks" value={formData.maxBooks} onChange={handleInputChange} />
        <br />
        <button type="submit">Confirm</button>
        <button onClick={handleHomePageClick}>Home</button>
        <br />
        {error && <div className="error"><p>{error}</p></div>}
      </form>
    </>
  );
}

export default SetupPage;
