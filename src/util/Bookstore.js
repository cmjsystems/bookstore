import Book from './Book.js';

// Bookstore class with array of Book objects
class Bookstore {
  constructor(maxBooks = 0) {
    this.books = [];
    this._maxBooks = maxBooks;
  }

  get maxBooks() {
    return this._maxBooks;
  }

  set maxBooks(value) {
    this._maxBooks = value;
  }

  addBook(title, author, isbn, price) {
    const id = this.books.length + 1;
    const book = new Book(id, title, author, isbn, price);
    this.books.push(book);
  }

  updateBook(id, title, author, isbn, price) {
    const book = this.getBook(id);

    book.title  = title;
    book.author = author;
    book.isbn   = isbn;
    book.price  = price;
  }

  //Returns the number of created Book objects prior to the time this method is called
  findNumberOfCreatedBooks() {
    return this.books.length;
  }

  //Returns the list of books by a given author
  findBooksByAuthor(author) {
    // return this.books.filter((book) => book.author === author);
    // return this.books.filter((book) => book.author.includes(author));
    return this.books.filter((book) => book.author.toLowerCase().includes(author.toLowerCase()));
  }

  //Returns the list of books by range of prices
  findBooksByPrice(priceFrom, priceTo) {
    return this.books.filter((book) => book.price >= priceFrom && book.price <= priceTo);
  }

  //Returns the list of books by ISBN and price
  equals(book) {
    return this.isbn === book.isbn && this.price === book.price;
  }

  //Returns the book by ID
  getBook(id) {
    return this.books.find(book => book.id === id);
  }

  //Returns the list of books
  getBooks() {
    return this.books;
  }

  displayInfo() {
    console.log(`Book ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`ISBN: ${this.isbn}`);
    console.log(`Price: ${this.price}`);
  }
}

export default Bookstore;