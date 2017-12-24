import React from "react";
import Book from "./Book.js";


/*

  Display books in user's collection that they want to read.

*/

const WantToRead = props => {
  return (
    <div>
      <h2>Want To Read</h2>

      {props.books.map((book, k) => (
        <Book
          showInfo={props.showInfo}
          bookShelfHandler={props.bookShelfHandler}
          selectedBook={props.selectedBook}
          key={k}
          bookInfo={book}
        />
      ))}
    </div>
  );
};

export default WantToRead;
