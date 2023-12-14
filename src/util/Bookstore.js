import Book from './Book.js';

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

  findNumberOfCreatedBooks() {
    return this.books.length;
  }

  findBooksByAuthor(author) {
    // return this.books.filter((book) => book.author === author);
    return this.books.filter((book) => book.author.includes(author));
  }

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