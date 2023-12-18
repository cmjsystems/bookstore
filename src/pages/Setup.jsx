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

    // Parse the input as an integer
    const maxBooks = parseInt(formData.maxBooks);

    // Check if the input is NaN, 0, or null
    if (isNaN(maxBooks)) {
      setError("Enter a valid number!");
      return;
    } else if (maxBooks <= 0) {
      setError("Enter a number greater than 0!");
      return;
    // } else if (Number.isInteger(maxBooks)) {
    //   setError("Enter a whole number!");
    //   return;
    }

    // Navigate to the main page
    navigate('/main');
  };

  // Go back to the home page
  function handleHomePageClick() {
    navigate('/');
  }

  return (
    <>
    <div className = "div_general">

      <h1> Setup Page </h1>

      <form onSubmit = {handleOnSubmit} className = "form_1">
        <label className = "label_form"> Maximum Number of Books...: </label>
        &ensp;
        <input
          type = "text"
          name = "maxBooks"
          className = "input_form"
          value     = {formData.maxBooks}
          onChange  = {handleInputChange}
        />
        <br />
        {error && <div><p className = "error">{error}</p></div>}
        
        <button
          className   = "button_1" type = "submit"
          onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
        > Confirm </button>
        &ensp;
        &ensp;
        &ensp;
        <button
          className   = "button_1" onClick = {handleHomePageClick}
          onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
        > Home </button>
      </form>
 
    </div>
    </>
  );
}

export default SetupPage;