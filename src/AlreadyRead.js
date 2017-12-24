import React from "react";
import Book from "./Book.js";


/*

  This functional component displays all of the books that belong to the 'read' shelf.

*/

const AlreadyRead = props => {

  return (
    <div>
      <h2>Already Read</h2>

      {props.books.map((book, k) => (
        <Book
          showInfo={props.showInfo}
          bookShelfHandler={props.bookShelfHandler}
          selectedBook={props.selectedBook}
          onClick={() => props.showBookMenu(book)}
          key={k}
          bookInfo={book}
        />
      ))}
    </div>
  );
}

export default AlreadyRead;
