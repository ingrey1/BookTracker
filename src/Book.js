import React from 'react'
import BookMenu from './BookMenu.js'


const Book = (props) => {

	let showMenu = false; // determines whether the book menu is shown
	// if this book has been clicked
	if ((props.selectedBook != null) && (props.bookInfo.id === props.selectedBook.id)) {
		showMenu = true;
	} 

	return (

			
	   <li className="shelfItem">	
	  
	   <img className="smallBook" alt="Book" src={


	   	(props.bookInfo !== undefined) ? props.bookInfo.imageLinks.smallThumbnail : "" 


	   } onClick={() => {
	     	
	    props.bookShelfHandler(props.bookInfo);
	    
	  } 

	     }
	  />

	  <p className="theTitle">{props.bookInfo.title.length > 0 && props.bookInfo.title}</p>

	    { showMenu && (<BookMenu showInfo={props.showInfo} bookInfo={props.bookInfo} bookShelfHandler={props.bookShelfHandler} />)}
	    

		</li>	

		

		);

}

export default Book