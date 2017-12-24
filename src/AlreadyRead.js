import React from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'


const AlreadyRead = (props) => {



		return (
		
		<div>

		<h2>Already Read</h2>
		
			{props.books.map( (book, k) => <Book bookShelfHandler={props.bookShelfHandler} selectedBook={props.selectedBook} onClick={() => props.showBookMenu(book)} key={k} bookInfo={book} />)}
		
		</div>

		


		);


}




export default AlreadyRead
