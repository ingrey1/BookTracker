import React from "react";
import BookInfo from "./BookInfo.js";

/*
  This component is used to display options available for a given book
  in the personal collection of the user
*/

const BookMenu = props => {
  let moveLocations = []; // shelves available for a book to be moved to
  if (props.bookInfo.shelf === "read") {
    moveLocations.push("currentlyReading");
    moveLocations.push("wantToRead");
  } else if (props.bookInfo.shelf === "currentlyReading") {
    moveLocations.push("read");
    moveLocations.push("wantToRead");
  } else {
    moveLocations.push("currentlyReading");
    moveLocations.push("read");
  }

  return (
    <div>
      {!props.showInfo && (
        <div id="popUpDiv">
          <select
            defaultValue="default"
            size="4"
            id="popUpSelect"
            onChange={e => {
              // move the book to whatever shelf was selected
              props.bookShelfHandler(props.bookInfo, e.target.value);
            }}
          >
            <option value="info">Info</option>
            <option value="delete">Delete</option>
            <option value="default" disabled="disabled">
              Move To
            </option>
            <option value={moveLocations[0]}>{moveLocations[0]}</option>
            <option value={moveLocations[1]}>{moveLocations[1]}</option>
          </select>)
        </div>
      )}

      {props.showInfo && <BookInfo book={props.bookInfo} />}
    </div>
  );
};

export default BookMenu;
