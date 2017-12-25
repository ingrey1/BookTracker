import React from "react";
import Book from "./Book.js";


/*

  Displays books that match user query, and aren't already in the user's collection.

*/



const SearchResults = props => {
  
  const sortedBooks = props.books.map(aBook => {
    const theBook = props.getBook(aBook.id)
    if (theBook !== undefined) aBook.shelf = theBook.shelf
    return aBook 
  });


  

 
  return (
    <ul>
      {sortedBooks.map((book, k) => (
        <Book
          key={k}
          showInfo={props.showInfo}
          selectedBook={props.selectedBook}
          bookShelfHandler={props.bookShelfHandler}
          bookInfo={book}
        />
      ))}
    </ul>
  );
};

export default SearchResults;
