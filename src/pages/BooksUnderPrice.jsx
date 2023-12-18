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


function BooksUnderPricePage() {
  const navigate = useNavigate();
  const inventory = useContext(InventoryContext);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ priceFrom: 0.0, priceTo: 0.0 });
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

    // Check if the price range is null or empty
    if (formData.priceFrom === null || formData.priceTo === '') {
      setBooks([]);
      alert("Enter a valid number!");
      setShowBooks(false);
    } else {
      const booksUnderPriceRange = inventory.findBooksByPrice(parseFloat(formData.priceFrom), parseFloat(formData.priceTo));
      setBooks(booksUnderPriceRange);
      setShowBooks(booksUnderPriceRange.length > 0);
    }
  };

  return (
    <div className = "div_general">

      <h1> Books Under Price </h1>
  
      <form onSubmit = {handleOnSubmit} className = "form_2">
        <label className = "label_form"> Price Range: </label>
        <input
          type = "text"
          name = "priceFrom"
          className = "input_form"
          value     = {formData.priceFrom}
          onChange  = {handleInputChange}
        />
        <input
          type = "text"
          name = "priceTo"
          className = "input_form"
          value     = {formData.priceTo}
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

export default BooksUnderPricePage;