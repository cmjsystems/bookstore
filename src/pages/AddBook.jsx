import React, { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../contexts/InventoryProvider";
import { useNavigate } from 'react-router-dom';
import "./../App.css";

function AddBookPage() {
  const navigate = useNavigate();
  const inventory = useContext(InventoryContext);
  const initialBook = { title: '', author: '', isbn: '', price: 0.0 }
  const [formData, setFormData] = useState({ amount: 0, ...initialBook });
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [createdBooks, setCreatedBooks] = useState(0);

  // // Show the book list
  // useEffect(() => { setShowBooks(inventory.books.length > 0) }, [inventory.books.length])

  const handleMainPageClick = () => {
    // Navigate to the main page
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
      setError("Please enter a valid amount of books.");
      return;
    }

    setError('')
    setShowForm(true)
  };

  const handleAddBookSubmit = (e) => {
    e.preventDefault();

    // Check if the form data is valid
    if (createdBooks >= formData.amount) {
      setError(`You have already created ${createdBooks} books.`);
      return
    }

    // Check if the form data is valid
    if (inventory.books.length >= inventory.maxBooks) {
      setError(`You can't add more books.`);
      return
    }

    // Check if the form data is valid
    if (!formData.title || !formData.author || !formData.isbn || !formData.price) {
      setError('Please fill in all the fields.');
      return;
    }

    // Validate the Title
    if (formData.title.length < 3 || formData.title.length > 40 ) {
      setError("A title with a minimum of 3 and a maximum of 40 characters is mandatory.");
      return;
    }

    // Validate the Author
    if (formData.author.length < 3 || formData.author.length > 40 ) {
      setError("A author with a minimum of 3 and a maximum of 40 characters is mandatory.");
      return;
    }

    // Validate the ISBN
    if (isNaN(formData.isbn)) {
      setError("Enter a valid ISBN!");
      return;
    } else if (formData.isbn <= 0) {
      setError("Enter a ISBN greater than 0!");
      return;
    // } else if (Number.isInteger(maxBooks)) {
    //   setError("Enter a whole number!");
    //   return;
    }

    // Validate the Price
    if (isNaN(formData.price)) {
      setError("Enter a valid price!");
      return;
    } else if (formData.price <= 0) {
      setError("Enter a price greater than 0!");
      return;
    // } else if (Number.isInteger(maxBooks)) {
    //   setError("Enter a whole number!");
    //   return;
    }

    // Add the book to the inventory
    inventory.addBook(formData.title, formData.author, formData.isbn, formData.price);

    // Increment the created books counter
    setCreatedBooks(createdBooks + 1);

    // View book list in browser console
    //console.log(`Book ID: ${formData.id}`);
    console.log(`Title: ${formData.title}`);
    console.log(`Author: ${formData.author}`);
    console.log(`ISBN: ${formData.isbn}`);
    console.log(`Price: ${formData.price}`);


    // Reset the book form
    setFormData({ ...formData, ...initialBook });
  };

  // Change the background color when the component mounts and unmounts
    useEffect(() => {
    // Change the background color when the component mounts
    document.body.style.backgroundColor = '#e3f2fd';
  
    // Change it back when the component unmounts
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <div className = "div_insert_update">
      
      <h1> New Books Page </h1>

      <form onSubmit = {handleAmountSubmit} className = "form_3">
        <label className = "label_form"> Amount of Books: </label>
        <input
          type = "text"
          name = "amount"
          className = "input_form"
          value     = {formData.amount}
          onChange  = {handleInputChange}
        />
        
        <button
          className   = "button_2" type = "submit"
          onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
        > Confirm </button>
        
        {error && <div><p className = "error">{error}</p></div>}
      </form>

      <br />
      {showForm && (
        <form onSubmit = {handleAddBookSubmit}>
          <hr />
          <br />
          <label className = "label_form_2"> Title: </label>
          <input
            type = "text"
            name = "title"
            className = "input_form_2"
            value     = {formData.title}
            onChange  = {handleInputChange}
          />
          &ensp;
          &ensp;
          <label className = "label_form_2"> Author: </label>
          <input
            type = "text"
            name = "author"
            className = "input_form_2"
            value     = {formData.author}
            onChange  = {handleInputChange}
          />
          &ensp;
          &ensp;
          <label className = "label_form_2"> ISBN: </label>
          <input
            type = "text"
            name = "isbn"
            className = "input_form_2"
            value     = {formData.isbn}
            onChange  = {handleInputChange}
          />
          &ensp;
          &ensp;
          <label className = "label_form_2"> Price: </label>
          <input
            type = "text"
            name = "price"
            className = "input_form_2"
            value     = {formData.price}
            onChange  = {handleInputChange}
          />
  
          <br />
          <br />
          <button
            className   = "button_2" type = "submit"
            onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
          > Add Book </button>
          &ensp;
          &ensp;
          <button
            className   = "button_2" onClick = {handleMainPageClick}
            onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
          > Main Page </button>
        </form>
      )}
    
    </div>
  );
}

export default AddBookPage;