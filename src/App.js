import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import SetupPage from './pages/Setup';
import MainPage from './pages/Main';
import NewBooksPage from './pages/NewBooks';
import UpdateBookPage from './pages/UpdateBook';
import BooksByAuthorPage from './pages/BooksByAuthor';
import BooksUnderPricePage from './pages/BooksUnderPrice';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/newbooks" element={<NewBooksPage />} />
        <Route path="/updatebook" element={<UpdateBookPage />} />
        <Route path="/booksbyauthor" element={<BooksByAuthorPage />} />
        <Route path="/booksunderprice" element={<BooksUnderPricePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
