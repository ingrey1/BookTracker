import React from 'react'
import SearchBar from './SearchBar.js'
import {search} from './BooksAPI.js'
import SearchResults from './SearchResults.js'
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by'
import {Link} from 'react-router-dom'



class Search extends React.Component {



	constructor(props) {
		super(props)
		this.state = {currentTerm: "",
					  books: [] }


		this.getSearchResults = this.getSearchResults.bind(this) 					  
	}

	getSearchResults(term) {

		const MAX_RESULTS = 20

		
		search(term, MAX_RESULTS).then(results => {

				console.log(results)
				if (results instanceof Array) this.setState({books: results})	
		});
		


	}


	render() {

		return (<div>

			<Link to="/">Go To Personal Collection</Link>
			<SearchBar getSearchResults={this.getSearchResults} />
			<SearchResults getBook={this.props.getBook} addBook={this.props.addBook} selectedBook={this.props.selectedBook} bookShelfHandler={this.props.bookShelfHandler} books={this.state.books} />
		</div>)


	}






}

export default Search