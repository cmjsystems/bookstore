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

  addBook(title, author, ISBN, price) {
    const id = this.books.length + 1;
    const book = new Book(id, title, author, ISBN, price);
    this.books.push(book);
  }

  updateBook(id, title, author, ISBN, price) {
    const book = this.getBook(id);

    book.title = title;
    book.author = author;
    book.ISBN = ISBN;
    book.price = price;
  }

  //Returns the number of created Book objects prior to the time this method is called
  findNumberOfCreatedBooks() {
    return this.books.length;
  }

  //Returns the list of books by a given author
  findBooksByAuthor(author) {
    // return this.books.filter((book) => book.author === author);
    return this.books.filter((book) => book.author.includes(author));
  }

  //Returns the list of books by range of prices
  findBooksByPrice(priceFrom, priceTo) {
    return this.books.filter((book) => book.price >= priceFrom && book.price <= priceTo);
  }

  equals(book) {
    return this.ISBN === book.ISBN && this.price === book.price;
  }

  getBook(id) {
    return this.books.find(book => book.id === id);
  }

  getBooks() {
    return this.books;
  }

  displayInfo() {
    console.log(`Book ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`ISBN: ${this.ISBN}`);
    console.log(`Price: ${this.price}`);
  }
}

export default Bookstore;