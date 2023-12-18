class Book {
    constructor(id, title, author, isbn, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.price = price;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get isbn() {
        return this._isbn;
    }

    set isbn(value) {
        this._isbn = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

export default Book;