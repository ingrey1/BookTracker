import React from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'



const SearchResults = (props) => {

	const sortedBooks = props.books.filter(book => props.getBook(book.id) === undefined)

	console.log("search results addBook" + props.addBook)
	return (

		<ul>

		{sortedBooks.map((book, k) => <Book addBook={props.addBook} key={k} selectedBook={props.selectedBook} bookShelfHandler={props.bookShelfHandler} bookInfo={book} />) }	

		</ul>



		)



}

export default SearchResults