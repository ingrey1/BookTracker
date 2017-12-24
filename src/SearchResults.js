import React from 'react'
import Book from './Book.js'
import sortBy from 'sort-by'
import CollectionMenu from './CollectionMenu.js'


const SearchResults = (props) => {

	const sortedBooks = props.books.filter(book => props.getBook(book.id) == undefined)

	console.log("search results addBook" + props.addBook)
	return (

		<ul>

		{sortedBooks.map((book, k) => <Book addBook={props.addBook} key={k} selectedBook={props.selectedBook} bookShelfHandler={props.bookShelfHandler} bookInfo={book} />) }	

		</ul>



		)



}

export default SearchResults