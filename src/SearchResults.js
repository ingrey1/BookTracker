import React from "react";
import Book from "./Book.js";

/*

  Displays books that match user query, and aren't already in the user's collection.

*/



const SearchResults = props => {
  // sort the results, filter out any books the user already has
  const sortedBooks = props.books.filter(
    book => props.getBook(book.id) === undefined
  );

 
  return (
    <ul>
      {sortedBooks.map((book, k) => (
        <Book
          addBook={props.addBook}
          key={k}
          selectedBook={props.selectedBook}
          bookShelfHandler={props.bookShelfHandler}
          bookInfo={book}
        />
      ))}
    </ul>
  );
};

export default SearchResults;
