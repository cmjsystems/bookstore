class Book {
    constructor(id, title, author, ISBN, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
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

    get ISBN() {
        return this._ISBN;
    }

    set ISBN(value) {
        this._ISBN = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

export default Book;