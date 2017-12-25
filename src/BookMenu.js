import React from "react";
import BookInfo from "./BookInfo.js";

/*
  This component is used to display options available for a given book
  in the personal collection of the user
*/

const BookMenu = props => {


  return (
    <div>
      {!props.showInfo && (
        <div id="popUpDiv">
          <select
            defaultValue={props.bookInfo.shelf !== undefined ? props.bookInfo.shelf : "delete"}
            size="4"
            id="popUpSelect"
            onChange={e => {
              // move the book to whatever shelf was selected
              props.bookShelfHandler(props.bookInfo, e.target.value);
            }}
          >
            <option value="info">Info</option>
           
            <option id="noOption" value="noOption" disabled="disabled">
              Move To
            </option>
             <option value="delete">None</option>
            <option value="read">Read</option>
            <option value="wantToRead">Want To Read</option>
            <option value="currentlyReading">Currently Reading</option>
          </select>
        </div>
      )}

      {props.showInfo && <BookInfo book={props.bookInfo} />}
    </div>
  );
};

export default BookMenu;
