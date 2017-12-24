import React from 'react'
import BookMenu from './BookMenu.js'
import CollectionMenu from './CollectionMenu.js'

const Book = (props) => {

	let showMenu = false; // determines whether the personal collection menu is shown
	let showCollectionMenu = false; // determines whether the general search menu is shown
	// if this book has been clicked
	if ((props.selectedBook != null) && (props.bookInfo.id === props.selectedBook.id)) {
		showMenu = true;
	} 
	// if this book has been clicked and it currently lives in the general search collection
	if (props.bookInfo.shelf === undefined) showCollectionMenu = true;

	return (

			
	   <li className="shelfItem">	
	  
	   <img className="smallBook" alt="Book" src={


	   	(props.bookInfo !== undefined) ? props.bookInfo.imageLinks.smallThumbnail : "" 


	   } onClick={() => {
	   	
	    props.bookShelfHandler(props.bookInfo);
	    
	  } 

	     }
	  /> 
	    { showMenu && !showCollectionMenu && (<BookMenu showInfo={props.showInfo} bookInfo={props.bookInfo} bookShelfHandler={props.bookShelfHandler} />)}
	    { showMenu && showCollectionMenu && (<CollectionMenu addBook={props.addBook} bookInfo={props.bookInfo} bookShelfHandler={props.bookShelfHandler} />)}

		</li>	

		

		);

}

export default Book