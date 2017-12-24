import React from 'react'
import BookMenu from './BookMenu.js'
import CollectionMenu from './CollectionMenu.js'

const Book = (props) => {

	let showMenu = false
	let showCollectionMenu = false
	if ((props.selectedBook != null) && (props.bookInfo.id === props.selectedBook.id)) {
		showMenu = true
	} 
	if (props.selectedBook != null) console.log(props.selectedBook.id)
	if (props.bookInfo.shelf == undefined) showCollectionMenu = true

	return (

			
	   <li className="shelfItem">	
	  
	   <img className="smallBook" alt="Book" src={


	   	(props.bookInfo !== undefined) ? props.bookInfo.imageLinks.smallThumbnail : "" 


	   } onClick={() => {

	   	console.log(props)
	    props.bookShelfHandler(props.bookInfo)
	    
	  } 

	     }
	  /> 
	    { showMenu && !showCollectionMenu && (<BookMenu bookInfo={props.bookInfo} bookShelfHandler={props.bookShelfHandler} />)}
	    { showMenu && showCollectionMenu && (<CollectionMenu addBook={props.addBook} bookInfo={props.bookInfo} bookShelfHandler={props.bookShelfHandler} />)}

		</li>	

		

		);

}

export default Book