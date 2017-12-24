import React from 'react';
import Book from './Book.js';


export default class WantToRead extends React.Component {


	constructor(props) {

		super(props);

	}


	render() {
		return (

		<div>

		<h2>Want To Read</h2>
		
			{this.props.books.map( (book, k) => <Book bookShelfHandler={this.props.bookShelfHandler} selectedBook={this.props.selectedBook} key={k} bookInfo={book} />)}
		
		</div>

		


		);


	

	}	


}
