import React from 'react'
import Book from './Book.js'


class AlreadyRead extends React.Component {


	constructor(props) {

		super(props);

	}


	render() {


		return (
		
		<div>

		<h2>Already Read</h2>
		
			{this.props.books.map( (book, k) => <Book bookShelfHandler={this.props.bookShelfHandler} selectedBook={this.props.selectedBook} onClick={() => this.props.showBookMenu(book)} key={k} bookInfo={book} />)}
		
		</div>

		


		);


}


}

export default AlreadyRead
