import React, { useContext, useState } from "react";
import { InventoryContext } from "../contexts/InventoryProvider";
import { useNavigate } from 'react-router-dom';
import "./../App.css";

function BooksByAuthorPage() {
  const navigate = useNavigate();
  const inventory = useContext(InventoryContext);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ author: '' });
  const [books, setBooks] = useState([]);
  const [showBooks, setShowBooks] = useState(false);

  function handleMainPageClick() {
    // Navigate to the main page
    navigate('/main');
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Check if the author is null or empty
    if (formData.author === null || formData.author === '') {
      setBooks([]);
      setError("Enter a name!");
      setShowBooks(false);
    } else {
      // Find the books by author
      const booksByAuthor = inventory.findBooksByAuthor(formData.author);
      setBooks(booksByAuthor);
      setShowBooks(booksByAuthor.length > 0);
    }

    // Check if the book id exists
    if (!formData.author) {
      setError(`The author not found.`);
      return
    }
  };

  return (
    <div className = "div_general">

      <h1> Books by Author </h1>
  
      <form onSubmit = {handleOnSubmit} className = "form_2">
        <label className = "label_form"> Author: </label>
        <input
          type = "text"
          name = "author"
          className = "input_form"
          value     = {formData.author}
          onChange  = {handleInputChange}
        />

        <button
          className   = "button_2" type = "submit"
          onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
        > Confirm </button>

        {error && <div><p className = "error">{error}</p></div>}
      </form>
  
      {parseInt(books.length) > 1 ? (
        <p>Books List: ({books.length})</p>
      ) : (
        <p>Book: ({books.length})</p>
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
              {books.map((book) => (
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
        </>
      )}
  
      <button
          className   = "button_2" onClick = {handleMainPageClick}
          onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
      > Main Page </button>
    
    </div>
  );
}

export default BooksByAuthorPage;