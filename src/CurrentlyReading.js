import React from "react";
import Book from "./Book.js";

/*

  Displays all the books that live in the currentlyReading shelf


*/

const CurrentlyReading = props => {
  return (
    <div>
      <h2>Currently Reading</h2>

      {props.books.map((book, k) => (
        <Book
          showInfo={props.showInfo}
          selectedBook={props.selectedBook}
          bookShelfHandler={props.bookShelfHandler}
          key={k}
          bookInfo={book}
        />
      ))}
    </div>
  );
};

export default CurrentlyReading;
