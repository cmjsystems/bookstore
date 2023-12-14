import Header from "../components/Header";
import "./App.css";

function BooksUnderPrice() {
  const books = []
  return (
    <>
      <Header />
      <h1>Books Under Price Page</h1>
      <br />

      {/* Display information of all books by that author. */}
      {/* <h5>Books List...: {books.length}</h5> */}
      <h5>Books List...:</h5>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
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

    </>
  );
}

export default BooksUnderPrice;