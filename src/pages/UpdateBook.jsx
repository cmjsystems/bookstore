import React, { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../contexts/InventoryProvider";
import { useNavigate } from 'react-router-dom';
import "./../App.css";

function UpdateBookPage() {
  const navigate = useNavigate();
  const inventory = useContext(InventoryContext);
  const initialBook = { title: '', author: '', isbn: '', price: 0.0 }
  const initialFormData = { id: 0, ...initialBook }
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');
  const [formDisabled, setFormDisabled] = useState(true);
  const [showBooks, setShowBooks] = useState(inventory.books > 0);

  // Show the book list
  useEffect(() => { setShowBooks(inventory.books.length > 0) }, [inventory.books.length])

  const handleMainPageClick = () => {
    // Navigate to the main page
    navigate('/main');
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleBookIdSubmit = (e) => {
    e.preventDefault();

    // Check if the book id is valid
    if (formData.id === undefined || formData.id === null || parseInt(formData.id) === 0) {
      setError(`Please enter a valid book id.`);
      return
    }

    const book = inventory.getBook(parseInt(formData.id))

    // Check if the book id exists
    if (!book) {
      setError(`Book with id ${formData.id} not found.`);
      return
    }

    setFormData({ ...formData, title: book.title, author: book.author, isbn: book.isbn, price: book.price })

    setError('')
    setFormDisabled(false)
  };

  const handleUpdateBookSubmit = (e) => {
    e.preventDefault();

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

    // Update the book in the inventory
    inventory.updateBook(parseInt(formData.id), formData.title, formData.author, formData.isbn, formData.price);

    // Reset the form data and disable the form
    setFormData(initialFormData);
    setFormDisabled(true);
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
  
      <h1> Update Book Page </h1>
  
      <form onSubmit = {handleBookIdSubmit} className = "form_3">
        <label className = "label_form"> Book Id: </label>
        <input
          type = "text"
          name = "id"
          className = "input_form"
          value     = {formData.id}
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
      <form onSubmit = {handleUpdateBookSubmit}>
        <hr />
        <br />
        <label className = "label_form_2"> Title: </label>
        <input
          type = "text"
          name = "title"
          className = "input_form_2"
          value     = {formData.title}
          disabled  = {formDisabled}
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
          disabled  = {formDisabled}
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
          disabled  = {formDisabled}
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
          disabled  = {formDisabled}
          onChange  = {handleInputChange}
        />
        <br />
        <br />
        <button
          className   = "button_2" type = "submit"
          onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
        > Update Book </button>
        &ensp;
        &ensp;
        <button
          className   = "button_2" onClick = {handleMainPageClick}
          onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
        > Main Page </button>
        <br />
        <br />
        <hr />

        {/* Show the book list */}
        {parseInt(inventory.books.length) > 1 ? (
          <p>List of available books: ({inventory.books.length})</p>
        ) : (
          <p>Book: ({inventory.books.length})</p>
        )}
  
        {showBooks > 0 && (
          <>
            <table className = "table_1">
              <thead>
                <tr>
                  <th className = "table_th_1"> Id      </th>
                  <th className = "table_th_1"> Title   </th>
                  <th className = "table_th_1"> Author  </th>
                  <th className = "table_th_1"> ISBN    </th>
                  <th className = "table_th_1"> Price   </th>
                </tr>
              </thead>
              <tbody>
                {inventory.books.map((book) => (
                  <tr key={book.id}>
                    <td className = "table_td_1"> {book.id}     </td>
                    <td className = "table_td_1"> {book.title}  </td>
                    <td className = "table_td_1"> {book.author} </td>
                    <td className = "table_td_1"> {book.isbn}   </td>
                    <td className = "table_td_1"> {book.price}  </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
          </>
        )}
      </form>

    </div>
  );
}

export default UpdateBookPage;