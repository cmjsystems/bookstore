import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { InventoryContext } from "../contexts/InventoryProvider";

const buttonStyle = {
  margin: '10px', 
  padding: '20px 40px', 
  fontSize: '1.2em', 
  backgroundColor: '#007BFF', 
  color: 'white', 
  border: 'none', 
  borderRadius: '4px', 
  cursor: 'pointer', 
  transition: 'all 0.3s ease',
  boxShadow: '2px 2px 4px rgba(0,0,0,0.5)'
};

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

const footerStyle = {
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  backgroundColor: '#007BFF',
  color: 'white',
  textAlign: 'center',
  padding: '5px 0' // Reduced padding to make the footer smaller
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

function MainPage() {
  const navigate = useNavigate();
  const inventory = useContext(InventoryContext);
  const [showBooks, setShowBooks] = useState(inventory.books.length > 0);
  const [attempts, setAttempts] = useState(0);
  
  useEffect(() => {
    setShowBooks(inventory.books.length > 0);
  }, [inventory.books.length]);

  function handleAddBookClick() {
    const userPassword = prompt('Enter password for add a new book');
    if (userPassword === 'pargol') {
      navigate('/addbook');
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 3) {
        alert('Maximum attempts reached');
        handleQuitClick();
      } else {
        alert('Invalid password');
      }
    }
  }

  function handleUpdBookClick() {
    const userPassword = prompt('Enter password for update');

    if (userPassword === 'pargol') {
      navigate('/updatebook');
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 3) {
        alert('Maximum attempts reached');
        handleQuitClick();
      } else {
        alert('Invalid password');
      }
    }
  }

  function handleBooksByAuthorClick() {
    navigate('/booksbyauthor');
  }

  function handleBooksUnderPriceClick() {
    navigate('/booksunderprice');
  }

  function handleQuitClick() {
    navigate('/quit');
  }

  function handleHomePageClick() {
    navigate('/');
  }

  

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Main Menu Page</h1>
      <h3>List of books available...: ({inventory.books.length})</h3>
  
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
              {inventory.books.map((book) => (
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
          <br />
        </>
      )}
  
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={handleAddBookClick} style={buttonStyle}>Enter new books</button>
        <button onClick={handleUpdBookClick} style={buttonStyle}>Change information of a book</button>
        <button onClick={handleBooksByAuthorClick} style={buttonStyle}>Display all books by a specific author</button>
        <button onClick={handleBooksUnderPriceClick} style={buttonStyle}>Display all books under a certain price</button>
        <button onClick={handleQuitClick} style={buttonStyle}>Quit</button>
        <button onClick={handleHomePageClick} style={buttonStyle}>Home Page</button>
      </div>
  
      <footer style={footerStyle}>
      Team: Brayan Gutierrez (223-1122), Claudiomar Moreira de Jesus (223-0862), Felipe Cardona Jaramillo (223-0752)
      </footer>
    </div>
  );
}

export default MainPage;