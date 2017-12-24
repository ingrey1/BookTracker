import React from "react";
import PropTypes from "prop-types";

/*

	Displays options available for a book that lives in the general search collection

*/ 

const CollectionMenu = props => {

  return (
    <div id="cMenu" onClick={() => props.addBook(props.bookInfo)}>
      Add Book To Your Collection
    </div>
  );
};

export default CollectionMenu;
