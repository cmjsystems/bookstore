import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { InventoryContext } from "../contexts/InventoryProvider";
import "./../App.css";

function MainPage() {
  const navigate = useNavigate();
  const inventory = useContext(InventoryContext);
  const [showBooks, setShowBooks] = useState(inventory.books > 0);

  // Show the book list
  useEffect(() => { setShowBooks(inventory.books.length > 0) }, [inventory.books.length])

  // Reset the setup if the page is refreshed
  useEffect(() => {
    if (inventory.maxBooks === 0) {
      navigate('/');
    }
  }, [inventory.maxBooks, navigate]
  );

  // Validate the password with a maximum of attempts
  function handleLogin() {
    const max_attempts = 3;
    let attempts = 0;

    while (attempts < max_attempts) {
      if (prompt('Enter password') === 'pargol') {
        return true;
      }
      attempts++;
    }

    alert('Too many attempts. Try again later.');

    return false;
  }

  // Create a new book
  function handleAddBookClick() {
    if (handleLogin()) {
      // Navigate to the Add Book page
      navigate('/addbook');
    }
  }

  // Update a book
  function handleUpdBookClick() {
    if (handleLogin()) {
      // Navigate to the Update Book page
      navigate('/updatebook')
    }
  }

  // Display all books by a specific author
  function handleBooksByAuthorClick() {
    // Navigate to the Books by Author page
    navigate('/booksbyauthor');
  }

  // Display all books under a price range
  function handleBooksUnderPriceClick() {
    // Navigate to the Books under Price page
    navigate('/booksunderprice');
  }

  // Quit the application
  function handleQuitClick() {
    // Navigate to the Quit page
    navigate('/quit');
  }

  // Go back to the home page
  function handleHomePageClick() {
    // Navigate to the Home page
    navigate('/');
  }

  return (
    <div className = "div_insert_update">
      
      <h1>Main Menu Page</h1>

      <hr />

      <h2> What would you like to do? </h2>

      <div>
        <p>
          <button
            className   = "button_2" onClick = {handleAddBookClick}
            onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
          > Enter new books </button>
          &ensp;
          &ensp;
          <button
            className   = "button_2" onClick = {handleUpdBookClick}
            onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
          > Update book </button> &ensp; &ensp; (password required)
        </p>
        
        <p>
          <button
            className   = "button_2" onClick = {handleBooksByAuthorClick}
            onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
          > Display all books by a specific author </button>
          &ensp;
          &ensp;
          <button
            className   = "button_2" onClick = {handleBooksUnderPriceClick}
            onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
          > Display all books under a certain price </button>
        </p>
        
        <p>
          <button
            className   = "button_2" onClick = {handleQuitClick}
            onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
          > Quit </button>
          &ensp;
          &ensp;
          <button
            className   = "button_2" onClick = {handleHomePageClick}
            onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
          > Home Page </button>
        </p>
      </div>

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
        </>
      )}

      {/* Footer of the page */}
      <footer>
        Team: Brayan Gutierrez (223-1122), Claudiomar Moreira de Jesus (223-0862), Felipe Cardona Jaramillo (223-0752)
      </footer>
    
    </div>
  );
}

export default MainPage;