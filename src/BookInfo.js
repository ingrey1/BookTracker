import React from "react";

/*

  A component that will display some relevant info for a given book. The info
  is displayed in a popup.


*/

const BookInfo = props => {
 
  return (
    <div id="infoDiv">
      {props.book.title && (
        <span>
          <label className="bookLabel">Title:</label>
          {props.book.title}
        </span>
      )}
      <br />
      {props.book.authors.length > 0 && (
        <span>
          <label className="bookLabel">Author(s):</label>
          {props.book.authors.map(author => author + " ")}
        </span>
      )}
      <br />
      {props.book.infoLink && (
        <span>
          <label className="bookLabel">More Info:</label>
          <a target="_blank" href={props.book.infoLink}>
            Google Books
          </a>
        </span>
      )}
      <br />
    </div>
  );
};

export default BookInfo;
