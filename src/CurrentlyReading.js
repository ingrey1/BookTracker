import React from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'

 const CurrentlyReading = (props) => {


	

		return (

		<div>
		
		<h2>Currently Reading</h2>
		
			{props.books.map( (book, k) => <Book selectedBook={props.selectedBook} bookShelfHandler={props.bookShelfHandler} key={k} bookInfo={book} />)}
		
		</div>

		


		);




}

export default CurrentlyReading
