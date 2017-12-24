import React from 'react'
import Book from './Book.js'
import {getAll} from './BooksAPI.js'

 class CurrentlyReading extends React.Component {


	constructor(props) {

		super(props);

	}


	render() {

		return (

		<div>
		
		<h2>Currently Reading</h2>
		
			{this.props.books.map( (book, k) => <Book selectedBook={this.props.selectedBook} bookShelfHandler={this.props.bookShelfHandler} key={k} bookInfo={book} />)}
		
		</div>

		


		);

}


}

export default CurrentlyReading
