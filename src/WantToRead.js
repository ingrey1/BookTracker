import React from 'react';
import Book from './Book.js';
import PropTypes from 'prop-types'


const WantToRead = (props) => {


	
		return (

		<div>

		<h2>Want To Read</h2>
		
			{props.books.map( (book, k) => <Book bookShelfHandler={props.bookShelfHandler} selectedBook={props.selectedBook} key={k} bookInfo={book} />)}
		
		</div>

		


		);


	




}

export default WantToRead
