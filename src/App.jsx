import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import SetupPage from './pages/Setup';
import MainPage from './pages/Main';
import AddBookPage from './pages/AddBook';
import UpdateBookPage from './pages/UpdateBook';
import BooksByAuthorPage from './pages/BooksByAuthor';
import BooksUnderPricePage from './pages/BooksUnderPrice';
import QuitPage from './pages/Quit';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/addbook" element={<AddBookPage />} />
        <Route path="/updatebook" element={<UpdateBookPage />} />
        <Route path="/booksbyauthor" element={<BooksByAuthorPage />} />
        <Route path="/booksunderprice" element={<BooksUnderPricePage />} />
        <Route path="/quit" element={<QuitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
