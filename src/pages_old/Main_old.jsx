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
      navigate('/addbook');
    }
  }

  // Update a book
  function handleUpdBookClick() {
    if (handleLogin()) {
      navigate('/updatebook')
    }
  }

  // Display all books by a specific author
  function handleBooksByAuthorClick() {
    navigate('/booksbyauthor');
  }

  // Display all books under a price range
  function handleBooksUnderPriceClick() {
    navigate('/booksunderprice');
  }

  // Quit the application
  function handleQuitClick() {
    navigate('/quit');
  }

  // Go back to the home page
  function handleHomePageClick() {
    navigate('/');
  }

  return (
    <>
      <h1>Main Menu Page</h1>

      <hr />

      <h3>What would you like to do?</h3>

      <p><button onClick={handleAddBookClick}>Enter new books</button> &ensp;(password required)</p>
      <p><button onClick={handleUpdBookClick}>Change information of a book</button> &ensp;(password required)</p>
      <p><button onClick={handleBooksByAuthorClick}>Display all books by a specific author</button></p>
      <p><button onClick={handleBooksUnderPriceClick}>Display all books under a certain price</button></p>
      <p><button onClick={handleQuitClick}>Quit</button></p>
      <p><button onClick={handleHomePageClick}>Home Page</button></p>

      <hr />

      {/* Show the book list */}
      <h3>List of books avaiable...: ({inventory.books.length})</h3>

      {showBooks > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {inventory.books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </>
      )}

      {/* Footer of the page */}
      <br />
      <br />
      <hr />
      <footer>
        <ul>
          <li>Team</li>
            <ul>
              <li>Brayan Gutierrez - Student Number: 223-1122</li>
              <li>Claudiomar Moreira de Jesus - Student Number: 223-0862</li>
              <li>Felipe Cardona Jaramillo - Student Number: 223-0752</li>
            </ul>
        </ul>
      </footer>
    </>
  );
}

export default MainPage;